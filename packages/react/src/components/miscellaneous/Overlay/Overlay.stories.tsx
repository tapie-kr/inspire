import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { Typo } from '@/components/foundations/Typography';

import { Meta } from '@storybook/react';
import { Box } from '../layout/Box';
import { Overlay } from '.';

const meta: Meta = {
  title:     'Miscellaneous/Overlay',
  component: Overlay,
};

export const Default = { render: () => (
  <Box style={{
    width: 600, height: 600, background: colorVars.surface.elevated, borderRadius: radiusVars.smooth,
  }}
  >
    <Overlay>
      <Box style={{
        padding: 20, background: colorVars.surface.raised,
      }}
      >
        <Typo.Base>Overlay content 1</Typo.Base>
      </Box>
    </Overlay>
    <Overlay>
      <Box style={{
        padding: 20, background: colorVars.surface.raised,
      }}
      >
        <Typo.Base>Overlay content 2</Typo.Base>
      </Box>
    </Overlay>
  </Box>
) };

export default meta;
