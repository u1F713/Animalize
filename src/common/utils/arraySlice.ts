export interface GalleryArrType<T> {
  arr: T[]
  pieces: number
}

export const slicer = <T>(arr: any, pieces: any): any => {
  const sliceArray = new Array<{ key: number; arr: T[] }>(pieces)

  for (let index = 0; index < sliceArray.length; index += 1) {
    sliceArray[index] = { key: index, arr: [] }
  }

  for (let cursor = 0, index = 0; cursor < arr.length; cursor += 1, index += 1) {
    if (index > sliceArray.length - 1) index = 0
    sliceArray[index].arr.push(arr[cursor])
  }

  return sliceArray
}
