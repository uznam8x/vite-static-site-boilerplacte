# Vite static site boilerplate

## Get started

### Introduction

vite + typescript + tailwindcss + nunjucks + alpinejs

## Components

### Button

버튼 컴포넌트는 사용자 인터랙션을 위한 클릭 가능한 요소입니다.

| Param   | Type                                                         | Default   | Description |
| ------- | ------------------------------------------------------------ | --------- | ----------- |
| variant | `default` `destructive` `outline` `secondary` `ghost` `link` | `default` | 버튼의 스타일 변형 |
| size    | `default` `sm` `lg` `icon`                                   | `default` | 버튼의 크기 |
| class   | `string`                                                     | -         | 추가 CSS 클래스 |
| attrs   | `string`                                                     | -         | 추가 HTML 속성 |

### Input

입력 필드 컴포넌트입니다.

| Param       | Type                                              | Default | Description |
| ----------- | ------------------------------------------------- | ------- | ----------- |
| type        | `text` `email` `password` `file` `number`         | `text`  | 입력 필드 타입 |
| placeholder | `string`                                          | -       | 플레이스홀더 텍스트 |
| value       | `string`                                          | -       | 입력 값 |
| disabled    | `boolean`                                         | `false` | 비활성화 상태 |
| class       | `string`                                          | -       | 추가 CSS 클래스 |

### Textarea

여러 줄의 텍스트를 입력받을 수 있는 컴포넌트입니다.

| Param       | Type      | Default | Description |
| ----------- | --------- | ------- | ----------- |
| placeholder | `string`  | -       | 플레이스홀더 텍스트 |
| value       | `string`  | -       | 입력 값 |
| disabled    | `boolean` | `false` | 비활성화 상태 |
| rows        | `number`  | -       | 텍스트 영역의 행 수 |
| class       | `string`  | -       | 추가 CSS 클래스 |

### Switch

토글 스위치 컴포넌트입니다.

| Param    | Type      | Default | Description |
| -------- | --------- | ------- | ----------- |
| checked  | `boolean` | `false` | 스위치 상태 |
| disabled | `boolean` | `false` | 비활성화 상태 |
| class    | `string`  | -       | 추가 CSS 클래스 |

### Progress

진행 상태를 표시하는 컴포넌트입니다.

| Param | Type     | Default | Description |
| ----- | -------- | ------- | ----------- |
| value | `number` | `0`     | 진행률 값 (0-100) |
| class | `string` | -       | 추가 CSS 클래스 |

### Popover

클릭하여 추가 콘텐츠를 표시하는 팝오버 컴포넌트입니다.

| Param   | Type     | Default | Description |
| ------- | -------- | ------- | ----------- |
| trigger | `string` | -       | 팝오버를 트리거하는 요소 |
| content | `string` | -       | 팝오버 내용 |

## Usage

각 컴포넌트는 Nunjucks 매크로로 구현되어 있으며, 다음과 같이 사용할 수 있습니다:
