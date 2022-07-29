import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import App from '@app'
import '$mod/styles-sass/global.sass'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
