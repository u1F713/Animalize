import { GalleryAdapter } from '$mod/gallery/models/galleryEntity'
import { GalleryActionsTypes } from '../../models/ActionsTypes'

export interface GalleryResived {
  type: GalleryActionsTypes.resived
  payload: GalleryAdapter
}

export const addTodo = (gallery: GalleryAdapter): GalleryResived => ({
  type: GalleryActionsTypes.resived,
  payload: gallery
})
