import { GetStaticProps, NextPage } from 'next'
import { fetchGallery } from '$mod/cloudinary/services/fetchData'
import { GalleryAdapter } from '$mod/gallery/models/galleryEntity'
import Gallery from '$layouts/gallery'

interface HomeProps {
  gallery: GalleryAdapter
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await fetchGallery({ type: 'upload', prefix: 'gallery', max_results: 5 })

  return {
    props: {
      gallery: {
        resources
      }
    },
    revalidate: 10
  }
}

const Home: NextPage<HomeProps> = ({ gallery }: HomeProps) => {
  return <Gallery resources={gallery} />
}

export default Home
