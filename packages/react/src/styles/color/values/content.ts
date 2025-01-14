import { colorVars } from '@/lib/style/contract/color.css';

export const content = {
  emphasized: colorVars.grayscale.translucent._90,
  default: colorVars.grayscale.solid._50,
  muted: colorVars.grayscale.solid._40,
  disabled: colorVars.grayscale.solid._20,
};

export const lightContentInverted = {
  emphasized: colorVars.solid.translucent.white._90,
  default: colorVars.solid.translucent.white._60,
  muted: colorVars.solid.translucent.white._40,
  disabled: colorVars.solid.translucent.white._20,
};

export const darkContentInverted = {
  emphasized: colorVars.solid.translucent.black._90,
  default: colorVars.solid.translucent.black._60,
  muted: colorVars.solid.translucent.black._40,
  disabled: colorVars.solid.translucent.black._20,
};
