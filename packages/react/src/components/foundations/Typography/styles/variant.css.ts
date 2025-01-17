import { typographyVars } from '@/lib/style/contract/typography.css';
import { componentStyle } from '@/styles/layer.css';

const size = typographyVars.size;
const lineHeight = typographyVars['line-height'];

export const giant = componentStyle({
  fontSize: size.giant,
  lineHeight: lineHeight.giant,
});

export const jumbo = componentStyle({
  fontSize: size.jumbo,
  lineHeight: lineHeight.jumbo,
});

export const large = componentStyle({
  fontSize: size.large,
  lineHeight: lineHeight.large,
});

export const medium = componentStyle({
  fontSize: size.medium,
  lineHeight: lineHeight.medium,
});

export const moderate = componentStyle({
  fontSize: size.moderate,
  lineHeight: lineHeight.moderate,
});

export const base = componentStyle({
  fontSize: size.base,
  lineHeight: lineHeight.base,
});

export const petite = componentStyle({
  fontSize: size.petite,
  lineHeight: lineHeight.petite,
});

export const micro = componentStyle({
  fontSize: size.micro,
  lineHeight: lineHeight.micro,
});

export const tiny = componentStyle({
  fontSize: size.tiny,
  lineHeight: lineHeight.tiny,
});

export const mini = componentStyle({
  fontSize: size.mini,
  lineHeight: lineHeight.mini,
});
