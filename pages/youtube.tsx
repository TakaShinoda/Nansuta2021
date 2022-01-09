import Layout from '../components/layouts/Layout'
import { Box, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Youtube = () => (
  <Layout title="Nansuta Home Page">
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{ textAlign: 'center', margin: '20px', display: 'inline-block' }}
      >
        <Button
          variant="contained"
          color="error"
          href="https://www.youtube.com/channel/UCkCZ2nQMYHgy0hEfDmcidew/videos"
        >
          チャンネルはこちら
          <FontAwesomeIcon icon={faYoutube} style={{ margin: 1 }} />
        </Button>
      </Box>
    </Box>

    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{ textAlign: 'center', margin: '50px', display: 'inline-block' }}
      >
        <iframe
          width="590"
          height="345"
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
          width="590"
          height="345"
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
          width="590"
          height="345"
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
          width="590"
          height="345"
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
