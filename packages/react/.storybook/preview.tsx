import '../dist/styles.min.css'

import { Decorator } from '@storybook/react'

export const parameters = {
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: '', color: '#ffffff' },
      { name: 'dark', class: '', color: '#000000' },
    ],
  },
}

export const decorators: Array<Decorator> = [
  (Story, context) => {
    const theme = context.globals.theme || 'light'
    document.documentElement.setAttribute('data-theme', theme)
    return <Story />
  },
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
}
