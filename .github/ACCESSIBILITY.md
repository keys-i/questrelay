# Accessibility

QuestRelay aims to make its browser room, operator tools and headset companion usable by as many people as possible, including people who use keyboard navigation, screen readers, zoom, high-contrast settings or alternative input

The project uses WCAG 2.2 Level AA as its design and review target for the web interface. This is a direction for ongoing work, not a claim of formal conformance

## Supported environments

The web interface is intended for current stable versions of Chrome, Edge, Firefox and Safari on supported desktop and mobile operating systems. It is designed to work with browser zoom, keyboard input and platform accessibility APIs

The companion app targets the Meta Quest devices and Android toolchain documented in the project. Accessibility support on a headset also depends on the operating system, device settings and input hardware

## Known limitations

- QuestRelay has not completed an independent WCAG conformance audit
- Live video and audio do not currently provide automatic captions, transcripts or audio descriptions
- Screen-reader, switch-control, voice-control, high-contrast and 400% zoom workflows have not been verified across every supported browser and device
- Headset accessibility has not been fully tested with every Meta Quest accessibility feature or alternative input device
- Third-party browser, WebRTC and headset behaviour can affect accessibility outside the project's direct control

These limitations are tracked honestly so reports can be prioritised by user impact. They do not reduce the project's commitment to fixing barriers in code it owns

## Report a barrier

Open an [accessibility barrier report](https://github.com/keys-i/questrelay/issues/new?template=accessibility.yml) and include:

- The page, screen, control or task involved
- What happened and what you expected
- Whether the barrier slowed you down or blocked the task
- Your browser, operating system, input method or assistive technology if you are comfortable sharing it
- A suggested workaround or alternative format if one would help

Do not include access keys, private room details or personal information you do not want public. Report security-sensitive accessibility problems through the [security policy](SECURITY.md)

Maintainers will acknowledge reports, ask only for details needed to reproduce the barrier and prioritise work by severity and user impact. Progress remains visible on the issue

Last reviewed 5 November 2026
