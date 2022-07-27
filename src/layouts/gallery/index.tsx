import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../common/states'
import GalleryItem from './item'
import ReloadGallery from './gallery.service'

const Gallery: FunctionComponent = (): JSX.Element => {
  const galleryList = useSelector((state: State) => state.gallery)
  const arrGalleryList = ReloadGallery(galleryList)

  return (
    <main id="Gallery">
      {arrGalleryList.map((elm: any) => {
        return (
          <section className="gallery-d" key={elm.key}>
            {elm.arr.map((item: any) => (
              <GalleryItem
                id={item.id}
                pictureSrc={item.pictureSrc}
                alternativeText={item.alternativeText}
                key={item.id}
              />
            ))}
          </section>
        )
      })}
    </main>
  )
}

export default Gallery
