import { GetStaticProps, NextPage } from 'next'
import { fetchGallery } from '$mod/cloudinary/services/fetchData'
import PropTypes from 'prop-types'
import Gallery from '$layouts/gallery'
import Layout from '$layouts/default'

interface HomeProps {
  gallery: any
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await fetchGallery({ type: 'upload', prefix: 'gallery', max_results: 50 })

  return {
    props: {
      gallery: {
        resources
      }
    },
    revalidate: 10
  }
}

const Home: NextPage<HomeProps> = ({ gallery }) => {
  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}

Home.propTypes = {
  gallery: PropTypes.any
}

export default Home
