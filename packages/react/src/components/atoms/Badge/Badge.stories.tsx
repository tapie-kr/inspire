import { Meta, StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Badge } from '.';
import { TextIndicatorBadgeVariant } from './categories/text-indicator';
import { BadgeSize, BadgeTheme } from './shared';

const baseArgsType = {
  theme: {
    options: Object.values(BadgeTheme),
    control: { type: 'select' },
  },
  size: {
    options: Object.values(BadgeSize),
    control: { type: 'select' },
  },
} as const;

const meta: Meta = { title: 'Atoms/Badge' };

type DefaultBadgeStory = StoryObj<typeof Badge.Default>;

type IndicatorBadgeStory = StoryObj<typeof Badge.Indicator>;

type TextIndicatorBadgeStory = StoryObj<typeof Badge.TextIndicator>;

export const Default: DefaultBadgeStory = {
  render:   props => <Badge.Default {...props} />,
  argTypes: {
    ...baseArgsType,
    leadingIcon: getIconArgType(),
    label:       { control: { type: 'text' } },
  },
  args: {
    theme: BadgeTheme.MONOCHROME,
    size:  BadgeSize.LARGE,
    label: 'Badge',
  },
};

export const Indicator: IndicatorBadgeStory = {
  render:   props => <Badge.Indicator {...props} />,
  argTypes: baseArgsType,
  args:     {
    theme: BadgeTheme.MONOCHROME,
    size:  BadgeSize.LARGE,
  },
};

export const TextIndicator: TextIndicatorBadgeStory = {
  render:   props => <Badge.TextIndicator {...props} />,
  argTypes: {
    variant: {
      options: Object.values(TextIndicatorBadgeVariant),
      control: { type: 'select' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    variant:  TextIndicatorBadgeVariant.DEFAULT,
    children: 'Badge',
  },
};

export const TextIndicatorWithNumber: TextIndicatorBadgeStory = {
  render:   props => <Badge.TextIndicator {...props} />,
  argTypes: {
    variant: {
      options: Object.values(TextIndicatorBadgeVariant),
      control: { type: 'select' },
    },
    children: { control: { type: 'number' } },
  },
  args: {
    variant:  TextIndicatorBadgeVariant.DEFAULT,
    children: 100,
  },
};

export default meta;
