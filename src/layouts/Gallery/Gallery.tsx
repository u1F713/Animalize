import { FC, useRef } from 'react'
import { useSelector } from '~/modules/redux'
import { useGetColumns } from '$mod/gallery'
import { GalleryItem } from '$mod/gallery/models/galleryEntity'
import Item from './components/Item'
import S from './Gallery.module.sass'

const Gallery: FC = () => {
  const { entities } = useSelector((state) => state.gallery)
  const element = useRef<HTMLElement>(null)
  const columns = useGetColumns({ element: element.current, entities: Object.values(entities) })

  return (
    <main className={S.Gallery} ref={element}>
      {columns.map((elm, key) => {
        return (
          <section className={S.column} key={key}>
            {elm.arr.map((item: GalleryItem, key: number) => (
              <Item key={key} picture={item} />
            ))}
          </section>
        )
      })}
    </main>
  )
}

export default Gallery
