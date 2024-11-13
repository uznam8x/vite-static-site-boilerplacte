import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import inputMacro from './input.njk?raw';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'file' | 'number';
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  class?: string;
}

const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: (args: InputProps) => {
    const template = `
      ${inputMacro}
      
      {{ input(props) }}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'file', 'number'],
      description: '입력 필드의 타입',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    value: {
      control: 'text',
      description: '입력 값',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    class: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} as Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Type something...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email address',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const WithValue: Story = {
  args: {
    type: 'text',
    value: 'Input value',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    value: 'Disabled input',
    disabled: true,
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const WithLabel: Story = {
  render: (args: InputProps) => {
    const template = `
      ${inputMacro}
      
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email
        </label>
        {{ input(props) }}
      </div>
    `;

    return renderNunjucksTemplate(template, {
      props: {
        type: 'email',
        placeholder: 'Email address',
        ...args,
      },
    });
  },
};
