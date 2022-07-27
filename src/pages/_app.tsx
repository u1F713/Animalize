import { AppProps } from 'next/app'
import App from '@app'
import '../features/styles-sass/global.sass'
import { ReactElement } from 'react'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
