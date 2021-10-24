import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ImageItemDto } from '../../common/gallery.dto'

export type GalleryItemProps = ImageItemDto;

const GalleryItem: FunctionComponent<GalleryItemProps> = ({ pictureSrc, alternativeText }) => {
  return (
    <div>
      <figure>
        <Image height={300} width={300} src={pictureSrc} alt={alternativeText} />
      </figure>
    </div>
  )
}

export default GalleryItem;
