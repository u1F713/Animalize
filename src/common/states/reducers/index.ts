import { combineReducers } from 'redux'
import galleryItemsReducer from './galleryReducers'
import modalReducer from './modalReducers'

const reducers = combineReducers({
  gallery: galleryItemsReducer,
  modal: modalReducer
})

export type State = ReturnType<typeof reducers>
export default reducers
