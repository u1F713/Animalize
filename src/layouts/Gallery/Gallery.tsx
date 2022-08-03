import { useAppSelector } from '$common/store'
import { FC, useRef } from 'react'
import { useGetColumns } from '$mod/gallery'
import { GalleryItem } from '$mod/gallery/models/galleryEntity'
import Item from './components/Item'

const Gallery: FC = () => {
  const { entities } = useAppSelector((state) => state.gallery)
  const element = useRef<HTMLElement>(null)
  const columns = useGetColumns({ element: element.current, entities: Object.values(entities) })

  return (
    <main id="Gallery" ref={element}>
      {columns.map((elm, key) => {
        return (
          <section className="gallery-d" key={key}>
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
