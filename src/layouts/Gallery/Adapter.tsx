import { memo, ReactElement, useEffect } from 'react'
import { useAppDispatch } from '$common/store'
import { addTodo, GalleryAdapter } from '$mod/gallery'
import { isEqual } from 'lodash'
import Gallery from './Gallery'

interface GalleryProps {
  resources: GalleryAdapter
}

function GalleryCamponentAdapted({ resources }: GalleryProps): ReactElement {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addTodo(resources))
  }, [resources])

  return <Gallery />
}

export default memo(GalleryCamponentAdapted, isEqual)
