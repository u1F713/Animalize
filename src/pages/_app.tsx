import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/store'
import '$mod/styles-sass/global.sass'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
