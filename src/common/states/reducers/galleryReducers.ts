import ActionType from '../actions/actions-types'
import { GalleryActions } from '../actions'
import { ImageItemDto } from '../../types/gallery.dto'

const initialState: ImageItemDto[] = new Array<ImageItemDto>()

const galleryItemsReducer = (state = initialState, action: GalleryActions): any => {
  let reduxState: GalleryActions['payload']

  switch (action.type) {
    case ActionType.SET:
      reduxState = action.payload
      return reduxState

    default:
      return state
  }
}
export default galleryItemsReducer
