import { GalleryAdapter } from '$mod/gallery/models/galleryEntity'
import { ActionType } from './actionsTypes'

export interface GalleryResived {
  type: ActionType.resived
  payload: GalleryAdapter
}
