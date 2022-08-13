import PictureEntity from '~/features/pictures/shared/PictureEntity'
import { PicturesActions } from '$mod/pictures/shared/reduxActions'

export interface AddOneAction {
  type: PicturesActions.AddOne
  payload: PictureEntity
}

export function addOneActionCreator(entity: PictureEntity): AddOneAction {
  return {
    type: PicturesActions.AddOne,
    payload: entity
  }
}
