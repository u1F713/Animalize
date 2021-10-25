import { FunctionComponent } from 'react';
import GalleryItem, { GalleryItemProps } from './item';

export interface GalleryProps {
  galleryList: GalleryItemProps[];
}

const Gallery: FunctionComponent<GalleryProps> = ({
  galleryList,
}): JSX.Element => {
  return (
    <main id="Gallery">
      {galleryList.map((item: GalleryItemProps) => (
        <section className="gallery-d" key={item.id}>
          <GalleryItem
            id={item.id}
            pictureSrc={item.pictureSrc}
            alternativeText={item.alternativeText}
          />
        </section>
      ))}
    </main>
  );
};

export default Gallery;
