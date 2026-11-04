# 09 · Mobile layouts

**Historical outcome · Partial.** The generated header fit one line, but the real localized title wrapped at 390 CSS px. The text track needed more room.

![English documentation illustration of mobile layouts](../09-mobile-layouts.png)

[See the English ImageGen redraw and review note](../imagegen/README.md#case-09)

## Attach these inputs in order

1. `inputs/review-mobile-states.png`
2. `inputs/review-long-light-states.png`
3. `inputs/reference-07-transcript.png`
4. `inputs/reference-06-volume-meter.png`
5. `inputs/accepted-cycle-result-video.png`

The [input inventory](../INPUTS.md) identifies the original files. The figure above is a documentation diagram based on the historical review. Measurements belong to the original locale and viewport.

## English test prompt

```text
English edition. Render every user-interface label, caption, callout, diagnostic note and footer in English. Translate any localized interface copy in the reference images. Preserve actual spoken words, recognition errors, attempt values, units and measurement provenance. Treat source-locale geometry as historical evidence.

Whole-component visual fidelity audit of the ENTIRE real pronunciation widget vs the same accepted reference. Across the WHOLE component, which material differences do you see, including any I have not named? Inspect actual source pixels, never diagnose from your redrawing. Check every state (ready, listening, recording, checking, result) in BOTH actual HTML contact sheets, in order left to right. Gray below a shorter card is contact-sheet canvas, not UI. Compare order, placement, spacing, type, framing, visible controls, state indicators, long lines and responsiveness against reference 07 (main recording/result), 06 (seven meter capsules), and grouped 01+02+04 (historical states, blue Start and Repeat still apply). The new mandatory film size is 4:3 across all states, no bars and no overlay video controls, despite the old reference details. Only supplied real words and current attempt data, do not restore illustration numbers/colors from mockups. Do not normalize away real platform or locale adaptations. Report concrete residuals independently, including any outside known leads; distinguish verified or intentional differences. For the annotation drawing reproduce recording state from the first film, in two FULL upper cards at equal size, not just header cutouts. Exactly seven separate rounded meter capsules, separate dot and close circle. Preserve every zone: heading, video and mic, original, hearing line, bottom action. Lower text panels below and a short English audit key for BOTH layouts/sizes and all stages if there are any additional issues. Captions upper left “Current implementation”, upper right “Accepted reference”, lower left “Keep”, lower right “Change”. Annotate outside UI using magenta double-ended arrows with perpendicular extensions between TOP and BOTTOM edges of VIDEO only “4:3 · frame”, on BOTH views. Blue brackets “Header / Video / Original and transcript / Action”; dashed bottom alignment guide below meter capsules, separate left-edge guide between movie and button, leader points to any backed residual. Use only supplied CSS values, no invented requirements. Footer “ImageGen mockup. Both cards are redrawn.”
Context Small dark mobile CSS viewport 354 × 767, film 288.8 × 216.6. Light responsive 390 × 843, film 324.2 × 243.2. Actual HTML data in second complete contact sheet is the 18-word Shawshank attempt, real 89%, red good and sisters, real recognized substitution bad and brothers. Dark sheet Rio Lobo. Mobile light/dark visual comparison uses the same dark accepted reference for proportions, preserving native light palette; do NOT judge a difference because of language, film or correct localization. All five real states are supplied for each size and scene.
Exact lower Preserve block: “Two phone sizes. Video measures 289 × 217 and 324 × 243 CSS px. Keep it at 4:3 in all states and wrap the entire long line.”
Exact lower Change block: “At both widths check the heading, seven capsules, film edges, transcript, score and bottom action. Confirm each match or name the remaining difference.”
```

[All examples](../README.md#prompt-index)
