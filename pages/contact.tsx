import Layout from '../components/layouts/Layout'
import { Box } from '@mui/material'

const Contact = () => (
  <Layout title="Nansuta Home Page">
    <Box sx={{ textAlign: 'center', marginTop: '50px'}}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScwoOo0tJU9w9X1BRXGR4IImJA0LklmNrCSZiSjq77xkxtt6w/viewform?embedded=true"
        width="750"
        height="1000"
        frameBorder="0"
      >
        読み込んでいます…
      </iframe>
    </Box>
  </Layout>
)

export default Contact
