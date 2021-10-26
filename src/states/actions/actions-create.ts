import { Dispatch } from 'react';
import ActionType from './actions-types';
import { GalleryActions, ModalActions } from '.';
import { ImageItemDto } from '../../common/gallery.dto';
import { ModalDto } from '../../common/modal.dto';

export const setGalleryItems = (input: ImageItemDto[]) => {
  return (dispath: Dispatch<GalleryActions>) => {
    dispath({
      type: ActionType.SET,
      payload: input,
    });
  };
};

export const GetGalleryOneItem = (input: null) => {
  return (dispath: Dispatch<GalleryActions>) => {
    dispath({
      type: ActionType.SET,
      payload: input,
    });
  };
};

export const setModal = (input: ModalDto) => {
  return (dispatch: Dispatch<ModalActions>) =>
    dispatch({
      type: ActionType.MODAl_SET,
      payload: input,
    });
};
