import Link from 'next/link'
import Layout from '../components/layouts/Layout'

const Youtube = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Youtube</h1>
    <p>This is the company page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Youtube
