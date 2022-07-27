import ActionType from '../actions/actions-types'
import { ModalActions } from '../actions'
import { ModalDto } from '../../types/modal.dto'

const initialState: ModalDto = {
  modalVisible: false,
  alternativeText: '',
  pictureSrc: ''
}

const modalReducer = (state = initialState, action: ModalActions): any => {
  let reduxState: ModalActions['payload']

  switch (action.type) {
    case ActionType.MODAl_SET:
      reduxState = action.payload
      return reduxState

    default:
      return state
  }
}

export default modalReducer
