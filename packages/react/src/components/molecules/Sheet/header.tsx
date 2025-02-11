'use client';

import { bar, handleBar, title } from './styles/header.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Button } from '@/components/atoms/Button';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';
import { Box } from '@/components/miscellaneous/layout/Box';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { Stack } from '@/components/miscellaneous/layout/Stack';

import { useContext, useMemo } from 'react';
import { ButtonSize, ButtonVariant } from '@/components/atoms/Button/shared';
import { useMediaQuery } from '@/hooks/use-media-query';
import { SheetContext, SheetDirection, SheetHeaderType } from './shared';

type SheetHeaderProps = {
  title?: string;
};

export function SheetHeader(_props: SheetHeaderProps) {
  const isMobile = useMediaQuery();
  const { direction, close } = useContext(SheetContext);

  const type = useMemo(() => {
    if (isMobile && direction === SheetDirection.BOTTOM) {
      return SheetHeaderType.HANDLE_BAR;
    }

    return SheetHeaderType.TITLE;
  }, []);

  return type === SheetHeaderType.TITLE
    ? (
      <HStack
        fullWidth
        className={title}
        spacing={spacingVars.mini}
      >
        <Box fullWidth>
          <Typo.Base>Title</Typo.Base>
        </Box>
        <Button.Icon
          icon={GlyphIcon.CLOSE}
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
          onClick={close}
        />
      </HStack>
    )
    : (
      <Stack
        fullWidth
        className={handleBar}
      >
        <Box className={bar} />
      </Stack>
    );
}
