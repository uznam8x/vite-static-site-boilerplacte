import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import scrollToTopMacro from './scroll-to-top.njk?raw';

interface ScrollToTopProps {
  class?: string;
}

const meta = {
  title: 'Components/ScrollToTop',
  tags: ['autodocs'],
  render: (args: ScrollToTopProps) => {
    const template = `
      ${scrollToTopMacro}
      
      <div class="h-[200vh] relative">
        <p class="fixed top-4 left-4 text-sm text-muted-foreground">
          Scroll down to see the button appear
        </p>
        {% call scrollToTop({}) %}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        {% endcall %}
      </div>
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    class: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ScrollToTopProps>;

export default meta;
type Story = StoryObj<ScrollToTopProps>;

export const Default: Story = {};

export const CustomStyle: Story = {
  args: {
    class: 'bg-blue-500 hover:bg-blue-600 bottom-8 right-8',
  },
};
