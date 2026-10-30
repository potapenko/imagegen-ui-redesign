# Spec-First Skill Maintenance

## Goal

Define how this existing skill should be maintained under a spec-first workflow.

The goal is to keep future changes grounded in explicit behavior contracts while
preserving the concise, loadable nature of a Codex skill.

## Scope

This spec covers:

- when to update specs before editing skill behavior
- how `AGENTS.md`, `docs/specs/`, `prompts/`, `SKILL.md`, and
  `agents/openai.yaml` relate
- brownfield discovery expectations
- prompt-pack behavior for maintainers
- verification expectations for skill changes

## Non-goals

This spec does not define:

- downstream project specs created while using the skill
- full browser QA scaffolding for this skill project
- a release or publication process
- generated-image quality scoring

## User-visible behavior

- Agents must read `AGENTS.md`, the spec README, brownfield discovery, and any
  relevant feature spec before changing skill behavior.
- Existing behavior must be discovered from the current project before changing
  `SKILL.md` or metadata.
- Non-trivial behavior changes must update or create a spec before or alongside
  the implementation text.
- The spec layer must stay project-specific. It should describe this skill's
  ImageGen UI redesign behavior rather than generic bootstrap behavior.
- The prompt pack should provide reusable prompts for greenfield setup,
  brownfield discovery, first-spec generation, optional web QA in downstream web
  repos, and day-to-day spec-first maintenance.
- The optional browser-QA prompt must stay optional and must not imply this
  skill project itself has a local web UI.
- `agents/openai.yaml` must stay aligned with the skill trigger and default
  usage described in `SKILL.md`.

## Invariants

- `AGENTS.md` defines workflow and safety rules, not detailed feature behavior.
- `docs/specs/` defines behavior contracts, not executable instructions.
- `SKILL.md` remains the concise executable guidance that Codex loads when the
  skill triggers.
- `prompts/` contains reusable chat prompts, not source-of-truth behavior.
- Skill docs should remain concise and avoid generic marketing or duplicated
  bootstrap text.
- Database, object-storage, log-readability, and external-timeout safety rules
  must not be weakened.

## Edge cases and failure policy

- If a requested edit is only formatting or typo cleanup, a spec update is not
  required unless the wording changes behavior.
- If a user asks for planning only, agents should produce discovery, questions,
  or spec drafts without editing implementation text.
- If `SKILL.md` and a spec conflict, the agent should flag the conflict and
  update both only when the intended behavior is clear.
- If metadata is stale but behavior is unchanged, update `agents/openai.yaml`
  and verify it still reflects the skill trigger.
- If a downstream project needs browser QA, use the prompt pack to add it there;
  do not add misleading `qa/web` scaffolding to this skill project.

## Route / state / data implications

- This skill project has no runtime application routes or persisted product
  state.
- The main durable state is repository text: specs, prompts, skill
  instructions, and metadata.
- Prompt changes may be copied into other projects, so they must remain explicit
  about when product code should or should not change.

## Verification mapping

- Check `AGENTS.md` reading order and safety rules after workflow changes.
- Check `docs/specs/README.md` and this spec after spec-process changes.
- Check `prompts/README.md` after prompt-pack changes.
- Check `SKILL.md` and `agents/openai.yaml` alignment after trigger or workflow
  changes.
- Run Markdown/YAML validation when available.

## Unknowns requiring confirmation

- Whether this skill should have automated metadata validation.
- Whether future helper scripts should live in this skill or in a shared
  UI-redesign toolkit.
