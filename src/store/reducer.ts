import pictures from '$mod/pictures/reducer'
import { combineReducers } from 'redux'
import { galleryReducer as gallery } from '$mod/gallery'
import { reducer as modal } from '$mod/modal'

export const reducer = combineReducers({
  gallery,
  modal,
  pictures
})
