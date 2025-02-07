import { HTMLAttributes, ReactNode } from 'react';

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
                : HTMLAttributes<HTMLElement>;

export type BaseLayoutProps<T extends LayoutTag> = LayoutElementProps<T> & {
  tag?:        T | (string & {
  });
  fullWidth?:  boolean;
  fullHeight?: boolean;
  className?:  string;
  children?:   ReactNode;
};

export enum StackDirection {
  ROW = 'row',
  COLUMN = 'column',
}

export enum StackAlign {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch',
}

export enum StackJustify {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  BETWEEN = 'between',
  AROUND = 'around',
}

export enum StackWrap {
  NO_WRAP = 'nowrap',
  WRAP = 'wrap',
  REVERSE = 'reverse',
}

export type BaseStackProps<T extends LayoutTag> = BaseLayoutProps<T> & {
  direction?: StackDirection;
  align?:     StackAlign;
  justify?:   StackJustify;
  spacing?:   string | number;
  wrap?:      StackWrap;
};
