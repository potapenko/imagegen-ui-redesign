# From Image Analysis to a Verified UI Correction

Read for accepted-reference matching, precise component polish, or visible
alignment/spacing defects. Use only the steps relevant to the observed problem.
Product behavior and design authority remain with the target project's contracts.

## 1. Establish a comparable view

Identify the real current capture, accepted reference and proposed mockup.
Match viewport, content, state, theme, font loading and zoom before comparison.
Distinguish CSS dimensions from screenshot pixels; verify the capture's actual
pixel dimensions instead of assuming devicePixelRatio alone proves its scale.
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
what is wrong; inspect the layout/computed styles to establish why. If the target
is missing, keep a proposed design choice separate and follow the existing approval
rules. Do not invent a requirement simply to fill the measurement table.

## 4. Diagnose relationships, then edit their owner

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
coordinate system rather than treating these APIs as interchangeable.

## 5. Use ImageGen to resolve the specific visual question

Supply the current crop and accepted reference with their roles labelled.
Describe the observed mismatches and the relationships to preserve. Request the
comparison sheet from SKILL.md, with annotations outside the product UI.
Inspect hierarchy and content before judging polish: an attractive image may
merge a heading into a row, drop a phrase, invent a button or miscalculate sizes.
Reject that change; narrow the prompt when it prevents using the reference.
Use the product's real font and icon system instead of tracing generated glyphs.

## 6. Verify the implementation, then its limits

Confirm fresh code/styles and wait for the intended state or settled geometry.
After a click, wait for the relevant panel/label/state; do not measure an assumed
result immediately. Use the project's hot-reload workflow rather than routine
reloads or cache clearing. Discard evidence interrupted by remounts/transitions.
Measure the changed relation, inspect its actual crop, then inspect the full screen.
Check affected variants: short/long labels, multiline input, smallest supported
available height, dark/light themes, locale/RTL, focus/hover/touch as applicable.
Do not shrink accepted hit targets or spacing merely to make one viewport fit;
check the specified wrapping, flexible area and scrolling behaviour first.
After moving layout/scroll ownership, verify focus, draft and reading position
where the contract preserves them. Styling alone does not justify unrelated suites.
Compare before/reference/actual-after; accept the original discrepancy only when
both the measured relation and the rendered result support it, without a new defect.
Account for browser font rasterization and subpixel rounding; generated pixels
are not an exact rendering oracle. Report verified fidelity and remaining gaps,
especially when emulation or visual fixtures cannot prove native interaction.
