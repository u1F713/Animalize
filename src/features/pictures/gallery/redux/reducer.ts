import { PicturesActions } from '../../shared/reduxActions'
import GalleryPicture from '../types/GalleryEntityAdapter'
import Actions from './actions/ActionsType'

const initialState: GalleryPicture = {
  ids: [],
  resources: {}
}

export const galleryReducer = (state = initialState, actions: Actions): GalleryPicture => {
  const { payload, type } = actions

  switch (type) {
    case PicturesActions.SetAll:
      return actions.payload

    case PicturesActions.AddOne:
      state.ids.push(payload.sourceURL)
      state.resources[payload.sourceURL] = actions.payload

      return state

    default:
      return state
  }
}
