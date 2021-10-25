import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ImageItemDto } from '../../common/gallery.dto';

export type GalleryItemProps = ImageItemDto;

const GalleryItem: FunctionComponent<GalleryItemProps> = ({
  pictureSrc,
  alternativeText,
}) => {
  return (
    <div className="gallery-item">
      <figure>
        <Image
          width={330}
          height={500}
          src={pictureSrc}
          alt={alternativeText}
        />
      </figure>
    </div>
  );
};

export default GalleryItem;
