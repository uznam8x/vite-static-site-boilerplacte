import { JSDOM } from 'jsdom';

export default function (content: string) {
  try {
    // 브라우저 환경인지 확인
    const isBrowser = typeof window !== 'undefined' && window.DOMParser;
    
    let root;
    if (isBrowser) {
      // 브라우저 환경(Storybook)에서는 DOMParser 사용
      const parser = new window.DOMParser();
      const doc = parser.parseFromString(`<div id="root">${content}</div>`, 'text/html');
      root = doc.getElementById('root');
    } else {
      // Node.js 환경(Vite)에서는 JSDOM 사용
      const dom = new JSDOM(`<div id="root">${content}</div>`);
      root = dom.window.document.getElementById('root');
    }

    if (!root) return {};

    return {
      default: Array.from(root.querySelectorAll(':scope > :not([slot])'))
        .map((el) => el.outerHTML)
        .join(''),
      ...Array.from(root.querySelectorAll(':scope > [slot]')).reduce(
        (acc, el) => {
          const slotName = el.getAttribute('slot');
          if (slotName) {
            acc[slotName] = el.outerHTML;
          }
          return acc;
        },
        {} as Record<string, string>,
      ),
    };
  } catch (error) {
    console.error('Error parsing slots:', error);
    return {};
  }
}
