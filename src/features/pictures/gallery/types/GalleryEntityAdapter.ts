import type PictureEntity from '../../shared/PictureEntity'

export default interface GalleryPictureAdapter {
  ids: string[]
  resources: { [key: string]: PictureEntity }
}
