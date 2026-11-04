# PlayPhrase.me visual review prompts

These are English versions of the eight test calls. To replay a call, unpack
[the original inputs](source-inputs.zip), attach the files in the order given,
and send the shared instructions followed by the prompt for that call.
The two blind calls deliberately use identical wording. Give each a separate
conversation so the second call does not learn the first result.

The original UI is in Russian. Render its labels in English as “Now repeat”,
“I hear” and “Done”. The title measurements below belong to the visible ink of
the **original** label. The width of the English wording is a new measurement.
The [gallery illustrations](README.md) are English editorial editions of the
historical review sheets. A replay can produce different artwork and findings.

## Shared instructions

```text
Produce an annotated visual comparison in English. Put the complete scoped
current view and accepted reference above two readable panels headed “Keep”
and “Change”. Label the upper views “Current” and “Accepted reference”.
Use the same state and a comparable scale. Keep the supplied reference fixed.

Before redrawing anything, compare the original inputs. Draw dimension arrows
with extension lines attached to the named edges. Use brackets for the named
regions and dashed guides for alignments. Place labels outside the product UI.
Include the actual value, target, units and measurement basis when supplied.
For unknown dimensions use a descriptive relationship. Keep the given numbers
in the lower panels as well. Label the sheet “Comparison mockup”.

Keep the current English movie phrase. Differences in the movie frame, live
transcript and sound level are expected. Report layout findings separately.
Only call a difference a defect if it is visible in the inputs. Do not invent
CSS measurements, controls or design choices.
```

## 01. Blind review of the first capture

Attach `card-before.jpg`, `reference-06.png`, `reference-07.png`.

```text
Review the entire pronunciation widget. Input 1 is the running component.
Input 2 supplies the accepted recording interaction. The middle card in
input 3 supplies the composition with a partial transcript. Preserve the 4:3
video window and its accepted maximum height of 250 CSS px for this case.
Compare the cards at equal video width. Which material differences do you
see, including ones I have not named? Inspect order, relative sizes, grouping,
empty space, typography, media framing and controls. For each finding, name
the two elements and the direction of the difference. If they match, say so.

Mark video width on both views. Bracket the header and text regions and mark
the left content edge. Add an “Observations” area for independent findings.
Keep: “Video window: 4:3. Maximum height: 250 CSS px.”
Change: “Act only on differences confirmed against the original images.”
```

## 02. Blind review of the revised capture

Attach `card-revised.jpg`, `reference-06.png`, `reference-07.png`.
Use the **exact prompt in 01**, including the shared instructions. Change only
input 1. Withhold the known defect and all previous findings.

## 03. Measured review of the first capture

Attach `card-before.jpg`, `reference-recording.png`, `reference-meter.png`.

```text
Repeat the whole-card comparison. A prior review claimed that the spacing
matched. On the original inputs, measured at equal video width, the empty
interval between the right edge of the last bar and the left painted edge
of the close circle is 90 capture pixels in the implementation. Reference
06 gives about 18. Inspect the complete cards again for other discrepancies.

Bracket the header on both sides. Mark the two facing edges with extension
lines and draw the dimension above the header. Span only the empty interval.
Keep the cross glyph and its center out of the measurement.
Keep: “Seven meter bars. A 4:3 video frame. The close button stays available.”
Change: “Meter to close circle: 90 → ≈18 capture px. Reduce the gap by about
72 at equal video width. Verify the edges on the original images.”
```

## 04. Measured review of the revised capture

Attach `card-revised.jpg`, `reference-recording.png`, `reference-meter.png`.

```text
Compare the revised whole card to the same accepted references. Inspect the
header, body, media and footer. Check occupied spans and the empty intervals
between neighbors. Name the edges and direction of any additional material
difference. On each header, draw guides from the last bar's right edge and
the visible circle's left edge through their horizontal midline. Extend the
two guides upward to a dimension line outside the product UI.

Keep: “Seven meter bars. A 4:3 video frame. The close button stays available.”
Change: “Meter to close circle: 26 → ≈18 capture px. Reduce the gap by about
8 at equal video width. Verify both endpoints on the original images.”
The visible circle and its clickable area can have different bounds.
```

