import { combineReducers } from 'redux'
import { galleryReducer as gallery } from '$mod/gallery'
import modal from '$common/states/reducers/modalReducers'

export const reducer = combineReducers({
  gallery,
  modal
})
