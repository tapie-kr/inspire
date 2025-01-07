export const ComponentVariable = {
  Radius: {
    None: 'var(--component-radius-none)',
    Sharp: 'var(--component-radius-sharp)',
    Subtle: 'var(--component-radius-subtle)',
    Default: 'var(--component-radius-default)',
    Smooth: 'var(--component-radius-smooth)',
    Rounded: 'var(--component-radius-rounded)',
    Pill: 'var(--component-radius-pill)',
    Full: 'var(--component-radius-full)'
  },
  Spacing: {
    None: 'var(--component-spacing-none)',
    Optical: 'var(--component-spacing-optical)',
    Mini: 'var(--component-spacing-mini)',
    Tiny: 'var(--component-spacing-tiny)',
    Micro: 'var(--component-spacing-micro)',
    Petite: 'var(--component-spacing-petite)',
    Base: 'var(--component-spacing-base)',
    Moderate: 'var(--component-spacing-moderate)',
    Medium: 'var(--component-spacing-medium)',
    Large: 'var(--component-spacing-large)',
    Jumbo: 'var(--component-spacing-jumbo)',
    Giant: 'var(--component-spacing-giant)'
  }
} as const

const Radius = ComponentVariable.Radius
const Spacing = ComponentVariable.Spacing

export { Radius, Spacing }
