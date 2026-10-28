# ImageGen UI Redesign Workflow

## Goal

Define the required behavior for using ImageGen to improve existing user
interfaces through component-level visual references and durable implementation
changes.

The workflow must help agents reorganize real UI screens without treating a
generated image as product truth or bypassing the target repo's design system.

## Scope

Detailed reference matching and geometry repair also follow
[Visual Fidelity Analysis](visual-fidelity.md).

This spec covers:

- skill trigger intent for ImageGen-guided UI redesign
- component-by-component crop, reference, implementation, and verification loop
- batch coverage expectations for large redesign requests
- artifact and reporting expectations
- limits on what ImageGen output may influence

## Non-goals

This spec does not define:

- the exact ImageGen API or CLI implementation
- target-repo product behavior
- target-repo design tokens or component libraries
- browser QA cases for downstream web applications
- approval to change data, permissions, routes, or backend contracts

## User-visible behavior

- The agent should use this skill when a task asks for ImageGen-guided UI
  redesign, component-by-component visual regeneration, screenshot-to-layout
  synchronization, admin/dashboard reorganization, or generated mockups as
  design references.
- The agent must start from the real UI when possible by capturing screenshots
  or crops from the running target project.
- The agent must process the smallest meaningful decision surface, such as a
  toolbar plus table, drawer header, review panel, modal, or repeated row family.
- The agent must not send only a full-page screenshot and ask ImageGen to
  redesign everything at once, except when the full route shell is the component
  being redesigned.
- For global redesign work, the agent must keep a lightweight coverage ledger
  with the route, viewport, processed components, current batch, remaining
  components, constraints, and verification target.
- The default large-work batch size is five components unless the user chooses a
  different batch size.
- Each component pass should create or preserve before screenshots, ImageGen
  prompt text, generated reference images, after screenshots, and at least one
  full-screen after screenshot for context.
- By default, request a two-column component comparison: current UI on the
  left, proposed correction on the right, clearly labelled in the user's language.
  Match scale, viewport, content and state so differences remain assessable;
  annotate intentional size changes instead of hiding them through rescaling.
- Supply the accepted design reference when restoring fidelity. Mark concrete
  spacing, alignment, sizing and typography differences outside the UI; derive
  target CSS values from the governing design, not generated raster annotations.
- The generated comparison is a design proposal. Its left side may be redrawn;
  preserve the real before capture and use real before/after captures for final
  implementation evidence. Never label a proposed mockup as an implemented result.
- The agent must inspect every generated reference before implementation and
  rerun or narrow the prompt if the reference invents behavior, hides required
  state, or conflicts with the target design system.
- Implementation must extract durable layout decisions only: grouping,
  hierarchy, density, spacing, typography scale, table or card composition,
  disclosure, action priority, and long-text handling.
- The agent must preserve real product state, labels, counts, ids, routes,
  actions, permissions, and backend contracts unless the user explicitly asks for
  a behavior change and the target repo spec is updated.

## Invariants

- ImageGen output is design evidence only; it is never the source of product
  truth.
- Raw ids, paths, schema keys, JSON, and protocol details must not become the
  main visible meaning of a UI unless the target product explicitly requires
  that.
- Target-repo `AGENTS.md`, specs, safety rules, design system, tokens, icons,
  and local conventions take precedence over this skill's generic workflow.
- Component verification alone is not enough for a complete pass; the changed
  component must also work inside the full route.
- A global redesign is not complete until every route or screen in the agreed
  scope is screen-verified, the user changes scope, or a concrete blocker is
  reported.

## Edge cases and failure policy

- If the UI cannot be run, the agent should report the blocker and use existing
  screenshots or static files only when they are sufficient to preserve product
  truth.
- If ImageGen times out, the agent should fail that attempt, retry only the
  affected component with an explicit timeout or smaller crop, and reuse
  already-produced artifacts.
- If a generated reference is visually useful but invents state or actions, the
  agent may keep spacing or hierarchy ideas while rejecting invented behavior.
- If the requested scope is too large for one turn, the agent should report the
  completed batch, artifact paths, verification state, and next batch target
  without claiming the whole redesign is done.
- If browser verification shows clipping, overlap, broken columns, misleading
  actions, or hidden required state, the pass is not accepted.

## Route / state / data implications

- The skill itself does not define target application routes or state.
- Target application route, state, persistence, permissions, and data contracts
  may change only when requested and backed by the target repo's spec process.
- Recommended artifacts live under a stable target-repo path such as
  `artifacts/ui-redesign/pass-<n>/`, unless the target repo has its own evidence
  convention.
- Prompt files should record the component purpose, primary user decision,
  preserved data, improvement goals, and constraints.

## Verification mapping

- Review `SKILL.md` sections: Purpose, Core Rule, Coverage Loop, Batch Size,
  Component Selection, ImageGen Prompt Template, Implementation Rules,
  Verification, Iteration Stop Rules, and Reporting.
- For behavior changes, inspect generated prompts and screenshots in a real
  downstream UI task when practical.
- Check that `agents/openai.yaml` still describes component crops, ImageGen
  references, code changes, and full-screen verification accurately.

## Unknowns requiring confirmation

- Whether helper scripts should be added for crop naming, contact sheets, or
  prompt generation.
- Whether artifact paths should become stricter across all target repos.
