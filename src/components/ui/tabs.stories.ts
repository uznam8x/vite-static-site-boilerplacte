import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import tabsMacro from './tabs.njk?raw';

interface TabsProps {
  defaultValue?: string;
}

const meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: (args: TabsProps) => {
    const template = `
      ${tabsMacro}
      
      {% call tabs(props) %}
        <div class="flex items-center" slot="list">
          {% call tabTrigger({ value: 'tab1' }) %}
            계정
          {% endcall %}
          {% call tabTrigger({ value: 'tab2' }) %}
            비밀번호
          {% endcall %}
          {% call tabTrigger({ value: 'tab3' }) %}
            설정
          {% endcall %}
        </div>

        {% call tabContent({ value: 'tab1' }) %}
          <div class="space-y-4">
            <h4 class="text-sm font-medium">계정 설정</h4>
            <p class="text-sm text-muted-foreground">
              계정과 관련된 설정을 변경할 수 있습니다.
            </p>
          </div>
        {% endcall %}

        {% call tabContent({ value: 'tab2' }) %}
          <div class="space-y-4">
            <h4 class="text-sm font-medium">비밀번호 변경</h4>
            <p class="text-sm text-muted-foreground">
              비밀번호를 변경할 수 있습니다.
            </p>
          </div>
        {% endcall %}

        {% call tabContent({ value: 'tab3' }) %}
          <div class="space-y-4">
            <h4 class="text-sm font-medium">기타 설정</h4>
            <p class="text-sm text-muted-foreground">
              기타 설정을 변경할 수 있습니다.
            </p>
          </div>
        {% endcall %}
      {% endcall %}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '기본적으로 선택될 탭의 value',
    },
  },
} as Meta<TabsProps>;

export default meta;
type Story = StoryObj<TabsProps>;

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
  },
};

export const WithIcon: Story = {
  render: () => {
    const template = `
      ${tabsMacro}
      
      {% call tabs({ defaultValue: 'tab1' }) %}
        <div class="flex items-center" slot="list">
          {% call tabTrigger({ value: 'tab1' }) %}
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>프로필</span>
            </div>
          {% endcall %}

          {% call tabTrigger({ value: 'tab2' }) %}
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 20s8-7.5 8-12a6 6 0 0 0-12 0c0 4.5 8 12 8 12"/>
                <circle cx="12" cy="8" r="2"/>
              </svg>
              <span>위치</span>
            </div>
          {% endcall %}
        </div>

        {% call tabContent({ value: 'tab1' }) %}
          <div class="space-y-4">
            <h4 class="text-sm font-medium">프로필 설정</h4>
            <p class="text-sm text-muted-foreground">
              프로필 정보를 수정할 수 있습니다.
            </p>
          </div>
        {% endcall %}

        {% call tabContent({ value: 'tab2' }) %}
          <div class="space-y-4">
            <h4 class="text-sm font-medium">위치 설정</h4>
            <p class="text-sm text-muted-foreground">
              위치 정보를 설정할 수 있습니다.
            </p>
          </div>
        {% endcall %}
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
}; 