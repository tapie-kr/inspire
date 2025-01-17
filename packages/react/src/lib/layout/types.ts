import { type HTMLAttributes, type ReactNode } from 'react';

export enum LayoutTag {
  DIV = 'div',
  SECTION = 'section',
  ARTICLE = 'article',
  ASIDE = 'aside',
  NAV = 'nav',
  MAIN = 'main',
  HEADER = 'header',
  FOOTER = 'footer',
}

export type LayoutElementProps<T extends LayoutTag> = T extends LayoutTag.DIV
  ? HTMLAttributes<HTMLDivElement>
  : T extends LayoutTag.SECTION
    ? HTMLAttributes<HTMLElement>
    : T extends LayoutTag.ARTICLE
      ? HTMLAttributes<HTMLElement>
      : T extends LayoutTag.ASIDE
        ? HTMLAttributes<HTMLElement>
        : T extends LayoutTag.NAV
          ? HTMLAttributes<HTMLElement>
          : T extends LayoutTag.MAIN
            ? HTMLAttributes<HTMLElement>
            : T extends LayoutTag.HEADER
              ? HTMLAttributes<HTMLElement>
              : T extends LayoutTag.FOOTER
                ? HTMLAttributes<HTMLElement>
                : never;

export type BaseLayoutProps<T extends LayoutTag> = LayoutElementProps<T> & {
  tag?: T;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  children?: ReactNode;
};
