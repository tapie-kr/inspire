import { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '.';

const meta: Meta = {
  title:     'Miscellaneous/Layout/AspectRatio',
  component: AspectRatio,
  argTypes:  {
    ratio:      { control: 'number' },
    width:      { control: 'number' },
    height:     { control: 'number' },
    fullWidth:  { control: 'boolean' },
    fullHeight: { control: 'boolean' },
  },
  args: {
    ratio:      16 / 9,
    width:      300,
    fullWidth:  false,
    fullHeight: false,
  },
};

type AspectRatioStory = StoryObj<typeof AspectRatio>;

export const Default: AspectRatioStory = { render: props => (
  <AspectRatio {...props}>
    <img
      src='https://camo.githubusercontent.com/2548545d6e0416740437c172c85bd038aab90cf5daf490bcf54c0c39c36388bf/68747470733a2f2f6d696e696f2d6d676f7763736f6377736f346730776f306f30776730736b2e61706e6532612e616c676f7269782e636c6f75642f696e73706972652d61737365742f696e73706972652d636f7665722e706e67'
      style={{
        width:     '100%',
        height:    '100%',
        objectFit: 'cover',
      }}
    />
  </AspectRatio>
) };

export default meta;
