# ImageGen UI Design and Correction Workflow

- Node type: leaf; Status: Active; Revision: 2026-10-30.2.
- Authority: user's 2026-10-29 approval in the UI-instructions audit chat to
  require the visual correction loop, inline delivery and SwiftUI coverage,
  exclude backend work and minor edits, and remove contradictions without scripts.
- Annotation authority: on 2026-10-30 the user requested that prompts require
  lower preserve/change blocks, then drafting-style dimensions and guide lines.

## Scope

Use for new Web/SwiftUI designs and substantial composition/hierarchy corrections.
Backend work, behavior-neutral refactoring and small prescribed UI edits without
new design choices retain focused checks; line count does not determine scope.
Detailed matching follows [Visual Fidelity Analysis](visual-fidelity.md).

## Design and correction loop

1. Establish product requirements and the smallest meaningful target component.
   Start with its real capture; for a new component use existing product references
   and design tokens, clearly stating that no current implementation exists.
2. Generate a mockup, inspect it and show it inline in the current chat. Obtain
   user acceptance before implementing a new visual choice; reuse an already
   accepted reference instead of requesting the same approval again.
3. Implement, then capture the real component/screen at matching state/theme/scale.
4. Send that real implementation capture and accepted reference to ImageGen for
   targeted visual correction. Show every returned design/correction image inline
   with a short explanation, including rejected outputs labelled as unsuitable.
   A path, saved-file notice, text-only critique or agent-only inspection is not delivery.
5. Check proposed corrections against the accepted target and real evidence.
   Apply fidelity fixes within existing authority; obtain acceptance for any new
   material visual choice. Reject invented behavior, content and incompatible styling.
6. Recapture after fixes; repeat for substantive mismatches, without a fixed pass count.
7. Show the actual final implementation inline. Complete only when scoped visual
   discrepancies and affected states have been verified; disclose any unmet checks.

## Invariants

- ImageGen proposes appearance; product contracts govern behavior and measurements
  establish geometry. Generated images cannot grant acceptance or prove runtime behavior.
- Preserve labels, data, states, actions, permissions and backend contracts unless
  separately authorized. Do not promote raw technical identifiers to primary meaning.
- Use component crops; a whole-screen redesign input is appropriate only when the
  requested component is the screen shell. Verify the containing screen afterward.
- Unless the user requests another format, show matched current/target views
  above and two readable preserve/change text panels below, inside the image.
  Use the user's language; for Russian use «Сохраняем» / «Меняем» and concrete
  verbs such as «Убираем», «Заменяем», «Переносим». Arrow callouts and chat prose
  do not substitute for these lower panels. Prepare their exact copy in the prompt.
- Use «По принятому макету» only for an accepted target; otherwise label it a
  proposal. For a new component, label the left side as product references, not
  a fabricated current implementation; retain the lower inherited/new-choice notes.
- Annotations describe the visible component, preserved behavior and authorized
  differences, not generic praise or invented requirements. Dimensions must carry
  supplied units and known status (measured, accepted, or proposed); never turn
  generated numbers or one example's constants into binding product constraints.
- Both upper views must also have drafting-style overlays: dimension arrows with
  extension lines, labelled region brackets and relevant alignment guides.
  Prepare an explicit callout list (panel, endpoints, label, units/status).
  Unknown sizes use relational labels, not guessed numbers. Lower prose cannot
  replace these marks; keep lines legible and clear of product text/actions.
- Missing, illegible or contradictory lower panels or drafting marks fail the sheet.
  Show it as rejected and request a bounded layout/text correction with the same
  design and copy; never silently accept it or replace the missing panel in chat.
  If generation remains unavailable/unsuccessful, retain the explicit gap.
- ImageGen can redraw either side: label the sheet as a mockup, never its redraw
  as a real screenshot. Preserve original captures as actual evidence.
- Preserve the design system and platform controls. SwiftUI proof comes from the
  app/Simulator; browser recreation, CSS and console checks cannot replace it.
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
- If UI cannot run, report the missing runtime proof; references cannot replace it.
- Clipping, overlap, misleading actions or hidden required state prevent acceptance.
- Report actual processed scope, images, changed files, verification and remaining
  gaps. A turn boundary or blocker never turns partial work into a completed redesign.

## Verification mapping

Check the skill, fidelity method, metadata and copied prompts for consistent scope,
inline delivery and four-region instructions. Validate links/YAML; inspect returned
images for lower panels, drafting marks and honest capture/measurement labels.
Review existing/new components and accepted/proposed targets without widening scope.
Instruction validation alone is not independent end-to-end UI acceptance.

2026-10-30: two live probes of the [copyable prompt](../../../prompts/annotated-comparison.md)
rendered drafting marks and lower panels. Both were shown and rejected for gap-arrow
endpoint errors; the retry improved placement but did not establish geometry fidelity.
Images remain in temp `imagegen-drafting-skill-fgrjqvuo` and tool-managed storage.
