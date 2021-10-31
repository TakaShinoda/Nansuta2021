import Link from 'next/link'
import Layout from '../components/layouts/Layout'

const Service = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Service</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Service
