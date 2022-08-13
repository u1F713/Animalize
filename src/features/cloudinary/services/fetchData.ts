import { GalleryAdapter, GalleryItem } from '$mod/gallery/models/galleryEntity'
import { AdminAndResourceOptions } from 'cloudinary'
import { ResourceApiRes } from '../model/resourcesApiRes'
import { api, url } from './sdk.config'

interface ApiResponse {
  resources: ResourceApiRes[]
}

export const fetchGallery = async (options: AdminAndResourceOptions): Promise<GalleryAdapter> => {
  const { resources }: ApiResponse = await api.resources(options)
  const entities: { [key: string]: GalleryItem } = {}

  resources.forEach((element: ResourceApiRes) => {
    entities[element.public_id] = {
      id: element.public_id,
      pictureSrc: element.secure_url,
      thumbnail: url(element.public_id, { page: 1, secure: true, crop: 'thumb' }),
      alternativeLabel: element.public_id.replace(`${element.folder ?? ''}/`, ''),
      height: parseInt(element.height, 10) ?? 400,
      width: parseInt(element.width, 10) ?? 330
    }
  })

  return {
    ids: resources.map((resource: any) => resource.asset_id),
    entities
  }
}
