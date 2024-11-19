import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import alertMacro from './alert.njk?raw';
import buttonMacro from './button.njk?raw';

interface AlertDialogProps {
  cancelText?: string;
  confirmText?: string;
}

const meta = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  render: (args: AlertDialogProps) => {
    const template = `
      ${buttonMacro}
      ${alertMacro}
      
      {% call alert(props) %}
        {# Trigger #}
        {% call button({
          variant: "destructive",
          attrs: "@click='open = true' slot='trigger'"
        }) %}
          계정 삭제
        {% endcall %}

        {# Title #}
        <div slot="title">정말 계정을 삭제하시겠습니까?</div>

        {# Description #}
        <div slot="description">
          이 작업은 되돌릴 수 없습니다. 계정이 영구적으로 삭제되며 모든 데이터가 제거됩니다.
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    cancelText: {
      control: 'text',
      description: '취소 버튼 텍스트',
    },
    confirmText: {
      control: 'text',
      description: '확인 버튼 텍스트',
    },
  },
} as Meta<AlertDialogProps>;

export default meta;
type Story = StoryObj<AlertDialogProps>;

export const Default: Story = {};

export const CustomButtonText: Story = {
  args: {
    cancelText: '아니오',
    confirmText: '예, 삭제합니다',
  },
};

export const Simple: Story = {
  render: () => {
    const template = `
      ${buttonMacro}
      ${alertMacro}
      
      {% call alert() %}
        {# Trigger #}
        {% call button({
          attrs: "@click='open = true' slot='trigger'"
        }) %}
          저장하기
        {% endcall %}

        {# Title #}
        <div slot="title">변경사항을 저장하시겠습니까?</div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
};

export const WithEvent: Story = {
  render: () => {
    const template = `
      ${buttonMacro}
      ${alertMacro}
      
      <div
        x-data
        @confirm="alert('확인되었습니다.')"
      >
        {% call alert() %}
          {# Trigger #}
          {% call button({
            variant: "outline",
            attrs: "@click='open = true' slot='trigger'"
          }) %}
            작업 실행
          {% endcall %}

          {# Title #}
          <div slot="title">작업을 실행하시겠습니까?</div>

          {# Description #}
          <div>
            이 작업은 몇 분 정도 소요될 수 있습니다.
          </div>
        {% endcall %}
      </div>
    `;

    return renderNunjucksTemplate(template);
  },
}; 