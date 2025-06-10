import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

function getLines(filePathStr) {
    const filePath = path.resolve(filePathStr);
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const html = marked.parse(markdown);
    return html.split("\n")
}

export function load({ params }) {
    const lines = getLines("blog/first.md");
    return {
        lines
    };
}
