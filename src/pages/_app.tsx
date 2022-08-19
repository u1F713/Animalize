import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '~/modules/redux'
import GlobalStyled from '~/modules/styles/global.styled'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ isDark: false, colors: { bg: '#fff' } }}>
        <GlobalStyled />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
