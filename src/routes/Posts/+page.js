import { marked } from 'marked';

async function fetchResource(url) {
    const response = await fetch(url);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    return html.split("\n")
}

export async function load({ fetch, params }) {
    const html = await fetchResource("https://raw.githubusercontent.com/mooncell07/mooncell07.github.io/refs/heads/master/blog/first.md");
    return {
        html
    };
}
