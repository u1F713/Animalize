import type GalleryPictures from '../../types/GalleryEntityAdapter'
import { PicturesActions } from '$mod/pictures/shared/reduxActions'

export interface SetAllAction {
  type: PicturesActions.SetAll
  payload: GalleryPictures
}

export function SetAllActionCreator(resources: GalleryPictures): SetAllAction {
  return {
    type: PicturesActions.SetAll,
    payload: resources
  }
}
