import Layout from '../../components/layouts/Layout'
import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'
import { formatISO8601 } from '../../utils/omit'

const BlogId = ({ blog }) => (
  <Layout title="Nansuta Home Page">
    <main style={{ textAlign: 'center' }}>
      <img
        style={{
          width: '35%',
          height: 'auto',
        }}
        src={blog.thumbnail.url}
        alt="Picture of thumbnail"
      />
      <h1>{blog.title}</h1>
      <p>{formatISO8601(blog.createdAt)}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  </Layout>
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
