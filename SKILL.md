---
name: imagegen-ui-redesign
description: Verify Web or SwiftUI UI against an accepted mockup with ImageGen. Review composite UI by part and then as a whole. Repeat affected part checks and the whole comparison after every correction. Also use for new designs and substantial redesigns requiring mockup approval. Standalone small prescribed edits use focused checks.
---

# ImageGen UI Redesign

## Purpose

Use ImageGen for visual proposals and corrections within the product's contracts.
Apply the core loop to new designs and substantial visual repair on Web and
native SwiftUI surfaces. Work on the smallest meaningful component in scope.

Requests to verify an implementation against an accepted mockup start at the
comparison, even if no new visual choice is needed. Backend-only work,
behavior-neutral refactoring and small prescribed edits outside an ongoing
mockup comparison use focused checks.

This skill is especially useful for admin panels, dashboards, operator tools, complex settings screens, review queues, data tables, and app screens whose layout needs systematic visual improvement.

## Required Companion Skills

When available, also use:

- In Codex, `imagegen` for editing screenshots. In local Claude Code, use the
  bundled client under [Image Generation](#image-generation).
- The project's browser workflow for Web capture and visual QA, or its permitted
  native app/Simulator tools for SwiftUI. Do not recreate native UI in a browser.
- `admin-ui-organizer` for admin, dashboard, review, map, queue, or operator surfaces.

Follow the target repo's applicable instructions (including `CLAUDE.md` or
`AGENTS.md`), specs, design system and safety rules before changing code.

## Core Rule

Do not send only a full-page screenshot and ask ImageGen to redesign everything at once.

Work component by component:

1. Pin the whole component in scope, the accepted reference(s) for each required
   state and size, and applicable product/design contracts. For a composite,
   name its visible parts and the relationships between them before reviewing.
   For a new component use existing product references and tokens until there
   is a running UI.
2. Generate the annotated comparison sheet defined in the ImageGen Prompt Template
   below, including drafting marks and both lower text panels. Inspect it, show it inline
   in the current chat and obtain user acceptance before implementing new visual
   choices. Reuse a reference already accepted for this scope without reapproval.
3. For an existing implementation, start with its running UI. For a new one,
   implement the accepted design first. Capture the actual component and its
   containing screen at comparable content, state, theme and dimensions.
4. Always run the whole comparison. For a composite, run the parts pass first.
   - **Parts.** Send paired real/reference crops of each named part to ImageGen,
     taken from the same state as the whole views. If a part contains several
     elements, keep their common parent visible and assess each element and
     each important relationship separately on its detail sheet. A gap crop
     must include both facing edges. For every check record the property or
     edge pair, actual value, target and basis, then the outcome (matches,
     differs or unverified). Use relational criteria where no number is known.
   - **Whole.** Send the **entire scoped component** and its accepted reference
     to ImageGen. Ask “Across the whole component, which material differences
     do you see, including any I have not named?” Compare composition, order,
     size, spacing, type, media framing and controls. Carry open part findings
     into this pass and check how the parts fit together.

   Show every returned image inline with a short explanation
   before applying or superseding it. Label unsuitable outputs as rejected and
   explain why; a path, saved-file notice or agent-only inspection is not delivery.
5. Verify the proposal against the accepted target, product contracts and actual
   geometry. Compare the original views region by region at a common scale,
   including the empty space between neighboring elements. An ImageGen claim
   of a match that contradicts the originals fails the pass. Return the whole
   inputs with the measured discrepancy for a bounded correction; keep the
   finding open until the actual UI matches. In a review-only task, report
   discrepancies. When repairs are authorized, apply fidelity fixes without
   asking again. Obtain acceptance before implementing any new material visual choice.
6. After **every implementation correction**, return to step 3: wait for the revised
   UI, recheck changed parts and any neighboring relationships the fix could move,
   then send the fresh whole component in each affected state/size to ImageGen
   with the same accepted reference. Check the fix and look again across
   the whole component. The pre-edit comparison cannot verify the new revision.
7. Finish when every required part and relationship has a verified result,
   every required state and size has a whole-component comparison
   valid for the final UI, each material discrepancy is resolved against real
   evidence, and the containing screen works in context. Show the actual final
   component and screen inline. Any missing part or whole comparison leaves
   its scope pending.

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

Follow the host's image storage and retention policy when provided.
Use a unique system-temp directory with distinct before/reference/correction/after
names; never delete images. Copy tool-managed results into temp without altering
originals and disclose that originals remain. Use retained absolute temp paths
for file embeds. Transient prompts/logs follow the separate non-image policy;
do not introduce repository artifact directories.

## ImageGen Prompt Template

For an existing component use edit mode with its screenshot as input. For a new
design use product references and tokens, without fabricating a current capture.
Keep the prompt with the component's transient evidence.

