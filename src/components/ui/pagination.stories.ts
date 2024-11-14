import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import paginationMacro from './pagination.njk?raw';

interface PaginationProps {
  current?: number;
  total?: number;
  baseUrl?: string;
  count?: number;
}

const meta = {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  render: (args: PaginationProps) => {
    const template = `
      ${paginationMacro}
      
      {{ pagination(props) }}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    current: {
      control: { type: 'number', min: 1 },
      description: '현재 페이지',
    },
    total: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
    },
    baseUrl: {
      control: 'text',
      description: '페이지네이션 기본 URL',
    },
    count: {
      control: { type: 'number', min: 1 },
      description: '표시할 페이지 숫자 개수',
    },
  },
} as Meta<PaginationProps>;

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    current: 1,
    total: 10,
    baseUrl: '/posts',
    count: 5,
  },
};

export const Middle: Story = {
  args: {
    current: 5,
    total: 10,
    baseUrl: '/posts',
    count: 5,
  },
};

export const LastPage: Story = {
  args: {
    current: 10,
    total: 10,
    baseUrl: '/posts',
    count: 5,
  },
};

export const WithCount: Story = {
  args: {
    current: 5,
    total: 10,
    baseUrl: '/posts',
    count: 3,
  },
};

export const LongPagination: Story = {
  args: {
    current: 5,
    total: 20,
    baseUrl: '/posts',
    count: 5,
  },
}; 