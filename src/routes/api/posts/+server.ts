// Ref: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

import { json } from '@sveltejs/kit'

const fetchPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata }: any = await resolver()
            const postPath = path.slice(11, -3).replace("+page", "")

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return allPosts
}

export const GET = async () => {
    const allPosts = await fetchPosts()

    const sortedPosts = allPosts.sort((a, b) => {
        // @ts-ignore
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return json(sortedPosts)
}
