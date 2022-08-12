import { FC, useCallback } from 'react'
import { GalleryItem } from '$mod/gallery/models/galleryEntity'
import { useAppDispatch } from 'src/store'
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
      <img className={S.image} src={picture.pictureSrc} alt={picture.alternativeLabel} />
    </figure>
  )
}

export default Item
