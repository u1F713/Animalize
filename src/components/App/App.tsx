import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '$common/store'

interface AppProps {
  children: ReactNode
}

export const App: FC<AppProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
