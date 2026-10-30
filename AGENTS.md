# AGENTS.md

This file defines workflow and safety rules for agents working in this skill
project.

It is not the source of truth for detailed skill behavior. Behavior contracts
live in `docs/specs/`.

## Reading order

Before changing behavior or implementation text:

1. Read this `AGENTS.md`.
2. Read `docs/specs/README.md`.
3. Read `docs/specs/brownfield-discovery.md`.
4. Read the relevant feature spec under `docs/specs/features/`.
5. Read `SKILL.md` and `agents/openai.yaml`.
6. Only then edit skill behavior, prompts, metadata, or bundled resources.

## Spec-first rule

Before implementing any non-trivial change:

1. Clarify the user-facing goal.
2. Create or update a spec under `docs/specs/`.
3. Confirm observable behavior, invariants, and edge cases.
4. Implement against the spec.
5. Update verification notes or artifacts.

Implement against the spec, not against ad hoc chat memory. If behavior changes,
update the spec in the same task.

## When a spec is required

Create or update a spec when a task:

- changes when or how this skill should trigger
- changes the ImageGen-guided redesign workflow
- changes artifact, screenshot, or verification expectations
- changes safety boundaries for external tools, storage, databases, or logs
- changes bundled prompts or onboarding behavior in a way future agents may copy
- introduces behavior that could be misunderstood later

A new spec is usually not required for:

- formatting-only edits
- typo fixes that do not change meaning
- comments-only edits
- behavior-neutral internal cleanup

## Brownfield rule

This is an existing skill. Before changing implementation text, do discovery
against the current files and write project-specific first-pass specs when they
are missing.

Do not replace the skill with generic bootstrap language. Preserve existing
ImageGen, browser verification, component-batch, and admin-UI assumptions unless
the related spec is intentionally changed.

## Separation of concerns

- `AGENTS.md` defines workflow and safety rules.
- `docs/specs/` defines skill behavior contracts.
- `prompts/` contains reusable chat prompts for setup and maintenance.
- `SKILL.md` is the executable guidance loaded by Codex when the skill triggers.
- `agents/openai.yaml` is UI metadata and must stay aligned with `SKILL.md`.

Do not merge these layers into one file.

## Database safety

The agent must not access MongoDB directly during a session. This includes REPL
queries, ad hoc query helpers, `mongosh`, and manual DB scripts.

The agent must never run any destructive database operation. This includes
delete, remove, drop, cleanup, purge, and any utility that may remove documents
or collections.

The agent may write code that works with data through normal application flows,
but only under the configured non-destructive runtime.

All destructive database operations are operator-only. Only the user may run
cleanup or deletion utilities.

## Storage safety

The agent must never run destructive object-storage operations. This includes
`aws s3 rm`, `aws s3 mv` between remote paths, `aws s3 sync --delete`,
`aws s3api delete-objects`, cleanup utilities, purge utilities, and any script
that may remove or overwrite Wasabi/S3 objects.

The agent may inspect storage, list objects, read manifests or reports, and
prepare exact console commands for the user.

All destructive Wasabi/S3 operations are operator-only. Only the user may run
deletion, purge, cleanup, or move commands that remove or replace existing
remote objects.

## Log readability

Log readability is as important as code readability. Treat logs as an
operator-facing interface, not as a dump of internal state.

Product logs must stay short, scannable, and useful in a live console. Prefer a
brief action plus a compact artifact identifier. Put verbose tracing, payloads,
timings, and internal context behind opt-in debug logging instead of the default
product log stream.

When investigating a problem, enable local debug logging, test the failing path,
and turn it back off after verification.

## External timeout discipline

Do not let external operations wait forever. Calls to remote services, object
storage, uploads, downloads, media tools, ImageGen calls, browser automation,
and similar boundaries must have an explicit maximum wait time.

If an external stage exceeds its timeout, fail the current attempt with an
exception instead of waiting indefinitely. Let the next service cycle or retry
pick the work up again from the current state.

When retrying, prefer reusing already-produced artifacts or already-completed
remote steps instead of recreating the whole chain from scratch. If a later
stage already succeeded, skip it and continue from the next missing or failed
step.

## Verification rule

If a task changes behavior, update or add appropriate verification notes. For
this skill, useful verification includes:

- checking `SKILL.md` still matches the relevant spec
- checking `agents/openai.yaml` still matches the trigger description
- checking prompts still point to the current bootstrap repository shape
- running any available Markdown or YAML validation when practical

Do not accept a behavior change from prose edits alone if the spec and metadata
now disagree.

## Writing style for specs

Specs should be short, explicit, behavior-oriented, and grounded in this skill's
actual workflow. Avoid deep implementation detail unless it preserves a contract
future agents must follow.
