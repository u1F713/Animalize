import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { store } from '~/modules/redux'
import GlobalStyled from '~/modules/styles/global.styled'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
