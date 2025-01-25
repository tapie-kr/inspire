import { type Meta, type StoryObj } from '@storybook/react';
import { Image } from '.';

const meta: Meta = {
  title: 'Molecules/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    fullWidth: { control: 'boolean' },
    fullHeight: { control: 'boolean' },
  },
  args: {
    src: 'https://minio-mgowcsocwso4g0wo0o0wg0sk.apne2a.algorix.cloud/inspire-asset/inspire-cover.png',
    alt: 'placeholder',
    width: 300,
    height: 300,
    fullWidth: false,
    fullHeight: false,
  },
};

type ImageStory = StoryObj<typeof Image>;

export const Default: ImageStory = {
  render: props => <Image {...props} />,
};

export default meta;
