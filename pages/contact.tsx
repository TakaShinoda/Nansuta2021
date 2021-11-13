import Link from 'next/link'
import Layout from '../components/layouts/Layout'

const Contact = () => (
  <Layout title="Nansuta Home Page">
    <h1>Contact</h1>
    <p>This is the contact page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Contact
