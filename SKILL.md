---
name: imagegen-ui-redesign
description: Create new visual designs or substantially redesign/correct Web and SwiftUI UI through ImageGen mockups, user acceptance, inline correction images and real-runtime verification. Use for material composition or hierarchy choices and substantial reference-matching work; exclude backend-only tasks, behavior-neutral refactoring and small prescribed UI edits without a new design choice.
---

# ImageGen UI Redesign

## Purpose

Use ImageGen for visual proposals and corrections within the product's contracts.
Apply the core loop to new designs and substantial visual repair on Web and
native SwiftUI surfaces. Work on the smallest meaningful component in scope.

Backend-only work, behavior-neutral refactoring and small prescribed UI edits
without a new design choice do not trigger this loop. Use direct edits and
focused verification for those tasks. Judge scope by the visual decision, not
the line count; a UI file change alone does not require ImageGen.

This skill is especially useful for admin panels, dashboards, operator tools, complex settings screens, review queues, data tables, and app screens whose layout needs systematic visual improvement.

## Required Companion Skills

When available, also use:

- `imagegen` for edit-mode image generation from screenshots.
- The project's browser workflow for Web capture and visual QA, or its permitted
  native app/Simulator tools for SwiftUI. Do not recreate native UI in a browser.
- `admin-ui-organizer` for admin, dashboard, review, map, queue, or operator surfaces.

Follow the target repo's own `AGENTS.md`, specs, design system, and safety rules before changing code.

## Core Rule

Do not send only a full-page screenshot and ask ImageGen to redesign everything at once.

Work component by component:

1. Read the applicable product/design contracts and establish the component's
   purpose. Capture its current UI. For a new component use existing product
   references and tokens; state that no current implementation exists.
2. Generate the proposed mockup from those references. Inspect it, show it inline
   in the current chat and obtain user acceptance before implementing new visual
   choices. Reuse a reference already accepted for this scope without reapproval.
3. Implement the accepted design in real UI code. Capture the actual component
   and containing screen at comparable content, state, theme and dimensions.
4. Send the real implementation crop and accepted reference to ImageGen for a
   targeted correction pass. Identify their roles; preserve the accepted direction.
   Show every returned design/correction image inline with a short explanation
   before applying or superseding it. Label unsuitable outputs as rejected and
   explain why; a path, saved-file notice or agent-only inspection is not delivery.
5. Check the proposal against the accepted target, product contracts and actual
   geometry. Apply fidelity repairs within the approved scope without asking
   again; obtain acceptance for any new material visual choice before coding it.
6. Capture the revised implementation and verify the corrected relations and
   affected states in context. Repeat steps 4–6 for remaining substantive visual
   mismatches. Do not invent changes or require an arbitrary number of passes.
7. Show the actual final component and screen inline, distinguish them from the
   generated proposal, and report verified results and remaining gaps.

ImageGen proposes corrections; it does not grant human acceptance or prove that
the implementation works. A rejected generation does not authorize changing the
accepted design. If ImageGen is unavailable, report the limit and leave dependent
design work pending rather than substituting your own design or claiming a pass.

For accepted-reference matching or alignment/spacing repair within this scope, read
[From image analysis to a verified correction](docs/visual-fidelity-method.md).
Use its sequence: visible discrepancy → measured relationship → verified cause
in the owning layout/style → smallest correction → component and screen proof.
It covers geometry, typography, cascade conflicts, constrained space and fresh
runtime evidence. Use the parts relevant to the defect; do not add a second
generic audit or impose another project's dimensions and workarounds.

## Coverage Loop

For global redesign work, maintain a lightweight coverage ledger before each batch:

```text
Route/screen:
Viewport:
Components already processed:
Components in this batch:
Remaining components:
Known constraints:
Verification target:
```

Continue with the next unprocessed component or screen until the requested scope is actually covered. If the work is too large for one turn, report the completed batch, saved artifacts, and the next batch target instead of claiming the global redesign is finished.

For a new project, start by inventorying the interface:

- list routes/screens reachable from navigation, menus, tabs, drawers, and major workflow steps;
- identify repeated component families once, then process the family exemplar and one risky variant;
- mark each screen as `unseen`, `cropped`, `referenced`, `implemented`, `component-verified`, or `screen-verified`;
- keep ids, paths, raw JSON, and machine keys as provenance only, never as the main visible meaning;
- resume from the ledger after interruption instead of restarting from the first screen.

## Batch Size

For large requests, work in batches of up to five components unless the user specifies another batch size.

Each batch should produce:

- real component `before` screenshots where an implementation exists;
- ImageGen reference and correction images for the processed components;
- real component `after` screenshots;
- at least one full-screen `after` screenshot;
- a short record of prompts, changed files, and verification commands.

Keep the broader goal active when the full interface has not been completely processed.

