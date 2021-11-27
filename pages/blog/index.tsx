import Link from 'next/link'
import Layout from '../../components/layouts/Layout'
import { client } from '../../lib/client'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { omit, formatDate } from '../../utils/omit'

const Blog = ({ blog }) => (
  <Layout title="Nansuta Home Page">
    {blog.map((blog) => (
      <Link href={`/blog/${blog.id}`} key={blog.id}>
        <Card
          sx={{
            maxWidth: 345,
            minWidth: 345,
            maxHeight: 360,
            minHeight: 360,
            margin: 2,
            display: 'inline-block',
            marginTop: '50px',
            cursor: 'pointer',
          }}
        >
          <CardMedia
            sx={{
              maxHeight: 200,
              minHeight: 200,
            }}
            component="img"
            height="140"
            image={blog.thumbnail.url}
            alt="blog thumbnail"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography variant="overline" color="text.secondary">
              {formatDate(blog.createdAt)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {omit(blog.subtitle, 42)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    ))}
  </Layout>
)

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })
  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Blog
