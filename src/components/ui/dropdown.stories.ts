import type { Meta, StoryObj } from '@storybook/html';
import { renderNunjucksTemplate } from '../../utils/nunjucks';
import dropdownMacro from './dropdown.njk?raw';

interface DropdownProps {}

const meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  render: (args: DropdownProps) => {
    const template = `
      ${dropdownMacro}
      
      {% call dropdown() %}
        <button 
          slot="trigger"
          type="button"
          @click="toggle"
          :aria-expanded="open"
          class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          <span>Options</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4 transition-transform duration-200"
            :class="{ 'rotate-180': open }"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div class="py-1">
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            프로필 보기
          </button>
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            설정
          </button>
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            로그아웃
          </button>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template, { props: args });
  },
} as Meta<DropdownProps>;

export default meta;
type Story = StoryObj<DropdownProps>;

export const Default: Story = {};

export const WithDisabledItem: Story = {
  render: () => {
    const template = `
      ${dropdownMacro}
      
      {% call dropdown() %}
        <button 
          slot="trigger"
          type="button"
          @click="toggle"
          :aria-expanded="open"
          class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          <span>Actions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4 transition-transform duration-200"
            :class="{ 'rotate-180': open }"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div class="py-1">
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            수정하기
          </button>
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none opacity-50 cursor-not-allowed" disabled>
            삭제하기
          </button>
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            공유하기
          </button>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
};

export const WithIcons: Story = {
  render: () => {
    const template = `
      ${dropdownMacro}
      
      {% call dropdown() %}
        <button 
          slot="trigger"
          type="button"
          @click="toggle"
          :aria-expanded="open"
          class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
            <span>더보기</span>
          </div>
        </button>

        <div class="py-1">
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            프로필
          </button>
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            설정
          </button>
          <button class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none text-destructive hover:bg-destructive hover:text-destructive-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            로그아웃
          </button>
        </div>
      {% endcall %}
    `;

    return renderNunjucksTemplate(template);
  },
}; 