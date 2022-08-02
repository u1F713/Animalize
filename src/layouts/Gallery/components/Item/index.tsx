import { FC } from 'react'
import { GalleryItem } from '$mod/gallery/models/galleryEntity'

interface ItemProps {
  picture: GalleryItem
}

const Item: FC<ItemProps> = ({ picture }) => {
  return (
    <figure className="gallery-item" role="none">
      <img src={picture.pictureSrc} alt={picture.alternativeLabel} />
    </figure>
  )
}

export default Item
