import Link from 'next/link'
import Layout from '../components/layouts/Layout'
import { Box } from '@mui/material'

const Youtube = () => (
  <Layout title="Nansuta Home Page">
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{ textAlign: 'center', margin: '50px', display: 'inline-block' }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/kKFm3fiBp9Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        sx={{ textAlign: 'center', margin: '50px', display: 'inline-block' }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/2_6t3NdHM30"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        sx={{ textAlign: 'center', margin: '50px', display: 'inline-block' }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/HFAJkY3Fvks"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        sx={{ textAlign: 'center', margin: '50px', display: 'inline-block' }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/eUte1z4ItEY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  </Layout>
)

export default Youtube