## Component Selection

Choose components that materially improve the target screen:

- route overview or command summary;
- main table, board, map, graph, list, or form;
- detail drawer, inspector, modal, or review panel;
- action toolbar or decision rail;
- empty/error/loading or edge-state panel;
- repeated item card or row family.

Prefer components that currently show:

- weak hierarchy;
- crowded badges or clipped text;
- raw ids, paths, schema keys, or JSON as primary labels;
- many equivalent cards;
- unclear next action;
- unbounded or noisy technical details;
- table columns that do not align with the user's decision.

Process a component as the smallest meaningful decision surface. A table with its toolbar can be one component if the toolbar controls the table. A drawer header, drawer summary, and drawer raw payload should usually be separate components because they serve different decisions.

## Organization Plan

Before editing each batch, write a concise plan:

```text
Primary user:
Primary task:
Decision the user must make:
What should be understood in 5 seconds:
What should be understood in 30 seconds:
Information needed immediately:
Information that can be collapsed:
Information that should be hidden unless debugging:
Primary action:
Secondary actions:
```

For non-admin product UIs, translate "operator decision" into the user's immediate task.

## Screenshot Rules

Use the real running UI whenever possible.

- Use the expected browser viewport or native window/device size and record it.
  Use the project's required desktop/mobile or native size variants.
- Capture the component as an element screenshot or a tight crop.
- Avoid using the full route screenshot as ImageGen input except when the target component is the full route shell.
- Capture the containing screen after implementation to check context, balance,
  clipping and competing primary actions. Existing whole-screen references may
  establish context before design without broadening the target component.
- Store screenshots with stable names.