Unless the user explicitly asks for another format, **every component design and
correction prompt must request all four regions inside the returned image**:

1. **Upper left — current reference.** Caption «Сейчас — ориентир» in Russian.
2. **Upper right — target.** Use «По принятому макету» for an already accepted
   reference, or «Предлагаемое исправление — макет» for an unaccepted proposal.
3. **Lower left — «Сохраняем».** A readable text panel naming the concrete
   content, state, behavior and visual properties that stay unchanged.
4. **Lower right — «Меняем».** A readable text panel naming each bounded change
   with explicit verbs: «Убираем», «Заменяем», «Переносим», «Выравниваем».

Translate these captions into the user's language. Write the exact annotation
copy before calling ImageGen and include it in the prompt; do not leave it to
ImageGen to invent the rationale. Use concise component-specific statements,
usually 3–6 per panel, fewer when sufficient. Do not pad the list with generic
claims such as "cleaner design". Include material constraints and why a change
helps only when grounded in the user's request or accepted target.

**The lower panels must be usable implementation instructions.** For each material
geometry/typography correction, supply `element/property: current → target; delta
and direction; purpose/check`. Include units and distinguish measured current
values, source declarations, accepted targets and proposals. Calculate the delta
before generation, only between comparable quantities. Put the numbers INSIDE
the lower panel too; dimension arrows alone do not satisfy this requirement.
Preserve key unchanged dimensions explicitly in «Сохраняем». Do not shorten
«gap 4 → 8 CSS px; increase by 4 px» to «improve spacing» or «center the control».

For adaptive layout, specify the rule/formula and its anchor: for example, equal
free space inside the remaining container, or maximum height derived from viewport
bottom minus panel top and the accepted bottom inset. Do not replace the rule with
a fixed offset/height measured at one size. If the current value is unknown, measure
it when available; otherwise state it is unknown and omit the delta. A new element
has no previous value, not zero. Non-geometric changes use the relevant value or
behavior description instead of invented pixels. Keep all material corrections;
split a crowded sheet rather than dropping the quantitative details.

The two lower panels are required visible image content, not optional chat
commentary. Dimension arrows, callouts or prose beside the image do not replace
them. Reserve enough space for the notes without shrinking or clipping the UI.
Match viewport, content, state and scale between the two upper regions; annotate
intentional dimension changes. Longer variants may use separate complete sheets.
For a new design with no current UI, label the left as product references and
the lower panels as inherited constraints / new proposals; never fabricate a before.

**Drafting overlay is also mandatory, not an optional decoration.** Before every
comparison/correction generation, read and fill the copyable
[annotated comparison prompt](prompts/annotated-comparison.md). Both upper views
must have dimension arrows with extension lines, labelled region brackets and
the alignment guides relevant to the task. Supply a callout list identifying
each panel, element/edge pair, label and measurement status. Use relational
labels when numbers are unknown. Do not remove the graphical layer just because
the lower notes already mention spacing or dimensions. A specific user-requested
format may override this; an agent's preference for a cleaner sheet may not.

For fidelity work, identify the part or whole pass from step 4 in the prompt.
Name observed mismatches as leads only. Invite additional findings in
separate callouts and allow an empty finding list when the inputs already match.
Keep measurements and callouts outside the product UI.
Use governing Web dimensions or native point-based layout constraints; check
size arithmetic. Preserve SwiftUI system controls, typography, safe areas and
supported adaptations. Generated annotations are proposals, not measurements.
Supply only established dimensions with explicit units and status: measured,
accepted target, or proposal. Omit unknown numbers; do not infer a fixed maximum
from a screenshot or copy a previous component's dimensions into a new task.

ImageGen may redraw the left column: the sheet is a comparison **mockup**, not
literal before/after evidence. Preserve the original capture. After coding,
show the real before and real after captures with matching framing, and compare
the actual after against the accepted reference. Do not substitute a generated
«after» for a running implementation or claim pixel-perfect fidelity from it.
Never label an ImageGen-redrawn panel «реальный скриншот». A source screenshot
supplied as input does not make the generated comparison a real capture.

