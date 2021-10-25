import fs from 'fs';
import { ImageItemDto } from '../common/gallery.dto';

const loadGallery = (): ImageItemDto[] => {
  const data: string[] = fs.readdirSync('public/gallery');
  const pictures = new Array<ImageItemDto>();

  data.forEach((elm: string, index: number) => {
    const pictureRestuct: ImageItemDto = {
      id: index,
      pictureSrc: `/gallery/${elm}`,
      alternativeText: elm,
    };
    pictures.push(pictureRestuct);
  });

  return pictures;
};

export default loadGallery;
