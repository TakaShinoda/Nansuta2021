import Link from 'next/link'
import Layout from '../components/layouts/Layout'

const Contact = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Contact</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Contact
