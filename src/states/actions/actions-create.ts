import { Dispatch } from 'react';
import ActionType from './actions-types';
import Actions from '.';
import { ImageItemDto } from '../../common/gallery.dto';

export const setGalleryItems = (input: ImageItemDto) => {
  return (dispath: Dispatch<Actions>) => {
    dispath({
      type: ActionType.GET,
      payload: input,
    });
  };
};

export const GetGalleryOneItem = (input: null) => {
  return (dispath: Dispatch<Actions>) => {
    dispath({
      type: ActionType.GET,
      payload: input,
    });
  };
};
