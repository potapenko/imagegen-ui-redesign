# From Image Analysis to a Verified UI Correction

Read within the main skill's scope for accepted-reference matching or substantial
visual repair. Use only the steps relevant to the observed problem; a small
prescribed edit does not trigger this whole workflow.
Product behavior and design authority remain with the target project's contracts.

## 1. Establish a comparable view

Identify the real current capture, accepted reference and proposed mockup.
Match viewport, content, state, theme, font loading and zoom before comparison.
Distinguish Web CSS dimensions or native points from screenshot pixels; verify
the actual capture scale instead of inferring it from a device label alone.
Keep the source capture intact. Use distinct source/crop/output paths and inspect
the resulting bounds; a successful capture command alone does not prove a valid crop.
Follow the host/project rules for image retention and native capture quality.

## 2. Inspect in dependency order

Start with component structure: required labels, groups, actions and content.
Then inspect the containing layout, widths/heights, spacing and alignment.
Next inspect typography, baselines, glyphs, radii, borders and theme colours.
Finally inspect hover, focus, disabled, multiline and other applicable states.
An incorrect container or scroll region can displace many correct children;
settle that cause before adjusting each child. A correct component need not change.

## 3. Make the discrepancy actionable

Use a compact record for the actual defects, not an exhaustive new checklist:

| Observation | Target and authority | Measurement | Owner / supported fix | After |
| --- | --- | --- | --- | --- |
| Selected control touches divider | Accepted clearance | Outer-box gap | Owning row padding | Measured gap |
| Icon appears too high | Accepted centred alignment | Control, line box and glyph | Alignment or line-height | Visual + geometry check |

Say whether the cause is measured or still a hypothesis. A screenshot suggests
what is wrong; inspect its owning layout and, on Web, computed styles to establish
why. If the target is missing, keep a proposed design choice separate and follow approval
rules. Do not invent a requirement simply to fill the measurement table.

Convert each material finding into the lower-panel implementation recipe:
`element/property | current + evidence | target + authority | delta/direction or
adaptive rule | purpose/check`. Compute numeric deltas in the same units, state
and coordinate system before calling ImageGen. A declared padding is not the
rendered outer gap; compare like quantities. Carry important unchanged dimensions
into Preserve, and retain exact values/rules in Change rather than generic verbs.
For an unknown baseline, measure it when possible or label it unknown without a
delta. For responsive layout, describe the relationship and anchors instead of
freezing one screenshot's result. Share this data with drafting callouts so the
image cannot silently prescribe two different target values.

## 4. Diagnose relationships, then edit their owner

For SwiftUI, inspect the owning stacks/grids, alignment guides, frames, padding,
layout priorities, safe areas and scroll containers as relevant. Distinguish
visible bounds, layout bounds and hit areas; retain native control behavior.
The table below gives Web diagnostics, not CSS requirements for SwiftUI.

| Symptom | Inspect before changing code |
| --- | --- |
| Unequal control heights | Outer painted boxes, box-sizing, padding/borders, min-size and intrinsic content |
| Low placeholder or high chevron | Font metrics, line-height, control padding, inline baseline and flex alignment |
| Popup shifted by a small amount | Anchor coordinate system, border-inclusive bounds, zoom and rounding |
| Declared style has no effect | Computed value, matched rule, specificity, inheritance, native appearance and important rules |
| Keyboard or long text pushes input away | Available parent height, minimum sizes, shrinking, wrapping and scroll owner |
| Utility action disturbs spacing | Visual glyph versus hit target; overlay positioning relative to its actual content |

Express equal heights, centring, gaps and flexible content through the existing
layout system. Keep static values in the owning component. Use measured dynamic
geometry only for genuine dependencies such as an anchor following a growing input.
Do not add wrappers, settings or parallel state when a property change suffices.
Use a scoped override only when the winning conflicting rule is established;
do not scatter important rules or translation offsets until a screenshot looks right.
Keep an overlay's accessible hit area even when its visible glyph occupies no flow space.

Check arithmetic explicitly: for example, a 32px control with 8px top/bottom
padding and a 1px divider needs 49px, not 48px. These are example numbers, not
defaults for other products. clientHeight excludes borders; bounding rectangles
include them but reflect transforms/zoom. Choose the measurement for the real
coordinate system rather than treating these Web APIs as interchangeable.

## 5. Use ImageGen to resolve the specific visual question

Supply the entire current component and the accepted reference with their roles
labelled. Ask ImageGen to find differences across the whole component, including
those outside the known findings. For a multi-state design sheet, isolate the
matching complete card without losing its surrounding relationships. Compare
the occupied widths and empty intervals between adjacent elements in each region
on the originals at a common scale. A redraw can silently close a real gap.
Describe known mismatches as leads. Request the
four-region comparison sheet from SKILL.md: current/target above, separate
preserve/change text panels below. Put explicit annotation copy in the prompt;
include the mandatory drafting block from
[the comparison template](../prompts/annotated-comparison.md). List each dimension
arrow's endpoints and supplied value/status, region bracket and relevant guide.
Arrows alone cannot replace lower panels; lower panels cannot replace arrows.
Check both layers for readability and agreement with the visible corrections.
Follow its Core Rule for inline delivery, approval and the correction loop;
this diagnostic method does not replace those steps.
Inspect hierarchy and content before judging polish: an attractive image may
merge a heading into a row, drop a phrase, invent a button or miscalculate sizes.
Reject that change; narrow the prompt when it prevents using the reference.
Use the product's real font and icon system instead of tracing generated glyphs.

## 6. Verify the implementation, then its limits

Confirm the intended code/build is running and wait for settled geometry.
After a click, wait for the relevant panel/label/state; do not measure an assumed
result immediately. Use the project's update workflow (hot reload where supported,
native rebuild/relaunch when needed). Discard evidence interrupted by transitions.
Measure the changed relation, inspect its actual crop, then inspect the full screen.
Check affected variants: short/long labels, multiline input, smallest supported
available height, dark/light themes, locale/RTL, focus/hover/touch as applicable.
Do not shrink accepted hit targets or spacing merely to make one viewport fit;
check the specified wrapping, flexible area and scrolling behaviour first.
After moving layout/scroll ownership, verify focus, draft and reading position
where the contract preserves them. Styling alone does not justify unrelated suites.
After every implementation correction, submit the fresh whole component to ImageGen
with the same accepted reference under the Core Rule. Close the original discrepancy
when the measured relation and rendered result support it and the whole view has
been checked for remaining or newly introduced differences.
Account for platform font rasterization and subpixel rounding; generated pixels
are not an exact rendering oracle. Report verified fidelity and remaining gaps,
especially when emulation or visual fixtures cannot prove native interaction.
