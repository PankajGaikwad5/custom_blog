import showdown from 'showdown';

const converter = new showdown.Converter();

export function MarkdownToHtml(markdown: string) {
  return converter.makeHtml(markdown);
}
