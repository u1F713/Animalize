import { ImageItemDto } from '../../common/gallery.dto';
import ActionType from './actions-types';

interface setGallery {
  type: ActionType.GET;
  payload: ImageItemDto[];
}

// interface getOnGalleryItem {
//   type: ActionType.GET;
//   payload: number;
// }

type Actions = setGallery;
export default Actions;
