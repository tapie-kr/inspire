import { StoryObj } from '@storybook/react'
import { Typo } from '.'

const meta = {
  title: 'Foundations/Typography',
  component: Typo.Hero,
  subcomponents: {
    Display: Typo.Display,
    Title: Typo.Title,
    Headline: Typo.Headline,
    Body: Typo.Body,
    Callout: Typo.Callout,
    Footnote: Typo.Footnote,
    Caption: Typo.Caption,
    Tiny: Typo.Tiny,
  },
}

type HeroStory = StoryObj<typeof Typo.Hero>
type DisplayStory = StoryObj<typeof Typo.Display>
type TitleStory = StoryObj<typeof Typo.Title>
type HeadlineStory = StoryObj<typeof Typo.Headline>
type BodyStory = StoryObj<typeof Typo.Body>
type CalloutStory = StoryObj<typeof Typo.Callout>
type FootnoteStory = StoryObj<typeof Typo.Footnote>
type CaptionStory = StoryObj<typeof Typo.Caption>
type TinyStory = StoryObj<typeof Typo.Tiny>

export const Hero: HeroStory = {
  render: () => <Typo.Hero>Hero</Typo.Hero>,
}

export const Display: DisplayStory = {
  render: () => <Typo.Display>Display</Typo.Display>,
}

export const Title: TitleStory = {
  render: () => <Typo.Title>Title</Typo.Title>,
}

export const Headline: HeadlineStory = {
  render: () => <Typo.Headline>Headline</Typo.Headline>,
}

export const Body: BodyStory = {
  render: () => <Typo.Body>Body</Typo.Body>,
}

export const Callout: CalloutStory = {
  render: () => <Typo.Callout>Callout</Typo.Callout>,
}

export const Footnote: FootnoteStory = {
  render: () => <Typo.Footnote>Footnote</Typo.Footnote>,
}

export const Caption: CaptionStory = {
  render: () => <Typo.Caption>Caption</Typo.Caption>,
}

export const Tiny: TinyStory = {
  render: () => <Typo.Tiny>Tiny</Typo.Tiny>,
}

export default meta
