import nunjucks from 'nunjucks';
import twMerge from './filters/twMerge';
import slots from './filters/slots/browser';

// 웹 환경에서 사용할 수 있는 설정으로 변경
const env = nunjucks.configure({
  autoescape: true,
  throwOnUndefined: false,
  trimBlocks: false,
  lstripBlocks: false,
});

// slots 필터 추가
env.addFilter('slots', slots);

// 기존 필터들
env.addFilter('twMerge', twMerge);
env.addFilter('safe', (str: string) => new nunjucks.runtime.SafeString(str));

type TemplateContext = Record<string, unknown>;

export function renderNunjucksTemplate(template: string, context: TemplateContext = {}) {
  try {
    return env.renderString(template, context);
  } catch (error) {
    console.error('Template rendering error:', error);
    throw error;
  }
}

