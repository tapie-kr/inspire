import { descriptionWrapper, largeLabelWrapper, smallLabelWrapper } from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Label } from '@/components/atoms/Label';
import { Typo } from '@/components/foundations/Typography';
import { Box } from '@/components/miscellaneous/layout/Box';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { type ReactNode } from 'react';
import { StackAlign } from '@/lib/layout/types';
import { FormFieldSize } from './shared';

type FormFieldProps = {
  label: string;
  isEssential?: boolean;
  description?: string;
  size?: FormFieldSize;
  children?: ReactNode;
};

export function FormField(props: FormFieldProps) {
  const { label, isEssential, description, size, children } = props;
  const spacing = size === FormFieldSize.LARGE ? spacingVars.micro : spacingVars.mini;
  const DescriptionText = size === FormFieldSize.LARGE ? Typo.Petite : Typo.Tiny;

  return (
    <VStack
      tag='label'
      fullWidth
      spacing={spacing}
      align={StackAlign.START}
    >
      <Box
        className={size === FormFieldSize.LARGE ? largeLabelWrapper : smallLabelWrapper}
        fullWidth
      >
        <Label isEssential={isEssential}>{label}</Label>
      </Box>
      {children}
      {description && (
        <Box
          className={descriptionWrapper}
          fullWidth
        >
          <DescriptionText color={colorVars.content.muted}>{description}</DescriptionText>
        </Box>
      )}
    </VStack>
  );
}
