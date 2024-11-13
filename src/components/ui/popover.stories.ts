import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import popoverMacro from './popover.njk?raw';
import buttonMacro from './button.njk?raw';

interface PopoverProps {
  trigger?: string;
}

const meta = {
  title: 'Components/Popover',
  tags: ['autodocs'],
  render: () => {
    const template = `
      ${buttonMacro}
      ${popoverMacro}
      
      {% call popover() %}
        {# Trigger #}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open' slot='trigger'"
        }) %}
          Open Popover
        {% endcall %}

        {# Content #}
        <div class="flex flex-col space-y-1">
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Profile</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Settings</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left text-red-500">Logout</button>
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
} as Meta<PopoverProps>;

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {};

export const WithCustomContent: Story = {
  render: () => {
    const template = `
      ${buttonMacro}
      ${popoverMacro}
      
      {% call popover() %}
        {# Trigger #}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open' slot='trigger'"
        }) %}
          Settings
        {% endcall %}

        {# Content #}
        <div class="flex flex-col space-y-1">
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Profile</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Settings</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left text-red-500">Logout</button>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
};

export const WithMenuItems: Story = {
  render: () => {
    const template = `
      ${buttonMacro}
      ${popoverMacro}
      
      {% call popover() %}
        {# Trigger #}
        {% call button({
          variant: "outline",
          attrs: "@click='open = !open' slot='trigger'"
        }) %}
          Menu
        {% endcall %}

        {# Content #}
        <div class="flex flex-col space-y-1">
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Share</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Export</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left text-red-500">Delete</button>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
};
