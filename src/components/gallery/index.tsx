import { FunctionComponent } from 'react';
import GalleryItem, { GalleryItemProps } from './item';

export interface GalleryProps {
  galleryList: GalleryItemProps[];
}

const Gallery: FunctionComponent<GalleryProps> = ({
  galleryList,
}): JSX.Element => {
  return (
    <main id="gallery">
      <section>
        {galleryList.map((item: GalleryItemProps) => (
          <GalleryItem
            id={item.id}
            pictureSrc={item.pictureSrc}
            alternativeText={item.alternativeText}
            key={item.id}
          />
        ))}
      </section>
    </main>
  );
};

export default Gallery;
