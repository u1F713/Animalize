import { useAppSelector } from '$common/store'
import { FC, useRef } from 'react'
import { useGetColumns } from '$mod/gallery'
import Item from './components/Item'

const Gallery: FC = () => {
  const { entities } = useAppSelector((state) => state.gallery)
  const element = useRef<HTMLElement>(null)
  const columns = useGetColumns(element.current)

  return (
    <main id="Gallery" ref={element}>
      <section className="gallery-d">
        {Object.values(entities).map((entity) => (
          <section key={entity.id}>
            <Item picture={entity} />
          </section>
        ))}
      </section>
    </main>
  )
}

export default Gallery
