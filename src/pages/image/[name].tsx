import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ImageItemDto } from '../../common/types/gallery.dto'
import { ActionCreators } from '../../common/states'
import { loadGallery, loadImage } from '../../common/utils/loadGallery'
import Gallery from '../../layouts/Gallery'
import Layout from '../../components/layout'
import Modal from '../../components/modal'

export const getStaticPaths = async (): Promise<any> => {
  const imgs = await loadGallery(50)
  const paths = imgs.map((image): unknown => ({
    params: { name: image.alternativeText }
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any): Promise<any> => {
  const img = await loadImage(context.params.name)
  return {
    props: {
      img
    }
  }
}

const Image: FunctionComponent<{ img: ImageItemDto }> = ({ img }) => {
  const dispath = useDispatch()

  const { setModal } = bindActionCreators(ActionCreators, dispath)
  useEffect(() => {
    setModal({
      modalVisible: true,
      pictureSrc: img.pictureSrc,
      alternativeText: img.alternativeText
    })
  }, [])

  return (
    <Layout>
      <Gallery />
      <Modal />
    </Layout>
  )
}
export default Image
