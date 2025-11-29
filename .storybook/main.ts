import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    './docs/Introduction.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  }
};

export default config;
