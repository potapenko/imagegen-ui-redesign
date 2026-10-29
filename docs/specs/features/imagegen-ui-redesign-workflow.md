# ImageGen UI Design and Correction Workflow

- Node type: leaf; Status: Active; Revision: 2026-10-29.
- Authority: user's 2026-10-29 approval in the UI-instructions audit chat to
  require the visual correction loop, inline delivery and SwiftUI coverage,
  exclude backend work and minor edits, and remove contradictions without scripts.
- Change: Evolve the existing component workflow; preserve product behavior,
  design-system boundaries and proportional verification.

## Scope

Use for new visual designs and substantial visual corrections/redesigns that
require composition, hierarchy or other material design choices, on Web and
native SwiftUI surfaces. Complexity is the visual decision, not the line count.
Backend-only work, behavior-neutral refactoring and small prescribed UI edits
without a new design choice do not enter this loop. They retain focused checks.
Detailed matching follows [Visual Fidelity Analysis](visual-fidelity.md).

## Design and correction loop

1. Establish product requirements and the smallest meaningful target component.
   Start with its real capture; for a new component use existing product references
   and design tokens, clearly stating that no current implementation exists.
2. Generate a mockup, inspect it and show it inline in the current chat. Obtain
   user acceptance before implementing a new visual choice; reuse an already
   accepted reference instead of requesting the same approval again.
3. Implement the accepted design, then capture the real component and containing
   screen in the relevant runtime. Match state, content, theme and dimensions.
4. Send that real implementation capture and accepted reference to ImageGen for
   targeted visual correction. Show every returned design/correction image inline
   with a short explanation, including rejected outputs labelled as unsuitable.
   A path, saved-file notice, text-only critique or agent-only inspection is not delivery.
5. Check proposed corrections against the accepted target and real evidence.
   Apply fidelity fixes within existing authority; obtain acceptance for any new
   material visual choice. Reject invented behavior, content and incompatible styling.
6. Capture and compare again after fixes. Repeat the correction loop for remaining
   substantive mismatches; do not invent changes or impose an arbitrary pass count.
7. Show the actual final implementation inline. Complete only when scoped visual
   discrepancies and affected states have been verified; disclose any unmet checks.

## Invariants

- ImageGen proposes appearance; product contracts govern behavior and measurements
  establish geometry. Generated images cannot grant acceptance or prove runtime behavior.
- Preserve labels, data, states, actions, permissions and backend contracts unless
  separately authorized. Do not promote raw technical identifiers to primary meaning.
- Use component crops; a whole-screen redesign input is appropriate only when the
  requested component is the screen shell. Verify the containing screen afterward.
- Default correction format is current UI left / proposed correction right, in
  the user's language, with matched framing and callouts outside the product UI.
  ImageGen can redraw either side: preserve original captures as actual evidence.
- Preserve the target design system, tokens, icons and platform controls. Native
  SwiftUI proof comes from the app or appropriate Simulator, not a browser recreation.
  Browser-specific CSS or console checks do not become native requirements.
- Target instructions govern tools, approvals and verification. Use relevant
  build and visible-state checks; presentation changes alone do not require logic suites.
- For global work keep coverage by screen, viewport, processed/current/remaining
  components and constraints. Default large batches contain up to five components.
  Preserve before/reference/correction/after evidence and full-screen context per batch;
  a new component has no fabricated before capture. Partial coverage is not completion.

## Files, failure and delivery

- Follow the global image-storage and retention policy referenced by `SKILL.md`:
  system-temp images, retained originals and no agent image cleanup. Do not recommend
  repository artifact directories. Transient non-image evidence follows its own policy.
- If ImageGen is unavailable, report the limitation and keep dependent design work
  pending; do not silently substitute an agent-invented design or claim the loop passed.
- Bound external attempts; retry only the affected component and reuse valid outputs.
- If the UI cannot run, existing references can support design work, but they cannot
  establish implementation acceptance. Report the exact missing runtime evidence.
- Clipping, overlap, misleading actions or hidden required state prevent acceptance.
- Report actual processed scope, images, changed files, verification and remaining
  gaps. A turn boundary or blocker never turns partial work into a completed redesign.

## Verification mapping

Check `SKILL.md`, its visual-fidelity method and `agents/openai.yaml` against this
contract. Review routing with new Web/SwiftUI designs, substantial visual repair,
minor prescribed edits and backend-only tasks. Check draft → accepted reference →
real capture → displayed correction → verified actual result, including rejected
corrections and new design choices. Validate Markdown links and YAML; use a real
downstream task for behavioral validation when authorized. Instruction validation
alone is not an independent end-to-end UI acceptance test. No helper scripts are added.
