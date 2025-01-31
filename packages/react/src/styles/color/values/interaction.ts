import { colorVars } from '@/lib/style/contract/color.css';

export const interaction = {
  hovered:  colorVars.grayscale.translucent._5,
  pressed:  colorVars.grayscale.translucent._10,
  focused:  colorVars.grayscale.translucent._5,
  disabled: 'transparent',
};

export const lightInteractionInverted = {
  hovered:  colorVars.solid.translucent.white._10,
  pressed:  colorVars.solid.translucent.white._15,
  focused:  colorVars.solid.translucent.white._5,
  disabled: colorVars.solid.translucent.white._50,
};

export const darkInteractionInverted = {
  hovered:  colorVars.solid.translucent.black._10,
  pressed:  colorVars.solid.translucent.black._15,
  focused:  colorVars.solid.translucent.black._5,
  disabled: colorVars.solid.translucent.black._50,
};
