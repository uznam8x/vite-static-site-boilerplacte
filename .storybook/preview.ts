import type { Preview } from '@storybook/html';
import '../src/styles/tailwind.css';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';

import type { Alpine as AlpineType } from 'alpinejs';

declare global {
  interface Window {
    Alpine: AlpineType;
    alpineInitializedTimeout: ReturnType<typeof setTimeout> | null;
  }
}

// Alpine.js 초기화를 지연
window.Alpine = Alpine;
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(intersect);
window.alpineInitializedTimeout = null;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      const rendered = story();

      if (window.alpineInitializedTimeout) {
        clearTimeout(window.alpineInitializedTimeout);
      }

      window.alpineInitializedTimeout = setTimeout(() => {
        window.Alpine.start();
      }, 2000);
      // Alpine이 아직 초기화되지 않았을 때만 실행

      return rendered;
    },
  ],
};

export default preview;
