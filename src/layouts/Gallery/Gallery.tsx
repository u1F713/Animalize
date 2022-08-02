import { useAppSelector } from '$common/store'
import { FunctionComponent } from 'react'
import Item from './components/Item'

const Gallery: FunctionComponent = () => {
  const { entities } = useAppSelector((state) => state.gallery)

  return (
    <main id="Gallery">
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
