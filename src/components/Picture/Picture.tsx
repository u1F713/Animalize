import { FunctionComponent } from 'react'
import Image, { ImageProps } from 'next/image'
import * as S from './Picture.styled'

interface PictureProps {
  image: ImageProps
  zoomIn?: boolean
}

export const Picture: FunctionComponent<PictureProps> = ({ image, zoomIn }) => {
  return (
    <S.Container handleButton={zoomIn ?? false}>
      <Image unselectable="on" {...image} />
    </S.Container>
  )
}
