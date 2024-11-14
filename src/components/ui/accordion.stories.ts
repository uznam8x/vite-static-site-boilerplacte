import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import accordionMacro from './accordion.njk?raw';

interface AccordionProps {
  defaultValue?: string;
}

const meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  render: (args: AccordionProps) => {
    const template = `
      ${accordionMacro}
      
      {% call accordion(props) %}
        {% call accordionItem({ value: 'item-1' }) %}
          <div class="flex items-center gap-2" slot="trigger">
            <span class="font-medium">첫 번째 아이템</span>
          </div>

          <p>첫 번째 아이템의 내용입니다.</p>
        {% endcall %}

        {% call accordionItem({ value: 'item-2' }) %}
          <div class="flex items-center gap-2" slot="trigger">
            <span class="font-medium">두 번째 아이템</span>
          </div>

          <p>두 번째 아이템의 내용입니다.</p>
        {% endcall %}
      {% endcall %}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '기본적으로 열려있을 아이템의 value',
    },
  },
} as Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {};

export const WithDefaultOpen: Story = {
  args: {
    defaultValue: 'item-1',
  },
};

export const WithIcon: Story = {
  render: () => {
    const template = `
      ${accordionMacro}
      
      {% call accordion() %}
        {% call accordionItem({ value: 'item-1' }) %}
          <div class="flex items-center gap-2" slot="trigger">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="h-4 w-4"
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <path d="M12 17h.01"/>
            </svg>
            <span class="font-medium">아이콘이 있는 아이템</span>
          </div>

          <p>아이콘이 포함된 아코디언 아이템입니다.</p>
        {% endcall %}
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
};
