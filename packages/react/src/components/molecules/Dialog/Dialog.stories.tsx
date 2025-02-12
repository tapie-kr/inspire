import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Button } from '@/components/atoms/Button';
import { Typo } from '@/components/foundations/Typography';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { Meta, StoryObj } from '@storybook/react';
import { ButtonVariant } from '@/components/atoms/Button/shared';
import { Weight } from '@/components/foundations/Typography/shared';
import { useToggle } from '@/hooks/use-toggle';
import { StackAlign } from '@/lib/layout/types';
import { Dialog } from '.';

const meta: Meta = {
  title:     'Molecules/Dialog',
  component: Dialog,
  argTypes:  { modal: { control: { type: 'boolean' } } },
  args:      { modal: false },
};

type DialogStory = StoryObj<typeof Dialog>;

export const Default: DialogStory = { render: props => {
  const toggler = useToggle();

  return (
    <>
      <Button.Default onClick={toggler[1]}>Open Dialog</Button.Default>
      <Dialog
        {...props}
        toggler={toggler}
      >
        <VStack
          fullWidth
          spacing={spacingVars.moderate}
        >
          <VStack align={StackAlign.START}>
            <Typo.Moderate weight={Weight.SEMIBOLD}>Dialog Example Content</Typo.Moderate>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >Replace it to your dialog content component
            </Typo.Base>
          </VStack>
          <HStack
            fullWidth
            spacing={spacingVars.micro}
          >
            <Button.Default fullWidth>Submit</Button.Default>
            <Button.Default
              fullWidth
              variant={ButtonVariant.SECONDARY}
              onClick={toggler[1]}
            >Close
            </Button.Default>
          </HStack>
        </VStack>
      </Dialog>
    </>
  );
} };

export default meta;
