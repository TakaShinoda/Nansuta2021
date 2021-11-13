import Link from 'next/link'
import Layout from '../components/layouts/Layout'

const Service = () => (
  <Layout title="Nansuta Home Page">
    <h1>Service</h1>
    <p>This is the service page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Service
