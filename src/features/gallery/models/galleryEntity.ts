export interface GalleryItem {
  id: string
  pictureSrc: string
  alternativeLabel: string
}

export interface GalleryAdapter {
  ids: string[]
  entities: { [key: string]: GalleryItem }
}

export const initialState: GalleryAdapter = { ids: [], entities: {} }
