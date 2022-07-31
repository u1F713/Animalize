import { FC } from 'react'
import { useAppSelector } from '$common/store'

const Container: FC = () => {
  const { entities } = useAppSelector((state) => state.gallery)

  return <>{JSON.stringify(entities)}</>
}

export default Container