```text
Use case: ui-mockup
Asset type: component layout reference
Primary request: <Correct fidelity to the accepted reference, or redesign within the user's requested scope>.
Component purpose: <what this component does>
Primary user decision: <what the user must decide or accomplish>
Inputs: <real current crop when it exists; product/accepted references with each role identified>
Required output layout: four regions in one image, not two UI pictures alone.
Upper left: <current reference; product references only when no implementation exists>.
Upper right: <accepted target or proposed correction>, matching scale/state/content.
Upper captions (verbatim): <current-reference caption> / <accepted-target or proposal caption>.
Lower left panel heading (verbatim): "Сохраняем" <translate to the user's language>.
Lower left panel text (verbatim):
- <element/property: known unchanged value + unit, or preserved behavior>
- <remaining relevant invariants>
Lower right panel heading (verbatim): "Меняем" <translate to the user's language>.
Lower right panel text (verbatim):
- <element/property: current → target + unit; signed delta/direction; purpose/check>
- <adaptive property: exact relationship/formula and anchors; verification condition>
- <non-geometric edit: concrete replacement/behavior, without invented pixel values>
Use supplied values verbatim, retain their measurement/authority labels, and keep
every material change. Unknown current value: say so and omit an exact delta.
Lower notes must include quantitative recipes, not merely repeat the design intent.
Render BOTH lower panels visibly INSIDE the image beneath their respective UI
regions. Do not omit, merge, crop, paraphrase or replace them with arrows alone.
Keep notes legible at normal viewing size; reserve space without shrinking the UI.
Footer (verbatim): <localized "Comparison mockup — not a runtime screenshot">.
Comparison scope (fidelity): <named part with visible neighbors and edge checks, or the complete component with open part findings>. Compare all supplied regions, including unlisted differences. Keep the accepted reference fixed.
Known discrepancies: <optional leads; verify them and check the rest of the component>
Target geometry: <governing dimensions and units, spacing, typography and radii for this platform>
Mandatory recipe and drafting overlay: use both filled blocks from prompts/annotated-comparison.md.
Draw double-ended dimension arrows, extension lines, labelled region brackets and
relevant dashed alignment guides around BOTH upper views. Use only the supplied
labels/values. Lower annotations cannot substitute for this graphical layer.
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

**Codex.** Use the available `imagegen` skill under its current tool policy. Prefer edit
mode for existing components. A CLI is optional only when that policy and user
authority permit it; a missing CLI/API key alone does not prove ImageGen unavailable.

**Local Claude Code.** Use the bundled [image client](imagegen.mjs) with
Node.js 22+. Run `node "${CLAUDE_SKILL_DIR}/imagegen.mjs" --check` first.
It checks key presence locally. If the key is missing, direct the user to
the [setup instructions](README.md#use-with-claude-code). Never request the
key in chat or print it. Before the first paid call, ensure the user's request
covers sending the selected inputs to OpenAI and billing their API project.

Write the prepared prompt to a task-owned temporary text file. For a comparison,
attach the actual capture first and the accepted reference second, naming their
roles in the prompt. Additional reference files follow in prompt order:

```sh
node "${CLAUDE_SKILL_DIR}/imagegen.mjs" "$current_capture" "$accepted_reference" < "$prompt_file"
```

For a new design, supply the product references. Use no image arguments only
for text-only generation. Allow up to five minutes for one call. On success
stdout contains the absolute PNG path. Read that file with Claude's Read tool,
inspect it, and present it to the user under the Core Rule. Agent-side Read
alone does not deliver an image to the user. If the client lacks inline display,
use a visible local viewer only when the user has chosen that delivery method.
Otherwise report the missing preview and keep the affected acceptance pending.
Capture the live UI through the project's browser or native tools.

Use explicit timeouts for external ImageGen calls. If a component is very tall and times out, retry that component only with a longer explicit timeout, lower detail, or a smaller crop. Do not wait indefinitely.

Inspect and deliver generated images under the Core Rule. If a reference invents
behavior, ignores the purpose, hides required state or looks worse, reject it and
rerun with a narrower prompt; do not silently omit the rejected correction.

Evaluate each reference before touching code:

- both lower preserve/change panels are present, readable, consistent with the
  supplied copy and illustrated differences; missing, clipped or contradictory
  panels fail the output format even if the UI mockup itself looks good;
- each requested drafting mark is visible on its named panel, spans the stated
  edges/regions and has the correct label/status; lower text about geometry alone
  is a failure, as are invented dimensions or misleading arrow endpoints;
- lower notes preserve the supplied before/target/delta or adaptive rule, with
  correct arithmetic, units and basis. Missing material values, inconsistent
  arrows, or replacing concrete corrections with vague intent fails the sheet;
- what hierarchy or grouping is better than the current UI;
- which details were demoted, collapsed, or moved closer to the related action;
- whether the reference preserves the real decision, state, count, and safety boundary;
- which visual ideas conflict with the app's design system and must be ignored;
- whether a second ImageGen pass is needed with a narrower component crop.

For a failed annotation format, show the output as rejected and request a bounded
correction that preserves the UI proposal and restores the exact missing text/layout.
Do not compensate only with chat prose or silently relax the format. If the retry
cannot deliver the required sheet, report that gap instead of claiming compliance.

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

These checks support the Core Rule's final comparison. A clean screen or a passing
check on one control cannot close an open whole-component comparison.

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
