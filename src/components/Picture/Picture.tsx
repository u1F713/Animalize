import { FC, useMemo } from 'react'
import Image, { ImageProps } from 'next/image'
import S from './Picture.module.sass'

interface PictureProps {
  image: ImageProps
  zoomIn?: boolean
}

export const Picture: FC<PictureProps> = ({ image, zoomIn }) => {
  const Styles = useMemo(() => {
    return `${S.image} ${zoomIn ?? false ? S.zoomIn : ''}`
  }, [zoomIn])

  return (
    <figure className={S.container}>
      <Image unselectable="on" className={Styles} {...image} />
    </figure>
  )
}
