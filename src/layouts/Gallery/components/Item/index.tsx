import { FC, useCallback } from 'react'
import { GalleryItem } from '$mod/gallery/models/galleryEntity'
import { useAppDispatch } from 'src/store'
import Picture from '~/components/Picture'
import S from './Item.module.sass'

interface ItemProps {
  picture: GalleryItem
}

const Item: FC<ItemProps> = ({ picture }) => {
  const dispatch = useAppDispatch()

  const updateModal = useCallback(() => {
    dispatch({
      type: 'modal/set',
      payload: { picture: picture.pictureSrc, alternativeText: picture.alternativeLabel, visible: true }
    })
  }, [dispatch])

  return (
    <figure onClick={updateModal} className={S.item}>
      <Picture zoomIn image={{ src: picture.thumbnail, width: picture.width, height: picture.height }} />
    </figure>
  )
}

export default Item
