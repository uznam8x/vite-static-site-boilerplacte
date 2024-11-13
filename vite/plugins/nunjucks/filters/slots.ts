import { JSDOM } from 'jsdom';

export function slots(content: string) {
  try {
    const dom = new JSDOM(`<div id="root">${content}</div>`);
    const document = dom.window.document;
    const root = document.getElementById('root');

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

export default slots;
