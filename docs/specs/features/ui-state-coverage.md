# UI State Coverage

- Node type: leaf; Status: Active; Revision: 1; Date: 2026-11-10.
- Authority: user requested that every scoped UI element be designed and reviewed
  in every expected state, explicitly including expanded and nested content.
- Basis: spec README → brownfield discovery → design workflow@2026-11-04.2
  and visual-fidelity@4; observed coverage ledger tracked components more clearly
  than states. This Evolve change makes state coverage an explicit closure gate.
- Protected: existing task scope, design approval, parts/whole loop, geometry,
  inline delivery, platform/tool choices and data safety. No product states added.

## Inventory before design or implementation

For each scoped component and meaningful subpart, enumerate all expected states
from product contracts and actual controls/workflows. Explore authorized openings,
menus, tabs and nested disclosures; an initial screenshot is not an inventory.
Record source disagreements instead of adopting accidental behavior as intent.

Use the existing task registry, or a small table for a single component. Each
acceptance item identifies `component/part × state × required size`, its trigger,
expected result and evidence. Do not silently omit unsupported or unreachable
cases. Mark genuinely inapplicable cases `N/A` with a contract-based reason;
missing tools/data/permission means pending or blocked, not `N/A` or passed.

Consider these state families where the component supports them:

- visibility: closed/open, collapsed/expanded, each tab, nested open content;
- interaction: default, hover, pressed, keyboard focus, selected, disabled;
- input: empty/filled, caret/selection, validation, readonly, long/multiline text;
- data/async: loading, populated, empty, no matches, partial/stale, error,
  retry/recovery, success, unavailable;
- composition: overflow/scroll, overlays at viewport edges, required size/theme
  variants, and combinations that affect layout or behavior.

These are discovery prompts, not permission to implement irrelevant states.
Cover all applicable distinct states, plus meaningful combinations such as an
expanded panel showing an error or a focused selected row. Do not generate a
blind Cartesian product of unrelated options or arbitrary data values.

## State-specific acceptance loop

Each item follows the main skill loop: current evidence when available →
ImageGen design/reference and valid acceptance → implementation → real state
capture → parts and relationships review → whole scoped component comparison
in that same state → containing-screen check. Newly discovered states enter
the registry and this loop before the component can close.

Collapsed evidence cannot cover expanded descendants. Split a large expanded
group into meaningful parts, review their states separately, then reunite them
in the whole expanded component. A player control bar needs its own applicable
play/pause, seek, focus and unavailable states, not only a player overview.

References must cover the visible state. A closed-only mockup does not define
an open body. Create the missing state design through ImageGen, or explicitly
map it to an accepted state reference/design system that specifies it. Honor
the user's standing acceptance within its stated scope; acceptance is not QA.

Verify transitions in the actual UI: trigger → visible result → dismissal or
recovery where applicable. Include keyboard activation, focus return, and
preserved selection/draft/scroll where required. A still image cannot prove
these interactions; a functional pass cannot prove visual fidelity either.
Use safe local fixtures for unsafe states when permitted, label fixture evidence,
and retain any real-integration gap. Coverage never authorizes destructive actions.

## Reuse and changes

Shared primitives may reuse valid state-specific design and review evidence when
implementation, tokens, state, data constraints and size behavior are equivalent.
Record the evidence and equivalence basis for each covered item; verify its actual
instance in composition and its own required transitions. An exemplar or one risky
variant cannot stand for a distinct unreviewed state. Keep inputs legible if batching
several state pairs in ImageGen; every pair still needs its own outcome.

After a correction, invalidate affected states, transitions, shared consumers and
neighbor relationships. Capture them afresh and repeat affected parts and whole
comparisons with their fixed accepted references. Reuse unaffected valid evidence;
do not restart the entire inventory. Unknown impact remains pending until checked.

## Completion and regression examples

Track reference/approval, implementation revision, actual capture, parts/whole
ImageGen results, transition result, findings and status per item. A single status
such as "implemented" or "mockup accepted" cannot stand for all those stages.
Close a component only when all applicable items and required transitions pass;
derive screen completion from component coverage. Report outstanding state IDs.

Review these scenarios when maintaining the instructions:

- Closed artifacts match; expanded list unobserved → expanded case stays pending.
- Open technical details match; nested JSON, overflow or copy feedback omitted
  → applicable child states and transitions stay pending.
- Approved loading/error designs but only populated runtime captured → not verified.
- Button focus evidence reused unchanged → permitted with cited equivalence and
  instance clipping/neighbor checks; a new disabled variant still needs coverage.
- Padding change affects open body and scroll → refresh those and their whole
  views; unrelated verified states remain valid.
- Standing design acceptance → no repeated approval question; all QA gates remain.

Maintenance validation checks contract/skill/prompt agreement and these scenarios.
It does not claim a live ImageGen run or downstream runtime acceptance.
