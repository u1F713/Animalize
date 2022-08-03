import { GetStaticProps, NextPage } from 'next'
import { fetchGallery } from '$mod/cloudinary/services/fetchData'
import { GalleryAdapter } from '$mod/gallery/models/galleryEntity'
import Gallery from '$layouts/Gallery'
import Layout from '$layouts/default'

interface HomeProps {
  resources: GalleryAdapter
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await fetchGallery({ type: 'upload', prefix: 'gallery', max_results: 50 })

  return {
    props: {
      resources
    },
    revalidate: 10
  }
}

const Home: NextPage<HomeProps> = ({ resources }: HomeProps) => {
  return (
    <Layout>
      <Gallery resources={resources} />
    </Layout>
  )
}

export default Home
