import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import radioGroupMacro from './radio-group.njk?raw';

interface RadioGroupItem {
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
}

interface RadioGroupProps {
  name?: string;
  label?: string;
  items?: RadioGroupItem[];
  defaultValue?: string;
  disabled?: boolean;
}

const meta = {
  title: 'Components/RadioGroup',
  tags: ['autodocs'],
  render: (args: RadioGroupProps) => {
    const template = `
      ${radioGroupMacro}
      
      {{ radioGroup(props) }}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    name: {
      control: 'text',
      description: '라디오 그룹의 name 속성',
    },
    label: {
      control: 'text',
      description: '라디오 그룹의 레이블',
    },
    items: {
      control: 'object',
      description: '라디오 아이템 배열',
    },
    defaultValue: {
      control: 'text',
      description: '기본 선택값',
    },
    disabled: {
      control: 'boolean',
      description: '전체 비활성화 여부',
    },
  },
} as Meta<RadioGroupProps>;

export default meta;
type Story = StoryObj<RadioGroupProps>;

export const Default: Story = {
  args: {
    name: 'size',
    label: '사이즈를 선택하세요',
    items: [
      { label: '작게', value: 'small' },
      { label: '중간', value: 'medium' },
      { label: '크게', value: 'large' },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'size',
    label: '사이즈를 선택하세요',
    items: [
      { label: '작게', value: 'small' },
      { label: '중간', value: 'medium' },
      { label: '크게', value: 'large' },
    ],
    defaultValue: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    name: 'size',
    label: '사이즈를 선택하세요',
    items: [
      { label: '작게', value: 'small' },
      { label: '중간', value: 'medium' },
      { label: '크게', value: 'large' },
    ],
    disabled: true,
  },
};

export const WithDisabledItems: Story = {
  args: {
    name: 'size',
    label: '사이즈를 선택하세요',
    items: [
      { label: '작게', value: 'small' },
      { label: '중간', value: 'medium', disabled: true },
      { label: '크게', value: 'large' },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    name: 'plan',
    label: '구독 플랜 선택',
    items: [
      { 
        label: '무료', 
        value: 'free',
        description: '기본적인 기능을 무료로 사용할 수 있습니다.'
      },
      { 
        label: '프로', 
        value: 'pro',
        description: '모든 고급 기능을 사용할 수 있습니다.'
      },
    ],
  },
};
