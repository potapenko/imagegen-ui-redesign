# Visual Fidelity Analysis

- Node type: leaf; Status: Active; Revision: 2; Date: 2026-10-29.
- Authority: user requested capturing the successful image-analysis and
  implementation methods from the current component-polish task in this skill.
  The 2026-10-29 approval extends the visual workflow to SwiftUI and inline corrections.
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
