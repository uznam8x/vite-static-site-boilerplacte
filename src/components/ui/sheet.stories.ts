import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import sheetMacro from './sheet.njk?raw';
import buttonMacro from './button.njk?raw';

interface SheetProps {
  title?: string;
}

const meta = {
  title: 'Components/Sheet',
  tags: ['autodocs'],
  render: () => {
    const template = `
      ${buttonMacro}
      ${sheetMacro}
      
      {% call sheet() %}
        {# Trigger #}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open' slot='trigger'"
        }) %}
          Open Sheet
        {% endcall %}

        {# Content #}
        <div class="h-full rounded-md border border-dashed border-neutral-300 p-4">
          <p>Sheet content goes here</p>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<SheetProps>;

export default meta;
type Story = StoryObj<SheetProps>;

export const Default: Story = {};
