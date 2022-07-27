import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../common/states'
import { loadGallery } from '../common/utils/loadGallery'
import Gallery from '../layouts/gallery'
import Layout from '../layouts/default'

export const getStaticProps = async (): Promise<any> => {
  const galleryData = await loadGallery(50)

  return {
    props: {
      gallery: {
        data: galleryData
      }
    },
    revalidate: 10
  }
}

const Home: FunctionComponent<{ gallery: any }> = ({ gallery }) => {
  const dispath = useDispatch()
  const { setGalleryItems } = bindActionCreators(ActionCreators, dispath)

  setGalleryItems(gallery.data)
  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}
export default Home
