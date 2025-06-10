import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { error } from '@sveltejs/kit';

function getLines(filePathStr) {
    const filePath = path.resolve(filePathStr);
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const html = marked.parse(markdown);
    return html.split("\n")
}

export function load({ params }) {
    let blogs = fs.readdirSync("blog/")
    let slug = params.slug;

    if (blogs.includes(slug)){
      let clean_path = "blog/" + params.slug;
      const lines = getLines(clean_path);
      return {
          "lines": lines,
          "name": params.slug
      };
    }
    error(404, 'Not found');
}
