import { useEffect, useState } from 'react';
import { slicer } from '../../utils/arraySlice';
import { ImageItemDto } from '../../common/gallery.dto';
import { GalleryItemProps } from './item';

const ReloadGallery = (gallery: ImageItemDto[]) => {
  const [columns, setColumns] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      switch (true) {
        case window.innerWidth > 1200:
          setColumns(4);
          break;

        case window.innerWidth > 903:
          setColumns(3);
          break;

        case window.innerWidth > 604:
          setColumns(2);
          break;

        default:
          setColumns(1);
          break;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return slicer<GalleryItemProps>(gallery, columns);
};
export default ReloadGallery;
