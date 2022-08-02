import { FC, ReactNode } from 'react'

interface ContainerProps {
  children?: ReactNode
}

const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  )
}

export default Container
