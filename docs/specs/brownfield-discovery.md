# Brownfield Discovery

## Project map

This project is an existing Codex skill named `imagegen-ui-redesign`.

Current files:

- `SKILL.md` defines the skill trigger, workflow, ImageGen prompt template,
  implementation rules, verification expectations, stop rules, and reporting.
- `agents/openai.yaml` defines skill-picker UI metadata.
- `AGENTS.md`, `docs/specs/`, and `prompts/` provide the spec-first maintenance
  layer.

The skill is intended for UI redesign work where an agent crops real interface
components, uses ImageGen to generate component-level visual references,
implements durable layout changes in the target codebase, and verifies the
result in context.

## Current behavior extracted from the skill

- The skill should trigger for ImageGen-guided UI redesign, component-by-
  component visual regeneration, screenshot-to-layout synchronization,
  admin/dashboard visual reorganization, and generated mockups as design
  references.
- It must use ImageGen as design evidence, not as product truth.
- It must avoid asking ImageGen to redesign a full page in one pass except when
  the component is the full route shell.
- It must process meaningful components in batches, usually five at a time.
- It must keep a coverage ledger for large or global redesign requests.
- It must preserve target-repo specs, design systems, safety rules, data
  contracts, and behavior unless the user explicitly asks for behavior changes.
- It must verify both component-level output and full-screen context before
  accepting a redesign pass.
- It must report artifacts, changed files, verification commands, warnings, and
  remaining scope.

## Spec backlog

First-pass specs now exist for:

- `features/imagegen-ui-redesign-workflow.md`
- `features/spec-first-skill-maintenance.md`

Future specs should be considered when the related behavior changes:

- external ImageGen invocation and timeout/retry policy
- browser verification artifact naming and storage conventions
- companion-skill coordination with `imagegen`, `browser`, `playwright`, and
  `admin-ui-organizer`
- metadata generation and validation for `agents/openai.yaml`
- optional downstream QA scaffolding for projects that use this skill heavily

## Assumptions

- This project is a skill project, not a web UI application.
- Browser QA scaffolding from the bootstrap repository is not installed here
  because the project itself has no local web UI to test.
- The optional browser-QA prompt remains useful for downstream web UI repos, but
  adding a `qa/web` layer here would be misleading.
- Existing `SKILL.md` behavior is the current source of truth until a spec and
  implementation change intentionally replace it.

## Unknowns requiring confirmation

- Whether this skill should eventually include helper scripts for cropping,
  contact sheets, or prompt file generation.
- Whether generated ImageGen reference artifacts should have a global storage
  convention across all user repos or remain target-repo specific.
- Whether `agents/openai.yaml` should include more UI metadata beyond the
  current display name, short description, and default prompt.
