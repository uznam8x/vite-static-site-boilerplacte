import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import sliderMacro from './slider.njk?raw';

interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  format?: string;
}

const meta = {
  title: 'Components/Slider',
  tags: ['autodocs'],
  render: (args: SliderProps) => {
    const template = `
      ${sliderMacro}
      
      {{ slider(props) }}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    value: {
      control: 'number',
      description: '현재 값',
    },
    min: {
      control: 'number',
      description: '최소값',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: '최대값',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      description: '단계 값',
      defaultValue: 1,
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
      defaultValue: false,
    },
    showValue: {
      control: 'boolean',
      description: '값 표시 여부',
      defaultValue: false,
    },
    format: {
      control: 'text',
      description: '값 포맷팅 함수',
    },
  },
} as Meta<SliderProps>;

export default meta;
type Story = StoryObj<SliderProps>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithValue: Story = {
  args: {
    value: 40,
    showValue: true,
  },
};

export const CustomRange: Story = {
  args: {
    min: -20,
    max: 20,
    value: 0,
    showValue: true,
  },
};

export const Steps: Story = {
  args: {
    min: 0,
    max: 100,
    step: 20,
    value: 40,
    showValue: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 70,
    disabled: true,
    showValue: true,
  },
};

export const CustomFormat: Story = {
  args: {
    value: 50,
    showValue: true,
    format: '(value) => `${value}%`',
  },
};

export const WithLabel: Story = {
  render: (args: SliderProps) => {
    const template = `
      ${sliderMacro}
      
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <label for="volume" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          볼륨
        </label>
        {{ slider(props) }}
      </div>
    `;

    return renderNunjucksTemplate(template, {
      props: {
        value: 50,
        showValue: true,
        format: '(value) => `${value}%`',
        ...args,
      },
    });
  },
}; 