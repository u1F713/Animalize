import { FC, ReactNode } from 'react'

interface FullScreenContainerProps {
  children: ReactNode
}

const FullScreenContainer: FC<FullScreenContainerProps> = ({ children }) => {
  return <div className="fullscreen-container">{children}</div>
}

export default FullScreenContainer
