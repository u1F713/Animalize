import { memo, ReactElement, useEffect } from 'react'
import { useDispatch } from '~/modules/redux'
import { addTodo, GalleryAdapter } from '$mod/gallery'
import { isEqual } from 'lodash'
import Gallery from './Gallery'

interface GalleryProps {
  resources: GalleryAdapter
}

function GalleryCamponentAdapted({ resources }: GalleryProps): ReactElement {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addTodo(resources))
  }, [resources])

  return <Gallery />
}

export default memo(GalleryCamponentAdapted, isEqual)