## 05. Detail pass on the header

Attach `header-current.png`, `header-reference.png`.

```text
Compare the two complete header strips, from the leading dot to the card's
right edge. Input 1 is the localhost recording state with silent input.
Input 2 is the matching header from accepted sheet 06. Scale by video width,
using 289.2 CSS px in the current view. Give three separate findings for
the title, the meter and the empty gap before the close circle.

Mark the visible title ink, all seven graduated bars, and the gap from the
last bar's right edge to the circle's left edge. Put the three dimension
lines outside each header. The title ink was measured in the original
images. The current meter and gap were measured in the browser.
Keep: “Seven bars. Meter: 61.6 CSS px, reference ≈62. Gap: 16.5 CSS px,
reference ≈16.”
Change: “Original title ink: 138 → ≈143 capture px at the same video width.
Check the span (about +5). This measurement does not determine font size.”
```

## 06. Detail retry on the header

Attach the same two header strips as in 05.

```text
Correct the annotation errors in the prior sheet. The title dimension
started at the blue dot and the drawing showed six bars under a seven-bar
label. Preserve both original header strips. Put the left title guide at
the first visible letter and the right guide after the last visible letter.
Keep the blue dot outside that span. Run the meter dimension from the first
bar's left edge to the seventh bar's right edge. Measure the empty gap from
that last edge to the painted circle's left edge. Draw arrows above the UI.

Keep: “Seven bars. Meter: 61.6 CSS px (reference ≈62). Gap: 16.5 CSS px
(reference ≈16).”
Change: “Original title ink: 138 → ≈143 capture px at equal video width
(about +5). Check typography.”
```

## 07. Whole-card pass after the header review

Attach `card-current.png`, `reference-recording.png`, `reference-meter.png`.

```text
Compare the complete widget after its header review. Input 1 is the fresh
localhost card. Input 2, from accepted sheet 07, governs the composition
with “I hear”. Input 3, from sheet 06, governs the header. The later 4:3
video requirement takes precedence over the older reference illustration.
Compare at a common video width of 289.2 CSS px.

Inspect where the parts meet, video position and framing, the phrase,
transcript and bottom button. Look for discrepancies beyond the known
title difference. Bracket “Header”, “Video” and “Text and button”.
Extend horizontal guides from the top of each card and the top of its
video to a vertical dimension line outside the UI.

Keep: “289 × 217 CSS px video (4:3). Seven bars. The order is header,
video, phrase, transcript, button.”
Change: “Card top to video top: 73 → ≈63 at equal scale (about −10).
Original title ink: 138 → ≈143 capture px (about +5).”
Treat the reference values as estimates from the original artwork.
```

## 08. Whole-card retry

Attach `card-current.png`, `reference-recording.png`.

```text
Repair the whole-card sheet using both originals. The previous drawing lost
a meter bar and the 73/≈63 dimension missed the card and video boundaries.
Keep both complete cards and all seven distinct bars, including the small
first one. Match video width across the views. Keep the current video 4:3.

Extend the straight top edge of the card and the straight top edge of the
video leftward to the same vertical dimension line. Connect those guides
with a double-ended arrow. Rounded corners and the header center are poor
anchors for this measurement. Label the current arrow “73 CSS px” and the
reference arrow “≈63 at equal scale”. Bracket the header, video and text
regions and mark the left content guide.

Keep: “289 × 217 CSS px video. Seven bars. The phrase, transcript and
Done are visible.”
Change: “Card top to video top: 73 → ≈63 at equal scale (about −10).
Original title ink: 138 → ≈143 capture px (about +5).”
```
