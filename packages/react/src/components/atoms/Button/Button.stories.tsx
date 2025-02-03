import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';
import { getEnumArgType } from '@/lib/storybook/enum';
import { getIconArgType } from '@/lib/storybook/icon';
import { Theme } from '@/lib/style/theme';
import { Button } from '.';
import { ButtonSize, ButtonVariant } from './shared';

const baseArgsType = {
  size: {
    options: Object.values(ButtonSize),
    control: { type: 'select' },
  },
  disabled: { control: { type: 'boolean' } },
  children: { control: { type: 'text' } },
} as const;

const meta: Meta = {
  title: 'Atoms/Button',
  args:  {
    size:     ButtonSize.LARGE,
    disabled: false,
    children: 'Button',
  },
};

type DefaultButtonStory = StoryObj<typeof Button.Default>;

type TextButtonStory = StoryObj<typeof Button.Text>;

type IconButtonStory = StoryObj<typeof Button.Icon>;

export const Default: DefaultButtonStory = {
  render:   props => <Button.Default {...props} />,
  argTypes: {
    ...baseArgsType,
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'select' },
    },
    theme:        getEnumArgType(Theme),
    leadingIcon:  getIconArgType(),
    trailingIcon: getIconArgType(),
    fullWidth:    { control: { type: 'boolean' } },
    fullHeight:   { control: { type: 'boolean' } },
  },
  args: {
    variant: ButtonVariant.PRIMARY,
    theme:   Theme.MONOCHROME,
  },
};

export const Text: TextButtonStory = {
  render:   props => <Button.Text {...props} />,
  argTypes: { ...baseArgsType },
};

export const Icon: IconButtonStory = {
  render:   props => <Button.Icon {...props} />,
  argTypes: {
    ...baseArgsType,
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'select' },
    },
    theme: getEnumArgType(Theme),
    icon:  getIconArgType(),
  },
  args: {
    variant: ButtonVariant.PRIMARY,
    theme:   Theme.MONOCHROME,
    icon:    GlyphIcon.FLAG,
  },
};

export default meta;
