import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import progressMacro from './progress.njk?raw';

interface ProgressProps {
  value?: number;
  class?: string;
}

const meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  render: (args: ProgressProps) => {
    const template = `
      ${progressMacro}
      
      {% set progressProps = {
        value: props.value,
        class: props.class
      } %}
      {{ progress(progressProps) }}
    `;
    
    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '진행률 값 (0-100)',
      defaultValue: 50,
    },
    class: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} as Meta<ProgressProps>;

export default meta;
type Story = StoryObj<ProgressProps>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const AlmostComplete: Story = {
  args: {
    value: 90,
  },
};

export const CustomStyle: Story = {
  args: {
    value: 70,
    class: 'h-6 bg-slate-200',
  },
};
export const Small: Story = {
  args: {
    value: 30,
    class: 'h-2',
  },
};
