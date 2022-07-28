import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../common/states'
import { fetchGallery } from '$mod/cloudinary/services/fetchData'
import Gallery from '../layouts/gallery'
import Layout from '../layouts/default'

export const getStaticProps = async (): Promise<any> => {
  const galleryData = await fetchGallery({ type: 'upload', prefix: 'gallery', max_results: 50 })

  return {
    props: {
      gallery: {
        data: galleryData.resources.map((img: any) => ({
          id: img.asset_id,
          pictureSrc: img.secure_url,
          alternativeText: img.secure_url.split('/').pop() ?? ''
        }))
      }
    },
    revalidate: 10
  }
}

const Home: FunctionComponent<{ gallery: any }> = ({ gallery }) => {
  const dispath = useDispatch()
  const { setGalleryItems } = bindActionCreators(ActionCreators, dispath)

  setGalleryItems(gallery.data)
  console.log(gallery)

  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}
export default Home
