import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import dialogMacro from './dialog.njk?raw';
import buttonMacro from './button.njk?raw';

interface DialogProps {
  trigger?: string;
  content?: string;
}

const meta = {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  render: (args: DialogProps) => {
    const cleanup = () => {
      const existingDialogs = document.querySelectorAll('[data-dialog-container]');
      existingDialogs.forEach(dialog => dialog.remove());
    };

    cleanup();

    const template = `
      ${buttonMacro}
      ${dialogMacro}

      {% set trigger %}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open'"
        }) %}
          Open Dialog
        {% endcall %}
      {% endset %}

      {% call dialog({
        trigger: trigger
      }) %}
        <div class="grid gap-4">
          <div class="flex flex-col space-y-2">
            <h2 class="text-lg font-semibold">다이얼로그 제목</h2>
            <p class="text-sm text-muted-foreground">다이얼로그의 내용을 여기에 작성합니다.</p>
          </div>
          <div class="flex justify-end">
            {% call button({
              variant: "outline",
              attrs: "@click='open = false'"
            }) %}
              닫기
            {% endcall %}
          </div>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template, {});
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<DialogProps>;

export default meta;
type Story = StoryObj<DialogProps>;

export const Default: Story = {};

export const Alert: Story = {
  render: () => {
    const template = `
      ${buttonMacro}
      ${dialogMacro}
      
      {% set trigger %}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open'"
        }) %}
          Open Dialog
        {% endcall %}
      {% endset %}

      {% call dialog({
        trigger: trigger
      }) %}
        <div class="grid gap-4">
          <div class="flex flex-col space-y-2">
            <h2 class="text-lg font-semibold text-destructive">Are you sure?</h2>
            <p class="text-sm text-muted-foreground">This action cannot be undone.</p>
          </div>
          <div class="flex justify-end gap-2">
            {% call button({
              variant: "outline",
              attrs: "@click='open = false'"
            }) %}
              Cancel
            {% endcall %}
            {% call button({
              variant: "destructive", 
              attrs: "@click='open = false'"
            }) %}
              Delete
            {% endcall %}
          </div>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template, {});
  },
};
