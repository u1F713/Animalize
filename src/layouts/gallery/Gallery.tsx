import { FunctionComponent } from 'react'
// import GalleryItem from './components/item'
// import ReloadGallery from './gallery.service'

const Gallery: FunctionComponent = () => {
  // const arrGalleryList = ReloadGallery(galleryList)

  return (
    <main id="Gallery">
      {/* {arrGalleryList.map((elm: any) => {
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
      })} */}
    </main>
  )
}

export default Gallery
