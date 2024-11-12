import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import popoverMacro from './popover.njk?raw';
import buttonMacro from './button.njk?raw';

interface PopoverProps {
  trigger?: string;
  content?: string;
}

const meta = {
  title: 'Components/Popover',
  tags: ['autodocs'],
  render: (args: PopoverProps) => {
    const template = `
      ${buttonMacro}
      ${popoverMacro}
      
      {{ popover({
        trigger: '
          {% call button({
            variant: "outline",
            attrs: "@click=\'open = !open\' :aria-expanded=\'open\'"
          }) %}
            ${args.trigger || 'Open Popover'}
          {% endcall %}
        ',
        content: content
      }) }}
    `;
    
    return renderNunjucksTemplate(template, { 
      content: args.content
    });
  },
  argTypes: {
    trigger: {
      control: 'text',
      description: '팝오버를 트리거하는 요소',
    },
    content: {
      control: 'text',
      description: '팝오버 내용',
    },
  },
} as Meta<PopoverProps>;

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    trigger: 'Open Popover',
    content: 'This is the popover content.',
  },
};

export const WithCustomContent: Story = {
  args: {
    trigger: 'Settings',
    content: `
      <div class="flex flex-col space-y-1">
        <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Profile</button>
        <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Settings</button>
        <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left text-red-500">Logout</button>
      </div>
    `,
  },
};

export const WithSlotContent: Story = {
  render: (args: PopoverProps) => {
    const template = `
      ${buttonMacro}
      ${popoverMacro}
      
      {% call popover({
        trigger: '
          {% call button({
            variant: "outline",
            attrs: "@click=\'open = !open\' :aria-expanded=\'open\'"
          }) %}
            Menu
          {% endcall %}
        '
      }) %}
        <div class="flex flex-col space-y-1">
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Share</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left">Export</button>
          <button class="text-sm px-2 py-1 hover:bg-accent rounded-md text-left text-red-500">Delete</button>
        </div>
      {% endcall %}
    `;
    
    return renderNunjucksTemplate(template, {});
  }
};