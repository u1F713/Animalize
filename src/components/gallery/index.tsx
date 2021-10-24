import { FunctionComponent } from 'react';
import GalleryItem, { GalleryItemProps } from './item';

export interface GalleryProps {
  galleryList: GalleryItemProps[]
}

const Gallery: FunctionComponent<GalleryProps> = ({ galleryList }): JSX.Element => {
  console.log(galleryList[0].pictureSrc);

  return (
    <main>
      <section>
        {galleryList.map((item, index) => (
          <GalleryItem pictureSrc={item.pictureSrc} alternativeText="..." key={index} />
        ))}
      </section>
    </main>
  )
}

export default Gallery;
