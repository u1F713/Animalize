import { ImageItemDto } from '../common/gallery.dto';
import apiSearch from './cloudinary.api';

const loadGallery = async (maxResults: number): Promise<ImageItemDto[]> => {
  const pictures = new Array<ImageItemDto>();
  const data: string[] = await apiSearch({
    type: 'upload',
    prefix: 'gallery',
    max_results: maxResults,
  });

  data.forEach((url: string, index: number) => {
    const pictureRestuct: ImageItemDto = {
      id: index,
      pictureSrc: url,
      alternativeText: url.split('/').pop(),
    };
    pictures.push(pictureRestuct);
  });

  return pictures;
};

export default loadGallery;
