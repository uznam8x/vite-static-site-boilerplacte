import { JSDOM } from 'jsdom';
import parse from './parse';
export default function (content: string) {
  try {
    const dom = new JSDOM(`<div id="root">${content}</div>`);
    const root = dom.window.document.getElementById('root');
    return parse(root);
  } catch (error) {
    console.error('Error parsing slots:', error);
    return {};
  }
}
