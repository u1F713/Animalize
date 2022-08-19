import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { store } from '~/modules/redux'

import '~/styles/main.sass'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
