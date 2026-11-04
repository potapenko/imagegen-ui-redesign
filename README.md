# ImageGen UI Redesign

A Codex skill for getting a running interface to match an approved mockup. Give Codex the reference and a component it can open. It reviews the parts with ImageGen and checks their geometry in the app. After each fix, it compares a fresh capture of the whole component with the same mockup.

We built this while working on the PlayPhrase.me pronunciation player. The recording card had all seven volume bars and a working Close button. A visual review called the spacing a match. In the browser capture, the gap from the last bar to the left edge of the round Close button was **90 pixels**. At the same video width, the approved design left **about 18 pixels**. [Try it in Codex](#try-it-in-codex) · [Replay the comparison](docs/examples/prompts.md#03-measured-review-of-the-first-capture).

![English comparison showing the empty space between the last volume bar and the close circle in the implementation and the accepted design](docs/examples/03-measured-before.webp)

*English illustration of the measured review. The dimensions come from the original captures.*

## Try it in Codex

Copy this repository's GitHub URL into the prompt below and paste it into Codex.

```text
$skill-installer Install imagegen-ui-redesign from <paste this repository's GitHub URL here>.
SKILL.md is at the repository root. Use --path . and --name imagegen-ui-redesign.
Resolve the repository's default branch and pass it as --ref.
```

The workflow is tested in Codex with ImageGen and access to a running UI. For web work, use a browser that can open your development site. For SwiftUI, use the app or a simulator that can capture the native screen. The examples here were recorded on the web. [About agent skills](https://learn.chatgpt.com/docs/build-skills).

Attach an approved mockup, open your app project, and give Codex a task like this one. Replace the route and states with yours.

```text
Use $imagegen-ui-redesign to match the recording card at <local URL> to the
attached mockup. Check it while listening and while recording, on desktop
and mobile. Compare the header, video, transcript and action button. Fix
confirmed layout differences. Show the final running card and tell me
which differences, if any, are still open.
```

For a review without edits, ask Codex to report the differences. For a new design, give it a screenshot of the existing interface and describe the change. It shows you an annotated mockup for approval before implementing new visual choices.

## How we use it

1. **Keep the comparison fair.** Pin the approved reference and capture the same state, theme, content and available width in the app.
2. **Review the parts.** In a crowded header, crop the same region from both views. Keep both ends of a gap visible. ImageGen draws the comparison. Codex checks each finding against the original images and, where possible, measures the rendered elements.
3. **Review the whole component.** Send the full card and its reference to ImageGen, then inspect the screen around it. A header can match while the video below it starts too low or an action falls outside the visible window.
4. **Recheck after each fix.** Capture the changed part, check the neighbors it could have moved, then send the fresh whole component and the same reference to ImageGen. An unresolved difference or a missing state stays open in the report.

## Two more things the player taught us

**Video framing needed a design decision.** Fitting the entire movie into a short floating window produced the black bands in this browser capture. We rejected that version and chose a centered 4:3 frame that crops a wide scene equally on both sides. That gave the next review a clear target across playback, recording and results. [Framing case and prompt](illustrations/prompts/03-video-framing.md).

![Actual localhost capture of the rejected floating player, with black bands on either side of the movie](illustrations/runtime-rejected-framing.jpg)

**The Repeat button exposed a scrolling bug.** The button looked right in a crop. In the short chat window, bringing Repeat fully into view automatically scrolled the result title and Close out of sight. After the fix, the title stayed at the top of the conversation and the user could scroll down to Repeat. That check needed the surrounding window. [Scroll-boundary case](illustrations/prompts/17-scroll-boundary.md) · [Final whole-card check](illustrations/prompts/18-final-whole-card.md).

## Examples to use in your own review

- [Eight tests with English prompts and original inputs](docs/examples/README.md). Run the same blind review on two captures, then repeat it with the measured gap.
- [Eighteen illustrated reviews of the player](illustrations/README.md). Follow the recording meter, framing, result button and scroll position through desktop and mobile layouts. The case notes include rejected drawings and the measurements that settled each question.
- [Annotated comparison prompt](prompts/annotated-comparison.md). Reuse the drawing instructions with your own component, references and measurements.
