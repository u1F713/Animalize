import ActionType from '../actions/actions-types';
import { ModalActions } from '../actions';
import { ModalDto } from '../../common/modal.dto';

const initialState: ModalDto = {
  modalVisible: false,
  alternativeText: undefined,
  pictureSrc: undefined,
};

const modalReducer = (state = initialState, action: ModalActions) => {
  let reduxState: ModalActions['payload'];

  switch (action.type) {
    case ActionType.MODAl_SET:
      reduxState = action.payload;
      return reduxState;

    default:
      return state;
  }
};

export default modalReducer;