Follow the [global image storage and retention policy](../../AGENTS.md#all-task-images-go-to-system-temp-and-are-never-agent-cleaned).
Use a unique system-temp directory with distinct before/reference/correction/after
names; never delete images. Copy tool-managed results into temp without altering
originals and disclose that originals remain. Use retained absolute temp paths
for file embeds. Transient prompts/logs follow the separate non-image policy;
do not introduce repository artifact directories.

## ImageGen Prompt Template

For an existing component use edit mode with its screenshot as input. For a new
design use product references and tokens, without fabricating a current capture.
Keep the prompt with the component's transient evidence.

Default to a comparison sheet: **current UI on the left, proposed correction
on the right**. Use the user's language for captions, for example
«Сейчас — ориентир» and «Предлагаемое исправление — макет». Keep the same
viewport, content, state and scale; annotate intentional dimension changes.
Responsive or long-content variants can use another row or sheet with the same
comparison structure. Adapt this format when the user requests a different one.
For a new design with no current UI, show the proposed component in its intended
context and identify the supplied product references separately.

For fidelity work, also pass the accepted component reference. Name the observed
mismatches: divider clearance, equal control heights, chevron centring, text
baseline, padding, radius, typography or clipping. Ask for targeted correction,
not a new visual direction. Put measurements and callouts outside the product UI.
Use governing Web dimensions or native point-based layout constraints; check
size arithmetic. Preserve SwiftUI system controls, typography, safe areas and
supported adaptations. Generated annotations are proposals, not measurements.

ImageGen may redraw the left column: the sheet is a comparison **mockup**, not
literal before/after evidence. Preserve the original capture. After coding,
show the real before and real after captures with matching framing, and compare
the actual after against the accepted reference. Do not substitute a generated
«after» for a running implementation or claim pixel-perfect fidelity from it.

```text
Use case: ui-mockup
Asset type: component layout reference
Primary request: <Correct fidelity to the accepted reference, or redesign within the user's requested scope>.
Component purpose: <what this component does>
Primary user decision: <what the user must decide or accomplish>
Inputs: <real current crop when it exists; product/accepted references with each role identified>
Output: <existing UI: current left and proposed correction right, matching scale/state/content; new design: proposed component in context, without a fabricated before>
Captions: <user-language labels distinguishing reference illustration from proposed mockup>
Observed discrepancies: <specific visible problems, not generic polish requests>
Target geometry: <governing dimensions and units, spacing, typography and radii for this platform>
Annotations: outside the UI; identify corrected differences and intentional size changes.
Keep: <same data, labels, states, actions, safety boundaries>
Improve:
- hierarchy and scan path;
- spacing and grouping;
- typography scale;
- row/card/table composition;
- action placement and priority;
- collapsed technical details;
- long text handling.
Constraints:
- do not invent product state, counts, ids, routes, actions, or data;
- do not make raw ids, paths, schema keys, or JSON the primary meaning;
- use the existing product/design-system style direction;
- avoid marketing hero treatment unless this is a marketing hero;
- no decorative blobs, fake metrics, emoji icons, or one-off visual effects.
```

For strict product UIs, add: "Generated image is design evidence only; implementation must preserve real data and product contracts."

## Image Generation

Use the available `imagegen` skill under its current tool policy. Prefer edit
mode for existing components. A CLI is optional only when that policy and user
authority permit it; a missing CLI/API key alone does not prove ImageGen unavailable.

Use explicit timeouts for external ImageGen calls. If a component is very tall and times out, retry that component only with a longer explicit timeout, lower detail, or a smaller crop. Do not wait indefinitely.

Inspect and deliver generated images under the Core Rule. If a reference invents
behavior, ignores the purpose, hides required state or looks worse, reject it and
rerun with a narrower prompt; do not silently omit the rejected correction.

Evaluate each reference before touching code:

- what hierarchy or grouping is better than the current UI;
- which details were demoted, collapsed, or moved closer to the related action;
- whether the reference preserves the real decision, state, count, and safety boundary;
- which visual ideas conflict with the app's design system and must be ignored;
- whether a second ImageGen pass is needed with a narrower component crop.

## Implementation Rules

Implement only durable layout decisions from the generated reference:

- grouping;
- hierarchy;
- spacing;
- density;
- typography scale;
- table/card/lane structure;
- collapsed details;
- action priority;
- long-text handling.

Do not blindly copy:

- invented labels, counts, entities, statuses, or workflow states;
- fake actions or controls;
- raw visual assets from the reference;
- design-system-incompatible colors, radii, shadows, or typography;
- behavior changes that are not in the product spec.

Use the local component system, tokens, icon library, and style conventions. Update specs/docs when user-visible behavior or durable UI rules change.

If a generated reference is useful only for spacing or hierarchy, apply only
decisions already authorized by the accepted target. A conflict requiring a new
visual choice returns to mockup acceptance. ImageGen cannot authorize behavior changes.

Translate visual changes into durable UI code:

- replace ad hoc spacing with reusable layout primitives when the codebase already has them;
- make stable widths, grid tracks, and min/max constraints explicit for tables, toolbars, cards, and counters;
- put the primary action near the decision it completes and keep utility actions visually quieter;
- use disclosure, muted metadata, or technical details panels for paths, ids, refs, protocol keys, payload fragments, and debug context;
- keep behavior, data loading, permissions, and backend contracts unchanged unless the user explicitly requested a behavior change and the repo specs are updated.

## Quality Checklist

Before accepting a component:

- The component's purpose is obvious.
- The primary human label comes before ids, paths, refs, schema names, and raw payloads.
- Counts are interpreted, not decorative.
- Status color is paired with text.
- Primary actions are rare and close to the decision they complete.
- Utility actions are visually quiet.
- Long text does not clip, overlap, or push controls into other columns.
- Tables keep stable columns and row rhythm.
- Technical details are muted or collapsed.
- Empty, error, pending, populated, and edge states are preserved or explicitly out of scope.
- The component works inside the full route, not only as an isolated crop.

## Verification

Use the project's smallest relevant build and visible-state checks. Presentation
changes alone do not require unrelated logic suites. This verifies the Core Rule's
loop; it is not a separate acceptance process.

For Web:

1. Open the changed route.
2. Capture the updated component crops.
3. Capture the full route.
4. Check console errors.
5. Inspect screenshots for clipped text, overlapping badges, broken columns, misleading primary actions, or invented UI state.

For responsive product UIs, check the project-required desktop and mobile breakpoints. For admin/operator work, at least check the operator's normal desktop viewport.

For SwiftUI, observe the running native app or appropriate Simulator using the
project's permitted tools. Capture the component and containing window/screen;
check affected supported sizes, text wrapping, safe areas, focus/input and states.
Use native points and actual capture scale, not assumed CSS dimensions. A preview
may support component work but cannot prove app interactions it does not exercise.
Do not impose browser console checks or a browser recreation on native work.

Do not accept a pass from code compilation alone. A pass is complete only when the implemented component screenshot and the full-screen screenshot both show that the new hierarchy works without clipping, overlap, misleading primary actions, or hidden required state.

## Iteration Stop Rules

For an explicit "global redesign" request, stop only when one of these is true:

- every route/screen in the agreed scope is `screen-verified`;
- the user narrows or changes the scope;
- a blocker prevents progress after repeated attempts and the next required input is concrete;
- the current turn must end, in which case report the completed batch, exact artifacts, verification state, and next batch target while keeping the larger goal unfinished.

Do not mark the broader redesign done just because one screen, one batch, or one reference contact sheet looks good.

## Reporting

Report:

- which components/screens were processed;
- inline images required by the Core Rule, with before/reference/correction/actual
  result clearly distinguished; paths may supplement but never replace delivery;
- what code/spec files changed;
- what verification commands passed;
- any warnings that are expected or unrelated;
- that the broader recursive goal remains active when more screens/components remain.
