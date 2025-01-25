import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { VStack } from '@/components/miscellaneous/layout/VStack';

import { type Meta, type StoryObj } from '@storybook/react';
import { StackAlign } from '@/lib/layout/types';
import { Skeleton } from '.';

const meta: Meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
};

type SkeletonStory = StoryObj<typeof Skeleton>;

export const Default: SkeletonStory = {
  render: () => (
    <VStack
      spacing={spacingVars.jumbo}
      align={StackAlign.START}
    >
      <VStack
        fullWidth
        spacing={spacingVars.micro}
        align={StackAlign.START}
      >
        <Skeleton
          width={300}
          height={15}
        />
        <Skeleton
          width={300}
          height={15}
        />
        <Skeleton
          width={150}
          height={15}
        />
      </VStack>
      <Skeleton
        width={300}
        height={300}
        borderRadius={radiusVars.full}
      />
    </VStack>
  ),
};

export default meta;
