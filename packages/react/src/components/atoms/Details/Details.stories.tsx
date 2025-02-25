import { spacingVars } from '@/lib/style/contract/component.css';

import { Typo } from '@/components/foundations/Typography';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { type Meta, type StoryObj } from '@storybook/react';
import { StackAlign } from '@/lib/layout/types';
import { loremIpsum } from '@/lib/storybook/shared';
import { Details } from '.';

const meta: Meta = {
  title:     'Atoms/Details',
  component: Details,
  argTypes:  {
    title:           { control: 'text' },
    defaultOpen:     { control: 'boolean' },
    hideDefaultIcon: { control: 'boolean' },
    disabled:        { control: 'boolean' },
    children:        { control: 'text' },
  },
  args: {
    title:           'Details',
    defaultOpen:     false,
    hideDefaultIcon: false,
    disabled:        false,
    children:        loremIpsum,
  },
};

type DetailsStory = StoryObj<typeof Details>;

export const Default: DetailsStory = { render: props => (
  <VStack
    spacing={spacingVars.base}
    align={StackAlign.START}
  >
    <Details {...props} />
    <Typo.Base>This text will move down smoothly</Typo.Base>
  </VStack>
) };

export default meta;
