import ActionType from '../actions/actions-types';
import Actions from '../actions';
import { ImageItemDto } from '../../common/gallery.dto';

const initialState: ImageItemDto[] = new Array<ImageItemDto>();

const galleryItemsReducer = (state = initialState, action: Actions) => {
  let reduxState: Actions['payload'];

  switch (action.type) {
    case ActionType.GET:
      reduxState = action.payload;
      return reduxState;

    default:
      return state;
  }
};
export default galleryItemsReducer;
