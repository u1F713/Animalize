import { combineReducers } from 'redux';
import galleryItemsReducer from './galleryReducers';

const reducers = combineReducers({
  gallery: galleryItemsReducer,
});

export type State = ReturnType<typeof reducers>;
export default reducers;
