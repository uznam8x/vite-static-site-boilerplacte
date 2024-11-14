import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import checkboxGroupMacro from './checkbox-group.njk?raw';

interface CheckboxGroupItem {
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
}

interface CheckboxGroupProps {
  name?: string;
  label?: string;
  items?: CheckboxGroupItem[];
  defaultValue?: string[];
  disabled?: boolean;
}

const meta = {
  title: 'Components/CheckboxGroup',
  tags: ['autodocs'],
  render: (args: CheckboxGroupProps) => {
    const template = `
      ${checkboxGroupMacro}
      
      {{ checkboxGroup(props) }}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    name: {
      control: 'text',
      description: '체크박스 그룹의 name 속성',
    },
    label: {
      control: 'text',
      description: '체크박스 그룹의 레이블',
    },
    items: {
      control: 'object',
      description: '체크박스 아이템 배열',
    },
    defaultValue: {
      control: 'object',
      description: '기본 선택값 배열',
    },
    disabled: {
      control: 'boolean',
      description: '전체 비활성화 여부',
    },
  },
} as Meta<CheckboxGroupProps>;

export default meta;
type Story = StoryObj<CheckboxGroupProps>;

export const Default: Story = {
  args: {
    name: 'fruits',
    label: '좋아하는 과일을 선택하세요',
    items: [
      { label: '사과', value: 'apple' },
      { label: '바나나', value: 'banana' },
      { label: '오렌지', value: 'orange' },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'fruits',
    label: '좋아하는 과일을 선택하세요',
    items: [
      { label: '사과', value: 'apple' },
      { label: '바나나', value: 'banana' },
      { label: '오렌지', value: 'orange' },
    ],
    defaultValue: ['apple', 'orange'],
  },
};

export const Disabled: Story = {
  args: {
    name: 'fruits',
    label: '좋아하는 과일을 선택하세요',
    items: [
      { label: '사과', value: 'apple' },
      { label: '바나나', value: 'banana' },
      { label: '오렌지', value: 'orange' },
    ],
    disabled: true,
  },
};

export const WithDisabledItems: Story = {
  args: {
    name: 'fruits',
    label: '좋아하는 과일을 선택하세요',
    items: [
      { label: '사과', value: 'apple' },
      { label: '바나나', value: 'banana', disabled: true },
      { label: '오렌지', value: 'orange' },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    name: 'notifications',
    label: '알림 설정',
    items: [
      { 
        label: '마케팅 이메일', 
        value: 'marketing',
        description: '새로운 제품과 기능에 대한 이메일을 받습니다.'
      },
      { 
        label: '보안 이메일', 
        value: 'security',
        description: '계정 보안 관련 이메일을 받습니다.'
      },
    ],
  },
};
