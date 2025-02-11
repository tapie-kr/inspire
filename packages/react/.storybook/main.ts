import { type StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

const currentPath = new URL('.', import.meta.url).pathname;

const config: StorybookConfig = {
  stories:   ['../src/**/*.stories.tsx'],
  addons:    ['@storybook/addon-toolbars', '@storybook/addon-essentials'],
  framework: {
    name:    '@storybook/react-vite',
    options: {},
  },
  viteFinal: config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(currentPath, '../src'),
      };
    }

    config.plugins?.push(svgr({
      svgrOptions: { exportType: 'default' },
      include:     /\.svg$/,
    }),
    vanillaExtractPlugin());

    return config;
  },
};

export default config;
