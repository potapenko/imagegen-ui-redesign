# ImageGen UI Design and Correction Workflow

- Node type: leaf; Status: Active; Revision: 2026-11-03.2.
- User approval, 2026-10-29: Web/SwiftUI correction loop and inline delivery,
  excluding backend work and minor standalone edits, without scripts.
- User approval, 2026-10-30: preserve/change panels, drafting marks and numeric recipes.
- On 2026-11-03 the user required acceptance of composite UI by part, then as a whole,
  including a fresh whole-component ImageGen comparison after each implementation correction.

## Scope

Use for new Web/SwiftUI designs, substantial visual corrections and explicit
acceptance against a mockup, including one-property repairs in that loop.
Backend work, behavior-neutral refactoring and small standalone prescribed edits
use focused checks. For detailed matching, follow [Visual Fidelity Analysis](visual-fidelity.md).

## Design and correction loop

1. Pin the scoped component, its parts, relationships, states and sizes. Capture existing UI
   or use product references/tokens for a new component and identify it as new.
2. Show the mockup inline and obtain acceptance for new choices. Reuse an accepted target.
3. Capture the real component and containing screen at matching state, theme and scale.
4. For composite UI, compare matched crops of each scoped part through ImageGen first.
   Keep both edges of each tested relationship visible and record the metric and outcome.
   Then compare both whole views for all material discrepancies, including unlisted ones. Show every result inline,
   including rejected outputs. A link or text-only critique does not deliver an image.
5. Check proposed corrections against the accepted target and real evidence.
   Compare regions and adjacent gaps on the original inputs at a common scale.
   If ImageGen misses a visible difference, reject its conclusion and return
   the complete inputs with the measured relation for a bounded correction.
   In review-only tasks report findings. Fix within scope and obtain acceptance for new choices.
6. After every fix, repeat step 3 for affected parts and neighbors, then compare the fresh whole component.
7. Show the actual final UI inline. Each required state/size needs valid part, relationship and whole-view results.
   Any missing result or unresolved material discrepancy keeps acceptance open.

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
- Use «По принятому макету» only for an accepted target. Label new components'
  references, inherited constraints and proposed choices without fabricating a before.
- Lower notes follow the [numeric correction contract](visual-fidelity.md): property,
  current → target, delta/direction or responsive rule, units and known authority.
  Preserve relevant unchanged values too. Do not invent precision or replace an
  actionable recipe with generic intent; arrows and lower notes must agree.
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

- Follow the image-storage policy in `SKILL.md`: system-temp images, retained originals,
  no agent cleanup or repo artifact directories. Transient non-image evidence has its own policy.
- Missing ImageGen or runtime proof leaves the affected acceptance pending. Report the limitation.
- Clipping, overlap, misleading actions or hidden required state prevent acceptance.
- Report actual processed scope, images, changed files, verification and remaining
  gaps. A turn boundary or blocker never turns partial work into a completed redesign.

## Verification mapping

Validate links, YAML and agreement across the skill, method, prompts and metadata.
Check actual sheets for four regions, drafting marks and honest labels. Instruction
validation alone cannot establish downstream UI acceptance.

Regression example: review title, meter and meter-to-close gap separately on the header pair.
Then review the whole card. A matching video aspect or meter count cannot clear a bad gap.
The original images take precedence over a generated claim of a match.

2026-10-30: two live probes of the [copyable prompt](../../../prompts/annotated-comparison.md)
rendered drafting marks and lower panels. Both were shown and rejected for gap-arrow
endpoint errors; the retry improved placement but did not establish geometry fidelity.
Images remain in temp `imagegen-drafting-skill-fgrjqvuo` and tool-managed storage.
