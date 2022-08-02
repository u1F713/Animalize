import { FunctionComponent } from 'react'
import { ImageItemDto } from '../../../common/types/gallery.dto'
export type GalleryItemProps = ImageItemDto

const GalleryItem: FunctionComponent<GalleryItemProps> = ({ pictureSrc, alternativeText }) => {
  return (
    <figure className="gallery-item" role="none">
      <img src={pictureSrc} alt={alternativeText} />
    </figure>
  )
}

export default GalleryItem
