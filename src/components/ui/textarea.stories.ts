import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import textareaMacro from './textarea.njk?raw';
import buttonMacro from './button.njk?raw';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  rows?: number;
  class?: string;
}

const meta = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  render: (args: TextareaProps) => {
    const template = `
      ${textareaMacro}
      
      {% call textarea(props) %} {{- content -}} {% endcall %}
    `;

    return renderNunjucksTemplate(template, { props: args, content: args.value });
  },
  argTypes: {
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
    rows: {
      control: 'number',
      description: '텍스트 영역의 행 수',
    },
    class: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} as Meta<TextareaProps>;

export default meta;
type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a textarea with some content.',
  },
};

export const Disabled: Story = {
  args: {
    value: 'This textarea is disabled',
    disabled: true,
  },
};

export const WithRows: Story = {
  args: {
    rows: 10,
    placeholder: 'This textarea has 10 rows',
  },
};

export const WithLabel: Story = {
  render: (args: TextareaProps) => {
    const template = `
      ${textareaMacro}
      
      <div class="grid w-full gap-1.5">
        <label for="message" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Your message
        </label>
        {% call textarea(props) %}{% endcall %}
        <p class="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
      </div>
    `;

    return renderNunjucksTemplate(template, {
      props: {
        placeholder: 'Type your message here.',
        ...args,
      },
    });
  },
};

export const WithButton: Story = {
  render: (args: TextareaProps) => {
    const template = `
      ${buttonMacro}
      ${textareaMacro}
      
      <div class="grid w-full gap-2">
        {% call textarea(props) %}{% endcall %}
        {% call button({}) %}Send message{% endcall %}
      </div>
    `;

    return renderNunjucksTemplate(template, {
      props: {
        placeholder: 'Type your message here.',
        ...args,
      },
    });
  },
};
