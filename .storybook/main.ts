import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Alpine.js를 전역으로 사용할 수 있도록 설정
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [...(config.optimizeDeps?.include ?? []), 'alpinejs'],
    };

    // 환경변수 설정
    if (!config.define) {
      config.define = {};
    }
    config.define['process.env.STORYBOOK'] = JSON.stringify('true');

    return config;
  },
};

export default config;
