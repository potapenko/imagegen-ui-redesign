# Annotated comparison — copyable ImageGen prompt block

Read before each comparison/correction generation. Fill the fields from the
current task, then append both mandatory blocks to the main skill prompt. They supplement
the required current/target views and lower Preserve/Change panels.

For accepted-reference checks, include this instruction on **every** pass:
“Compare the entire current component with the accepted reference at the same
scale and state. Inspect each region in order. Compare the order, occupied
widths and the empty intervals between neighboring elements on the original
inputs before redrawing them. Name the two edges and direction for any material
difference, including ones outside my listed findings. If none are visible,
say so.” Put newly spotted discrepancies
in labelled callouts, separate from supplied measurements. Use a fresh whole
component after an implementation correction; detail crops are supplemental.

Prepare a short callout list before invoking ImageGen. Each entry specifies:
`panel | feature | endpoints/regions | exact label | basis`.
Basis is measured current geometry, accepted target, explicit proposal, or a
qualitative relation. Use CSS px for Web, pt for native layouts; raster pixels
are a separate unit. Never infer real dimensions from a generated reference.

Prepare the lower-panel change recipe from the same evidence. For each material
edit use `element/property | current + basis | target + authority | delta/direction
or responsive rule | purpose/check`. Include unchanged values in Preserve.
Resolve arithmetic before generation. The examples below illustrate the format;
their values are not defaults or new measurements of the current product.

```text
MANDATORY LOWER-PANEL DETAIL — IMPLEMENTATION RECIPE
Render these supplied instructions verbatim inside the lower Preserve/Change
panels, in addition to the drafting marks. Do not summarize away numbers or rules.
Keep element/property, current → target, units, delta/direction and purpose/check.
For a responsive property, keep its formula/relationship and named anchors.
Unknown current value: label "not measured" and omit the delta. New element:
label "new"; never fabricate a zero baseline. Source CSS is not a measured box.
Use only supplied facts; distinguish accepted targets from proposals. Do not
invent numeric changes for action, wording, order or other non-geometric changes.

Preserve (exact copy):
<named property: unchanged value + unit; relevant unchanged behavior/state>
Change (exact copy):
<named property: current → target + unit; delta/direction; purpose/check>
<adaptive property: formula/relationship; anchors and conditions to verify>
<structural/content change: concrete action; affected element and preserved behavior>

For every shared property, the arrow's target label must match the lower recipe.
Prioritize material parameters; if the notes become dense, use a second complete
sheet instead of tiny text, clipped instructions or a generic three-bullet summary.
```

Filled example of lower notes, only when supported by the task's evidence:

```text
Сохраняем: высота шапки 44 CSS px; размер логотипа 14 CSS px; без изменения.
Меняем: промежуток между зонами 4 → 8 CSS px (+4); увеличить свободное место.
Меняем: позиция по Y 20 → 18 CSS px (−2, вверх); от того же края контейнера.
Меняем: максимальная высота = низ viewport − верх панели − 8 CSS px;
  убрать фиксированный предел, проверить нижний отступ при изменении высоты окна.
Меняем: центр выбора = центр оставшейся области между логотипом и кнопкой;
  левый свободный интервал = правому, без фиксированного сдвига в пикселях.
Нет исходного замера: область нажатия → минимум 44×44 CSS px по принятому макету;
  точную дельту не указывать, пока не измерено исходное значение.
```

```text
MANDATORY GRAPHICAL LAYER — ENGINEERING DRAWING ANNOTATIONS
This must be an annotated comparison sheet, not a clean UI mockup with prose alone.
Keep the UI and the lower Preserve/Change text panels from the main prompt.
Reserve a clear annotation band above, below and beside EACH upper UI view.

Draw the following graphical elements visibly inside the image:
1. Thin double-ended dimension arrows with perpendicular extension/witness lines
   attached to the named edges, for the supplied heights, widths, insets or gaps.
   Place each supplied label next to its dimension line, outside the product UI.
2. Brackets or separate dimension segments beneath the UI identifying its major
   layout regions. Label each region; do not present a region span as a measured
   numeric width unless that width was supplied.
3. Dashed centerline/baseline/alignment guides for the relationships named below.
   Connect compared edges or centers; distinguish text baseline from box center.
4. Short leader lines from explanatory callouts to the exact relevant elements.
   Do not draw arrows through labels, icons or actions, or obscure either UI view.
Gap arrows span EMPTY space only, never any part of a logo, label or control.
Region brackets cover the entire named region. Interrupt alignment guides through
the UI if they would cross text; endpoints remain visibly tied to the named edges.

Drawing convention: magenta dimension arrows/extension lines, blue region brackets
and alignment guides, neutral explanatory text. These are annotation colors only;
preserve the product palette. A supplied annotation reference may set other colors.
Use the same convention on left and right; do not infer precision from line length.

Required callouts (render every applicable entry; exact labels supplied here):
<LEFT | feature | endpoint A ↔ endpoint B | label | measured/accepted/proposed/relation>
<RIGHT | feature | endpoint A ↔ endpoint B | label | measured/accepted/proposed/relation>
<BOTH | regions | ordered named segments | labels | qualitative relation>
<panel | alignment | named centers/baselines/edges | label | qualitative relation>
<panel | changed detail | leader endpoint | exact explanation | accepted/proposed>

Numbers and units: render only the supplied values. Preserve their basis in the
label or a small legend. If a value is unknown, draw the bracket/guide and use its
supplied relational label, e.g. "equal gaps", "available width", "content-sized".
Do not estimate pixels, add plausible-looking dimensions or convert units yourself.
Illustrate responsive relationships; do not turn an example height into a fixed cap.

Both upper views need visible drafting marks, even when their notes describe the
same relationships. Keep the two lower panels fully readable and separate.
Do not replace the drawing layer with a table, bullet list or a blueprint grid.
If space is tight, enlarge the surrounding annotation area instead of hiding marks,
shrinking UI text, cropping notes or moving the explanation into chat commentary.
Footer: <localized "Comparison mockup; dimensions supplied, rendering schematic">.
```

## Filled example fragment — compact header

These are historical example inputs, not defaults for other components. Use only
when the current task supplies these values. Do not copy the old generated logo
width of approximately 96 px: it was not a verified measurement.

```text
LEFT | header height | top ↔ bottom of header | "44 CSS px — measured" | measured
RIGHT | header height | top ↔ bottom of header | "44 CSS px — target" | accepted
BOTH | horizontal insets | outer edge ↔ content start/end | "8 CSS px" |
       left measured / right accepted; include those statuses in a small legend
LEFT | regions | logo / current selectors / ellipsis | "Logo / Selection / Menu" | relation
RIGHT | regions | logo / flexible context area / Menu button |
        "Logo / Remaining space / Menu" | relation; no invented region widths
RIGHT | centering | context button ↔ both edges of remaining space |
        "equal free gaps" | relation; show paired horizontal spans and a dashed centerline
RIGHT | changed detail | leader to text Menu button | "Replace ellipsis with text" | accepted
```

## Output check

Check the returned image against the callout list and both lower panels. Missing
arrows, extension lines or requested guides, invented values, wrong endpoints and
unreadable labels fail the format. Also reject incorrect delta arithmetic, omitted
material values/rules, or contradictions between an arrow and its lower recipe.
Show that output inline as rejected; request a targeted correction preserving
the UI and restoring the missing/wrong marks or quantitative notes.
If a bounded retry still has wrong endpoints, keep the output rejected and report
the remaining defect; the presence of arrows is not a successful geometry check.
The diagram communicates constraints; actual runtime measurement verifies them.
