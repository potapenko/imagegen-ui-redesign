# Visual Fidelity Analysis

- Node type: leaf; Status: Active; Revision: 3; Date: 2026-10-30.
- Authority: user requested capturing the successful image-analysis and
  implementation methods from the current component-polish task in this skill.
  The 2026-10-29 approval extends the visual workflow to SwiftUI and inline corrections.
  The 2026-10-30 refinement requires actionable numeric change notes, not only intent.
- Applies within the [design workflow's scope](imagegen-ui-redesign-workflow.md)
  when matching an accepted reference or correcting visible geometry.
- Does not prescribe a new design, target-specific dimensions or extra product states.

## Outcome

Turn visible discrepancies into bounded, measurable implementation corrections.
The accepted product/design contract defines the target; screenshots establish
appearance, runtime measurements establish actual geometry, and source explains it.

## Required behavior

- Confirm comparable viewport, content, state, theme, typography and scale before
  attributing a difference to code. Record unknowns instead of treating them as facts.
- Inspect hierarchy and preserved content first, layout and spacing second,
  typography and icon alignment third, then interaction states and whole-screen fit.
- For each material mismatch, connect the observed symptom, intended relation,
  measured discrepancy, owning layout/style and smallest supported correction.
  Distinguish verified cause from a hypothesis and from a new design proposal.
- Prefer constraints that express the intended relationship over independent
  offsets. Check intrinsic sizing, scroll ownership and platform layout rules
  (computed styles and cascade on Web) before adding overrides or wrappers.
- Separate Web CSS units, native points, screenshot pixels and scale. Separate
  glyph appearance, text line box, painted control and hit target. Check size arithmetic.
- Prepare each material correction as element/property, current value and basis,
  target value and authority, delta/direction or responsive rule, purpose and check.
  Render the applicable numeric recipe in the lower Change panel; preserve key
  unchanged dimensions in the Preserve panel. Geometry arrows and notes must agree.
- Calculate deltas only for the same quantity, unit and state. A source declaration
  is not a runtime measurement. Unknown current values prevent an exact delta;
  new elements have no before value, not a fabricated zero. Label proposed targets.
- Responsive sizing/centering uses its actual relationship or formula, not a fixed
  offset from one screenshot. Non-geometric edits keep their relevant values or
  behavior description; do not invent pixel changes for wording, colors or actions.
- Reject generated changes to required content, hierarchy or actions; ImageGen
  annotations do not override the accepted target or measured runtime geometry.
- Confirm the edited implementation reached the target UI and the relevant state
  settled before measuring. A transient frame is not acceptance evidence.
- Verify the corrected relation locally and in its containing screen. Select
  risky variants from the affected contract and actual changes, including long
  content, small available height, theme and input states where applicable.
- Preserve source captures and write crops/results to distinct paths. Follow the
  host/project capture and storage rules; no resampling may support a pixel claim.
- Report exactly what was verified. Font rasterization differences, fixtures,
  emulation and blocked native checks must not become claims of universal parity.

## Implementation and verification

Executable procedure: [visual fidelity method](../../visual-fidelity-method.md).
The main skill routes to it only for reference matching or detailed visual repair.
Its core loop owns image delivery and approvals; this method does not create a
second acceptance process or trigger a redesign for a small prescribed edit.

Review using the observed task examples: divider clearance, chevron alignment,
composer height, border-inclusive anchoring, cascade conflicts and small-height fit.
The method must explain how to diagnose each without prescribing the previous
project's CSS values, selectors, state model or workaround to other products.
Validate the skill and its links; reuse existing task evidence for this text update.
This retrospective is not an independent agent test or new downstream runtime QA.
2026-10-30: numeric recipes were checked across instructions, prompt and examples:
signed deltas, unchanged values, adaptive rules, and unknown/new baselines.
This text update does not claim a new live ImageGen or product-runtime validation.
