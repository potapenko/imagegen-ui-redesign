# ImageGen UI Redesign

A Codex skill for matching a running interface to an approved mockup. Codex captures the UI, compares its parts with ImageGen, checks the findings in the app, and brings back a fresh view of the whole component after each fix. [Install the skill](#try-it-in-codex).

## How a gap survived two visual reviews

We built this while working on the PlayPhrase.me pronunciation player. A learner watches a clip and repeats the line. During recording, seven bars beside the title show the input level. In the approved design, the bars and the round Close button form a compact group. In our browser, Close looked stranded at the far end of the header.

We gave ImageGen the recording card and the approved mockup and asked it to find any material difference. Its review said the spacing and grouping matched. Look at the empty space just before the ×.

*The eight figures below are English editions of the review sheets. The text describes what happened in the original tests, including drawing errors corrected in the English illustrations.*

![First blind review of the player, showing the spacing finding that was rejected](docs/examples/01-blind-before.webp)

We ran the same prompt on a revised capture, again without mentioning Close. This time the review picked up the quieter meter and shorter transcript. Both change naturally during recording. It still missed the gap.

![The same blind prompt on the revised capture focuses on sound level and transcript length](docs/examples/02-blind-after.webp)

## Give the comparison two edges

We put the original images at the same video width and measured from **the right edge of the last bar to the left edge of the painted circle**. On the first capture, that space occupied **90 pixels**. On the approved mockup, it occupied **about 18**. With those endpoints named, ImageGen could draw a useful comparison.

![Measured comparison of the original card: 90 capture pixels between the meter and Close, against roughly 18 in the reference](docs/examples/03-measured-before.webp)

The revised capture measured **26 pixels** across the same interval. The fix had removed most of the empty space. The historical redrawing put one arrow inside the meter, though, so we checked the remaining difference against the originals. That is why the skill keeps the source capture alongside every generated sheet.

![Measured comparison of the revision: 26 capture pixels against the same roughly 18-pixel reference](docs/examples/04-measured-after.webp)

## Review the header on its own

For the next check, we captured a later desktop build and cropped the complete header from both views. Keeping it intact let us ask three separate questions. How wide was the visible title? Did all seven bars fit in the expected span? How much space was left before Close?

At a video width of 289.2 CSS px, the browser measured **61.6 CSS px** for the meter and **16.5 CSS px** for the gap. The corresponding estimates from the reference were about 62 and 16 at that scale. Both relationships held. The original Russian title lettering was still about five pixels narrower.

![The title, meter and gap each have their own measurement on the paired header crops](docs/examples/05-header-first.webp)

In the original run, the first drawing counted the status dot as part of the title and lost a meter bar. We asked for another drawing with guides on the first and last letters. It restored the seven bars, but its gap arrow still missed the edge of the circle. We kept the browser measurement in the review.

![Header retry showing the title span, seven individual bars and the two edges used to check the gap](docs/examples/06-header-retry.webp)

## Put the header back in the card

The detail crop settled the question about Close. It could tell us nothing about where the movie started below it. We sent the **whole card** and the same approved design back to ImageGen. The video had the agreed 4:3 shape, and the phrase, transcript and Done button were visible. But the top of the video sat **73 CSS px** below the top of the card. The design suggested about **63** at the same video width.

![Whole-card comparison showing the vertical distance from the top of the card to the video](docs/examples/07-whole-first.webp)

We asked for a final sheet with both guides anchored to those top edges. The guides improved, but the redrawn reference lost a bar again. We closed the meter and Close checks using the running UI. The title width and video position remained open in this desktop comparison.

![Whole-card retry distinguishing the corrected guides from the title and video-position findings that remained open](docs/examples/08-whole-retry.webp)

## What the team got back

In the final docked run, all seven bars were visible, the video filled its 4:3 frame, and Close sat beside the meter. The browser measured the gap at **18.3 CSS px**, against about **18** in the reference scaled for the docked column. The two findings in the desktop comparison above are recorded separately.

![English illustration of the final PlayPhrase.me recording card with Now repeat, I hear and Done](illustrations/docked-recording-english.webp)

*English illustration based on the [original localhost capture](illustrations/runtime-docked-recording-final.png). The measurements come from the running card.* [Docked header measurements](illustrations/prompts/10-header-relationships.md) · [Final check across five player states](illustrations/prompts/18-final-whole-card.md).

This is the handoff we ask for on our team: the running component, its approved reference, and a short account of what matched and what still needs work. After a repair, Codex checks the affected part and its neighbors, then compares the whole component again. The last step matters whenever a change inside one part can move another.

## Try it in Codex

Paste this prompt into Codex with the GitHub URL of your copy of this repository.

```text
$skill-installer Install imagegen-ui-redesign from <paste this repository's GitHub URL here>.
SKILL.md is at the repository root. Use --path . and --name imagegen-ui-redesign.
Resolve the repository's default branch and pass it as --ref.
```

The workflow is tested in Codex with ImageGen and access to a running UI. For web work, use a browser that can open your development site. For SwiftUI, use the app or a simulator that can capture the native screen. This case was recorded on the web. [About agent skills](https://learn.chatgpt.com/docs/build-skills).

Attach your approved mockup and adapt this prompt to your component:

```text
Use $imagegen-ui-redesign to match the recording card at <local URL> to the
attached mockup. Check the listening and recording states on desktop and mobile.
Review the header, video, transcript and action button. Fix confirmed layout
differences. After each fix, recheck the affected parts and the whole card.
Show the final running UI and tell me which differences are still open.
```

For a review without edits, ask Codex to report the differences. For a new design, give it the current screen and describe the change. It shows you a mockup for approval before implementing new visual choices.

To reproduce this story, download the [original inputs](docs/examples/source-inputs.zip) and run the [eight English test prompts](docs/examples/prompts.md). The [full player casebook](illustrations/README.md) also covers video framing, the Repeat button and scrolling in the short floating window.
