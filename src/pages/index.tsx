import { GetStaticProps, NextPage } from 'next'
import { fetchGallery } from '$mod/cloudinary/services/fetchData'
import { GalleryAdapter } from '$mod/gallery/models/galleryEntity'
import Gallery from '$layouts/Gallery'

interface HomeProps {
  resources: GalleryAdapter
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await fetchGallery({ type: 'upload', prefix: 'gallery', max_results: 5 })

  return {
    props: {
      resources
    },
    revalidate: 10
  }
}

const Home: NextPage<HomeProps> = ({ resources }: HomeProps) => {
  return <Gallery resources={resources} />
}

export default Home
