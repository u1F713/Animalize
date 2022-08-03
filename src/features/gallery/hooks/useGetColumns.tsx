import { useCallback, useEffect, useState } from 'react'
import { GalleryItem } from '../models/galleryEntity'
import { genGallerList } from '../utils/getItemList'

interface GetColumnsProps {
  element: HTMLElement | null
  entities: GalleryItem[]
}

export function useGetColumns({ element, entities }: GetColumnsProps): any[] {
  const [columnsNum, setColumnsNum] = useState(1)
  const [columns, setColumns] = useState(genGallerList(entities, columnsNum))

  const handleRisize = useCallback(() => {
    if (element == null) return 0
    switch (true) {
      case element.clientWidth > 1200:
        return setColumnsNum(4)

      case element.clientWidth > 903:
        return setColumnsNum(3)

      case element.clientWidth > 604:
        return setColumnsNum(2)

      default:
        return setColumnsNum(1)
    }
  }, [element?.clientWidth, element])

  useEffect(() => {
    const elementObserver = new ResizeObserver(handleRisize)

    // handleRisize()
    if (element != null) elementObserver.observe(element)

    return () => elementObserver.disconnect()
  }, [element])

  useEffect(() => {
    setColumns(genGallerList(entities, columnsNum))
  }, [columnsNum])

  return columns
}
