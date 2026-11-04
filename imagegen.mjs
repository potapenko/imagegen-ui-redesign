import { openAsBlob } from 'node:fs';
import { mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { homedir, tmpdir } from 'node:os';
import { extname, isAbsolute, join } from 'node:path';
import { text } from 'node:stream/consumers';
import { parseArgs } from 'node:util';

const usage = 'node imagegen.mjs --help | --check | --save-key (key on stdin) | [image.png ...] < prompt.txt';
const model = 'gpt-image-2';
const types = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
const xdg = process.env.XDG_CONFIG_HOME;
const settings = join(xdg && isAbsolute(xdg) ? xdg : join(homedir(), '.config'), 'imagegen-ui-redesign');
const keyFile = join(settings, 'openai-api-key');

function isKeyValue(key) {
  return Boolean(key) && /^[\x21-\x7e]+$/.test(key) && !/[<>]/.test(key);
}

async function configuredKey() {
  try {
    return (await readFile(keyFile, 'utf8')).trim();
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return process.env.OPENAI_API_KEY?.trim();
  }
}

async function saveKey() {
  const key = (await text(process.stdin)).trim();
  if (!isKeyValue(key)) {
    throw new Error('Supply a single API key on standard input.');
  }
  await mkdir(settings, { recursive: true, mode: 0o700 });
  const temporary = join(settings, `.key-${randomUUID()}`);
  try {
    await writeFile(temporary, key + '\n', { flag: 'wx', mode: 0o600 });
    await rename(temporary, keyFile);
  } finally {
    await rm(temporary, { force: true });
  }
  console.log('OpenAI API key saved.');
}

async function main() {
  const { values, positionals: images } = parseArgs({
    allowPositionals: true,
    options: {
      help: { type: 'boolean', short: 'h' }, check: { type: 'boolean' }, 'save-key': { type: 'boolean' },
    },
  });
  if (values.help) {
    console.log(usage);
    return;
  }
  if ((values.check || values['save-key']) && (images.length || (values.check && values['save-key']))) {
    throw new Error(usage);
  }
  if (values['save-key']) return saveKey();
  const key = await configuredKey();
  if (!key) {
    console.error('OpenAI key missing. Ask the user in this chat for their API key, then use --save-key via stdin.');
    process.exitCode = 2;
    return;
  }
  if (!isKeyValue(key)) throw new Error('Malformed OpenAI API key. Supply a replacement using --save-key.');
  if (values.check) {
    console.log('OpenAI API key configured. No network request made.');
    return;
  }
  if (process.stdin.isTTY) throw new Error(usage);
  const prompt = (await text(process.stdin)).trim();
  if (!prompt) throw new Error('Provide a nonempty prompt on standard input.');
  if (images.length > 16) throw new Error('An edit accepts up to 16 reference images.');

  const headers = { Authorization: `Bearer ${key}` };
  let body;
  if (images.length) {
    body = new FormData();
    body.set('model', model);
    body.set('prompt', prompt);
    for (const [index, path] of images.entries()) {
      const extension = extname(path).toLowerCase();
      const type = types[extension];
      if (!type) throw new Error('Use PNG, JPEG or WebP reference files.');
      const file = await stat(path);
      if (!file.isFile() || !file.size || file.size >= 50_000_000) {
        throw new Error('Each reference must be a nonempty image file under 50 MB.');
      }
      body.append('image[]', await openAsBlob(path, { type }), `input-${index + 1}${extension}`);
    }
  } else {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify({ model, prompt });
  }

  const endpoint = images.length ? 'edits' : 'generations';
  const response = await fetch(`https://api.openai.com/v1/images/${endpoint}`, {
    method: 'POST', headers, body, redirect: 'error', signal: AbortSignal.timeout(300_000),
  });
  if (!response.ok) {
    const hints = {
      401: 'Check the OpenAI API key.',
      403: 'Check project permissions and image model access.',
      429: 'Check API billing, quota and rate limits.',
    };
    throw new Error(`OpenAI Images API returned HTTP ${response.status}. ${hints[response.status] ?? 'Check the request and service status.'}`);
  }
  const result = await response.json();
  const encoded = result.data?.[0]?.b64_json;
  if (typeof encoded !== 'string') throw new Error('OpenAI returned no image.');
  const png = Buffer.from(encoded, 'base64');
  if (!png.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))) {
    throw new Error('OpenAI returned an unexpected image format.');
  }
  const directory = await mkdtemp(join(tmpdir(), 'imagegen-ui-redesign-'));
  const output = join(directory, 'review.png');
  await writeFile(output, png, { flag: 'wx', mode: 0o600 });
  console.log(output);
}

main().catch(error => {
  console.error(error.name === 'TimeoutError' ? 'Image request timed out after five minutes.' : error.message);
  process.exitCode = 1;
});
