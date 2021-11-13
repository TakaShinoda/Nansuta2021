import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'

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

export const getStaticPaths: GetStaticPaths = async () => {
  // getStaticPathsのメソッドの中ではビルド時に作成するページのパス一覧を作成し、pathsでreturnする必要がある
  const data = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id as string
  const blog = await client.get({ endpoint: 'blog', contentId: id })
  return {
    props: {
      blog,
    },
  }
}

export default BlogId
