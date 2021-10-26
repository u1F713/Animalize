import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../states';
import GalleryItem, { GalleryItemProps } from './item';
import { slicer } from '../../utils/arraySlice';

export interface GalleryProps {
  columns: number;
}

const Gallery: FunctionComponent<GalleryProps> = ({ columns }): JSX.Element => {
  const galleryList = useSelector((state: State) => state.gallery);
  const arrGalleryList = slicer<GalleryItemProps>(galleryList, columns);

  return (
    <main id="Gallery">
      {arrGalleryList.map((elm) => {
        return (
          <section className="gallery-d" key={elm.key}>
            {elm.arr.map((item) => (
              <GalleryItem
                id={item.id}
                pictureSrc={item.pictureSrc}
                alternativeText={item.alternativeText}
                key={item.id}
              />
            ))}
          </section>
        );
      })}
    </main>
  );
};

export default Gallery;
