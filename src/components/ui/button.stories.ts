import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
// Vite의 ?raw 쿼리를 사용하여 njk 파일을 문자열로 import
import buttonMacro from './button.njk?raw';

interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  content?: string;
}

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args: ButtonProps) => {
    const template = `
      ${buttonMacro}
      
      {% call button(props) %}
        {{ content }}
      {% endcall %}
    `;
    
    return renderNunjucksTemplate(template, { props: args, content: args.content });
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    content: {
      control: 'text',
    },
  },
} as Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    content: 'Button',
  } as ButtonProps,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    content: 'Secondary',
  } as ButtonProps,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    content: 'Destructive',
  } as ButtonProps,
};
