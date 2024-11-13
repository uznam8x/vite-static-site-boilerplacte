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
  render: () => {
    const cleanup = () => {
      const existingDialogs = document.querySelectorAll('[data-dialog-container]');
      existingDialogs.forEach((dialog) => dialog.remove());
    };

    cleanup();

    const template = `
      ${buttonMacro}
      ${dialogMacro}

      {% call dialog() %}
        {# Trigger #}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open' slot='trigger'"
        }) %}
          Open Dialog
        {% endcall %}

        {# Content #}
        <p>다이얼로그의 본문 내용입니다.</p>
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
      
      {% call dialog() %}
        {# Trigger #}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open' slot='trigger'"
        }) %}
          Open Dialog
        {% endcall %}

        {# Content #}
        <p>이 작업은 되돌릴 수 없습니다. 정말 진행하시겠습니까?</p>

      {% endcall %}
    `;

    return renderNunjucksTemplate(template, {});
  },
};
