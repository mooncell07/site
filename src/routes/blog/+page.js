export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`)
  const blogs = await response.json()

  return {
    blogs
  }
}