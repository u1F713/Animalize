import { GalleryItem } from '../models/galleryEntity'

export function genGallerList(entities: GalleryItem[], columns: number): any[] {
  const list = new Array<{ key: number; arr: any[] }>(columns)

  for (let index = 0; index < list.length; index += 1) {
    list[index] = { key: index, arr: [] }
  }

  for (let cursor = 0, index = 0; cursor < entities.length; cursor += 1, index += 1) {
    if (index > list.length - 1) index = 0
    list[index].arr.push(entities[cursor])
  }
  return list
}
