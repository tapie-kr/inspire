import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Button } from '@/components/atoms/Button';
import { Typo } from '@/components/foundations/Typography';
import { Box } from '@/components/miscellaneous/layout/Box';
import { Grid } from '@/components/miscellaneous/layout/Grid';

import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Weight } from '@/components/foundations/Typography/shared';
import { useToggle } from '@/hooks/use-toggle';
import { Sheet } from '.';
import { SheetDirection } from './shared';

const meta: Meta = {
  title:     'Molecules/Sheet',
  component: Sheet,
};

type SheetStory = StoryObj<typeof Sheet>;

export const Default: SheetStory = { render: () => <SheetWrapper /> };
export default meta;

function SheetWrapper() {
  const [direction, setDirection] = useState(SheetDirection.LEFT);
  const toggler = useToggle();

  const handleOpenSheet = (direction: SheetDirection) => {
    setDirection(direction);

    toggler[1]();
  };

  return (
    <>
      <Box style={{ width: 300 }}>
        <Grid
          columnCount={2}
          columnCountWhenMobile={2}
          gap={spacingVars.mini}
        >
          <Button.Default onClick={() => handleOpenSheet(SheetDirection.LEFT)}>Left</Button.Default>
          <Button.Default onClick={() => handleOpenSheet(SheetDirection.RIGHT)}>Right</Button.Default>
          <Button.Default onClick={() => handleOpenSheet(SheetDirection.TOP)}>Top</Button.Default>
          <Button.Default onClick={() => handleOpenSheet(SheetDirection.BOTTOM)}>Bottom</Button.Default>
        </Grid>
      </Box>
      <Sheet
        title='Sheet Example'
        direction={direction}
        toggler={toggler}
      >
        <Typo.Moderate weight={Weight.SEMIBOLD}>Sheet Example Content</Typo.Moderate>
        <Typo.Base color={colorVars.content.default}>Replace it to sheet content component</Typo.Base>
      </Sheet>
    </>
  );
}
