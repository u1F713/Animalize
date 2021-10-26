/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import { ImageItemDto } from '../../common/gallery.dto';

export type GalleryItemProps = ImageItemDto;

const GalleryItem: FunctionComponent<GalleryItemProps> = ({
  pictureSrc,
  alternativeText,
}) => {
  return (
    <figure className="gallery-item">
      <img src={pictureSrc} alt={alternativeText} />
    </figure>
  );
};

export default GalleryItem;
