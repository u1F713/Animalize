import PictureEntity from '../../shared/PictureEntity'
import GalleryState from '../types/GalleryEntityAdapter'
import { test, expect } from '@playwright/test'
import { SetAllActionCreator, galleryReducer, addOneActionCreator } from '$mod/pictures/gallery'

test.describe('Gallery Redux reducer tests', () => {
  const previousState: GalleryState = {
    ids: [],
    resources: {}
  }

  const pictureEntity: PictureEntity = {
    caption: 'test caption',
    thumbnailURL: 'test thumbnailURL',
    sourceURL: 'test URL',
    height: 300,
    width: 300
  }

  const galleryResources = {
    'test URL': pictureEntity
  }

  test('should handle setAll(ActionCreator)', () => {
    const expectResult: GalleryState = { ...previousState, resources: galleryResources }

    expect(galleryReducer(previousState, SetAllActionCreator({ ids: [], resources: galleryResources }))).toEqual(
      expectResult
    )
  })

  test('should handle setOne(ActionCreator)', () => {
    const expectResult: GalleryState = { ...previousState, resources: { 'test URL': pictureEntity } }

    expect(galleryReducer(previousState, addOneActionCreator(pictureEntity))).toEqual(expectResult)
  })
})
