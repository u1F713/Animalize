import { ActionType } from './actions/actionsTypes'
import { GalleryAdapter, initialState } from '../models/galleryEntity'
import { GalleryActions } from './actions/index'

export const galleryReducer = (state = initialState, action: GalleryActions): GalleryAdapter => {
  switch (action.type) {
    case ActionType.resived:
      return action.payload

    default:
      return state
  }
}
