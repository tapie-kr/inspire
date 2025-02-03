import { type Meta, type StoryObj } from '@storybook/react';
import { Typo } from '.';
import { Tag, Weight } from './shared';

const meta: Meta = {
  title:    'Foundations/Typography',
  argTypes: {
    tag: {
      options: Object.values(Tag),
      control: 'select',
    },
    weight: {
      options: Object.values(Weight),
      control: 'select',
    },
    children:   { control: 'text' },
    monospaced: { control: 'boolean' },
    nowrap:     { control: 'boolean' },
  },
  args: {
    children:   'Hello, world!',
    monospaced: false,
    weight:     Weight.REGULAR,
    nowrap:     false,
  },
};

type TypographyStory = StoryObj<typeof Typo.Giant>;

export const Giant: TypographyStory = { render: props => <Typo.Giant {...props} /> };

export const Jumbo: TypographyStory = { render: props => <Typo.Jumbo {...props} /> };

export const Large: TypographyStory = { render: props => <Typo.Large {...props} /> };

export const Medium: TypographyStory = { render: props => <Typo.Medium {...props} /> };

export const Moderate: TypographyStory = { render: props => <Typo.Moderate {...props} /> };

export const Base: TypographyStory = { render: props => <Typo.Base {...props} /> };

export const Petite: TypographyStory = { render: props => <Typo.Petite {...props} /> };

export const Micro: TypographyStory = { render: props => <Typo.Micro {...props} /> };

export const Tiny: TypographyStory = { render: props => <Typo.Tiny {...props} /> };

export const Mini: TypographyStory = { render: props => <Typo.Mini {...props} /> };

export default meta;
