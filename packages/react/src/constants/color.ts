export const Color = {
  Solid: {
    White: '--color-solid-white',
    Black: '--color-solid-black',
    Red: '--color-solid-red',
    Green: '--color-solid-green',
    Blue: '--color-solid-blue',
    Yellow: '--color-solid-yellow',
    Translucent: {
      White: {
        _1: '--color-solid-translucent-white-1',
        _2: '--color-solid-translucent-white-2',
        _3: '--color-solid-translucent-white-3',
        _4: '--color-solid-translucent-white-4',
        _5: '--color-solid-translucent-white-5',
        _6: '--color-solid-translucent-white-6',
        _7: '--color-solid-translucent-white-7',
        _8: '--color-solid-translucent-white-8'
      },
      Black: {
        _1: '--color-solid-translucent-black-1',
        _2: '--color-solid-translucent-black-2',
        _3: '--color-solid-translucent-black-3',
        _4: '--color-solid-translucent-black-4',
        _5: '--color-solid-translucent-black-5',
        _6: '--color-solid-translucent-black-6',
        _7: '--color-solid-translucent-black-7',
        _8: '--color-solid-translucent-black-8'
      },
      Red: {
        _1: '--color-solid-translucent-red-1',
        _2: '--color-solid-translucent-red-2',
        _3: '--color-solid-translucent-red-3',
        _4: '--color-solid-translucent-red-4',
        _5: '--color-solid-translucent-red-5',
        _6: '--color-solid-translucent-red-6'
      },
      Green: {
        _1: '--color-solid-translucent-green-1',
        _2: '--color-solid-translucent-green-2',
        _3: '--color-solid-translucent-green-3',
        _4: '--color-solid-translucent-green-4',
        _5: '--color-solid-translucent-green-5',
        _6: '--color-solid-translucent-green-6'
      },
      Blue: {
        _1: '--color-solid-translucent-blue-1',
        _2: '--color-solid-translucent-blue-2',
        _3: '--color-solid-translucent-blue-3',
        _4: '--color-solid-translucent-blue-4',
        _5: '--color-solid-translucent-blue-5',
        _6: '--color-solid-translucent-blue-6'
      },
      Yellow: {
        _1: '--color-solid-translucent-yellow-1',
        _2: '--color-solid-translucent-yellow-2',
        _3: '--color-solid-translucent-yellow-3',
        _4: '--color-solid-translucent-yellow-4',
        _5: '--color-solid-translucent-yellow-5',
        _6: '--color-solid-translucent-yellow-6'
      }
    }
  },
  Grayscale: {
    Solid: {
      _1: '--color-grayscale-solid-1',
      _2: '--color-grayscale-solid-2',
      _3: '--color-grayscale-solid-3',
      _4: '--color-grayscale-solid-4',
      _5: '--color-grayscale-solid-5',
      _6: '--color-grayscale-solid-6',
      _7: '--color-grayscale-solid-7',
      _8: '--color-grayscale-solid-8'
    },
    Translucent: {
      _1: '--color-grayscale-translucent-1',
      _2: '--color-grayscale-translucent-2',
      _3: '--color-grayscale-translucent-3',
      _4: '--color-grayscale-translucent-4',
      _5: '--color-grayscale-translucent-5',
      _6: '--color-grayscale-translucent-6',
      _7: '--color-grayscale-translucent-7',
      _8: '--color-grayscale-translucent-8'
    }
  },
  Brand: {
    Solid: {
      Everyday: '--color-brand-solid-everyday',
      Family: '--color-brand-solid-family',
      World: '--color-brand-solid-world'
    },
    Monochrome: {
      Everyday: '--color-brand-monochrome-everyday',
      Family: '--color-brand-monochrome-family',
      World: '--color-brand-monochrome-world'
    }
  },
  Background: {
    Primary: '--color-background-primary',
    Secondary: '--color-background-secondary',
    Tertiary: '--color-background-tertiary',
    Inverted: {
      Primary: '--color-background-inverted-primary',
      Secondary: '--color-background-inverted-secondary',
      Tertiary: '--color-background-inverted-tertiary'
    }
  },
  Content: {
    Primary: '--color-content-primary',
    Secondary: '--color-content-secondary',
    Tertiary: '--color-content-tertiary',
    Inverted: {
      Primary: '--color-content-inverted-primary',
      Secondary: '--color-content-inverted-secondary',
      Tertiary: '--color-content-inverted-tertiary'
    }
  },
  Line: {
    Border: '--color-line-border',
    Divider: {
      Light: '--color-line-divider-light',
      Dark: '--color-line-divider-dark'
    }
  }
} as const
