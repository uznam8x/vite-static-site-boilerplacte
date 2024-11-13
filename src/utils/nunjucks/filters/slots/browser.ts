// import { JSDOM } from 'jsdom';
import parse from './parse';
export default function (content: string) {
  try {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(`<div id="root">${content}</div>`, 'text/html');
    const root = doc.getElementById('root');
    return parse(root);
  } catch (error) {
    console.error('Error parsing slots:', error);
    return {};
  }
}
