import { getGallery, getImage } from './cloudinary.api'
import { ImageItemDto } from '../types/gallery.dto'

export const loadGallery = async (maxResults: number): Promise<ImageItemDto[]> => {
  const pictures = new Array<ImageItemDto>()
  const data: string[] = await getGallery({
    type: 'upload',
    prefix: 'gallery',
    max_results: maxResults
  })

  data.forEach((url: string, index: number) => {
    const pictureRestuct: ImageItemDto = {
      id: index,
      pictureSrc: url,
      alternativeText: url.split('/').pop()
    }
    pictures.push(pictureRestuct)
  })

  return pictures
}

export const loadImage = async (name: string): Promise<ImageItemDto> => {
  const url = await getImage(name)
  return {
    pictureSrc: url,
    alternativeText: url.split('/').pop()
  }
}
