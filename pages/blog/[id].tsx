import { client } from '../../lib/client'

const BlogId = ({ blog }) => (
  <main>
    <img
      src={blog.thumbnail.url}
      alt="Picture of thumbnail"
    />
    <h1>{blog.title}</h1>
    <p>{blog.createdAt}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: `${blog.body}`,
      }}
    />
  </main>
)

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const blog = await client.get({ endpoint: 'blog', contentId: id })
  return {
    props: {
      blog,
    },
  }
}

export default BlogId
