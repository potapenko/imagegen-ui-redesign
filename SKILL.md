---
name: imagegen-ui-redesign
description: Use when Codex needs to redesign, polish, reorganize, or globally refactor a UI by cropping individual components, sending each component screenshot to ImageGen as a visual reference task, implementing durable layout changes, and verifying the full screen afterward. Trigger for requests mentioning ImageGen-guided interface redesign, component-by-component UI regeneration, recursive screen polish, screenshot-to-layout synchronization, admin/dashboard visual reorganization, or using generated mockups as design references.
---

# ImageGen UI Redesign

## Purpose

Use ImageGen as a design critique and composition engine, not as a source of product truth. The workflow is: crop one real component, generate a better visual reference for that component's purpose, implement the durable layout decisions in the existing code/design system, then verify the full screen.

This skill is especially useful for admin panels, dashboards, operator tools, complex settings screens, review queues, data tables, and app screens whose layout needs systematic visual improvement.

## Required Companion Skills

When available, also use:

- `imagegen` for edit-mode image generation from screenshots.
- `browser` or `playwright` for local browser screenshots, snapshots, and visual QA.
- `admin-ui-organizer` for admin, dashboard, review, map, queue, or operator surfaces.

Follow the target repo's own `AGENTS.md`, specs, design system, and safety rules before changing code.

## Core Rule

Do not send only a full-page screenshot and ask ImageGen to redesign everything at once.

Work component by component:

1. Capture the current component crop.
2. Prompt ImageGen with what that component does and what decision it supports.
3. Inspect the generated reference.
4. Implement layout/composition changes in real UI code.
5. Capture the updated component.
6. Capture the whole screen to ensure the component still works in context.

For accepted-reference matching or precise alignment/spacing repair, read
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

For large requests, work in batches of five components unless the user specifies another batch size.

Each batch should produce:

- five component `before` screenshots;
- five ImageGen reference images;
- five component `after` screenshots;
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

- Set the browser to the user's expected working viewport. For desktop admin work, use the maximized desktop viewport unless project instructions say otherwise, and record the viewport in the artifacts or report.
- Capture the component as an element screenshot or a tight crop.
- Avoid using the full route screenshot as ImageGen input except when the target component is the full route shell.
- Capture the full route only after implementation to check context, balance, clipping, and competing primary actions.
- Store screenshots with stable names.

Recommended artifact layout:

```text
artifacts/ui-redesign/pass-<n>/components/<component>-before.png
artifacts/ui-redesign/pass-<n>/generated-references/<component>.prompt.txt
artifacts/ui-redesign/pass-<n>/generated-references/<component>-reference.png
artifacts/ui-redesign/pass-<n>/components/<component>-after.png
artifacts/ui-redesign/final/pass<n>-<m>-component-contact-sheet.png
```

If the repo already has another evidence convention, follow it.

## ImageGen Prompt Template

Use edit mode with the component screenshot as input. Write a prompt file for each component.

Default to a comparison sheet: **current UI on the left, proposed correction
on the right**. Use the user's language for captions, for example
«Сейчас — ориентир» and «Предлагаемое исправление — макет». Keep the same
viewport, content, state and scale; annotate intentional dimension changes.
Responsive or long-content variants can use another row or sheet with the same
comparison structure. Adapt this format when the user requests a different one.

For fidelity work, also pass the accepted component reference. Name the observed
mismatches: divider clearance, equal control heights, chevron centring, text
baseline, padding, radius, typography or clipping. Ask for targeted correction,
not a new visual direction. Put measurements and callouts outside the product UI.
Use specified CSS values as constraints; check that height, padding and borders
add up. Generated annotations are proposals, not reliable pixel measurements.

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
Inputs: <real current crop; accepted reference when available, with each role identified>
Output: two columns, current UI left and proposed correction right; same scale, state and content.
Captions: <user-language labels distinguishing reference illustration from proposed mockup>
Observed discrepancies: <specific visible problems, not generic polish requests>
Target geometry: <governing CSS dimensions, spacing, font size/line height and radii>
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

Use the available ImageGen workflow or CLI from the `imagegen` skill. Prefer edit mode because the current component screenshot is the reference input.

Use explicit timeouts for external ImageGen calls. If a component is very tall and times out, retry that component only with a longer explicit timeout, lower detail, or a smaller crop. Do not wait indefinitely.

Inspect every generated reference before implementing. If the reference invents behavior, ignores the component purpose, hides required state, or looks visually worse, rerun with a narrower prompt.

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

If a generated reference is useful only for spacing or hierarchy, extract only those decisions. ImageGen output is not a contract, source of truth, or approval to alter product behavior.

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

Run the project's relevant build/test commands. For frontend work, also verify in the browser.

Minimum browser verification:

1. Open the changed route.
2. Capture the updated component crops.
3. Capture the full route.
4. Check console errors.
5. Inspect screenshots for clipped text, overlapping badges, broken columns, misleading primary actions, or invented UI state.

For responsive product UIs, check the project-required desktop and mobile breakpoints. For admin/operator work, at least check the operator's normal desktop viewport.

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

- which five components/screens were processed;
- where the before/reference/after artifacts are saved;
- what code/spec files changed;
- what verification commands passed;
- any warnings that are expected or unrelated;
- that the broader recursive goal remains active when more screens/components remain.
