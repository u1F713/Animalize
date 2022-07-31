import { GalleryActionsTypes } from '../models/ActionsTypes'
import { GalleryAdapter, initialState } from '../models/galleryEntity'
import { GalleryResived } from './actions/received'

export type Actions = GalleryResived

export const galleryReducer = (state = initialState, action: Actions): GalleryAdapter => {
  switch (action.type) {
    case GalleryActionsTypes.resived:
      return action.payload

    default:
      return state
  }
}
