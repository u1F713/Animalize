import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../common/states'
import { ImageItemDto } from '../../common/types/gallery.dto'

export type GalleryItemProps = ImageItemDto

const GalleryItem: FunctionComponent<GalleryItemProps> = ({ pictureSrc, alternativeText }) => {
  const dispath = useDispatch()
  const { setModal } = bindActionCreators(ActionCreators, dispath)
  const updateModal = (): any => {
    // document.body.style.overflow = 'hidden';
    setModal({ alternativeText, pictureSrc, modalVisible: true })
  }

  return (
    <figure onClick={updateModal} className="gallery-item" role="none">
      <img src={pictureSrc} alt={alternativeText} />
    </figure>
  )
}

export default GalleryItem
