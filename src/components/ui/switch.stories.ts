import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import switchMacro from './switch.njk?raw';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  class?: string;
}

const meta = {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render: (args: SwitchProps) => {
    const template = `
      ${switchMacro}
      
      {{ switch(props) }}
    `;
    
    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '스위치 상태',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
      defaultValue: false,
    },
    class: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} as Meta<SwitchProps>;

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args: SwitchProps) => {
    const template = `
      ${switchMacro}
      
      <div class="flex items-center space-x-2">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Airplane mode
        </label>
        {{ switch(props) }}
      </div>
    `;
    
    return renderNunjucksTemplate(template, { props: args });
  },
};

export const WithLabelAndDescription: Story = {
  render: (args: SwitchProps) => {
    const template = `
      ${switchMacro}
      
      <div class="flex items-center space-x-2">
        <div class="grid gap-1.5 leading-none">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Marketing emails
          </label>
          <p class="text-sm text-muted-foreground">
            Receive emails about new products, features, and more.
          </p>
        </div>
        {{ switch(props) }}
      </div>
    `;
    
    return renderNunjucksTemplate(template, { props: args });
  },
};
