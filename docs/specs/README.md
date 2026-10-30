# Skill Specs

This directory is the behavior-contract layer for the `imagegen-ui-redesign`
skill.

Specs describe what future agents should preserve when they maintain this skill.
They are lightweight and behavior-oriented. They define what the skill must do,
not every implementation detail inside `SKILL.md`.

## What lives here

- skill goals and scope
- trigger and companion-skill expectations
- user-visible workflow behavior
- invariants that must not regress
- external-operation and safety policies
- artifact and verification expectations
- known unknowns from brownfield discovery

## What does not live here

- root agent workflow rules
  - keep those in `AGENTS.md`
- executable skill instructions
  - keep those in `SKILL.md`
- UI metadata for the skill picker
  - keep that in `agents/openai.yaml`
- raw browser QA cases for downstream projects
  - keep those in the target repo's own QA layer

## How to use this directory

1. Read `brownfield-discovery.md` for the current project map and backlog.
2. Check whether the behavior already has a spec under `features/`.
3. If yes, update it before or alongside the behavior change.
4. If not, create a new spec using `templates/feature-spec.md`.
5. Keep the spec short and product-level.
6. Verify that `SKILL.md`, prompts, and metadata still agree with the spec.

## Scope rule

Create or update a spec when a task:

- changes the skill trigger or intended use
- changes the component-by-component redesign loop
- changes ImageGen, screenshot, artifact, or browser verification expectations
- changes safety rules around databases, storage, logs, or external timeouts
- changes prompt-pack behavior future agents may copy
- introduces behavior that could be misunderstood later

Skip new specs for:

- typo fixes
- formatting-only changes
- comments-only edits
- behavior-neutral internal cleanup

## Structure

```text
docs/specs/
  README.md
  brownfield-discovery.md
  templates/
    feature-spec.md
  features/
    <feature-name>.md
```

## Relationship with other layers

- `AGENTS.md` defines workflow and safety rules for agents.
- `docs/specs/` defines behavior contracts for this skill project.
- `prompts/` contains reusable chat prompts.
- `SKILL.md` contains the instructions Codex loads when the skill triggers.
- `agents/openai.yaml` contains UI-facing metadata and must stay aligned.

These layers must stay separate.

## Goal

Make skill behavior explicit before the executable guidance changes.
