import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: Mononoki;
    font-style: normal;
    font-display: fallback;
    src: url('fonts/mononoki-Regular.ttf');
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  ::selection{
    background: #B983FF
  }

  html,body{
    font-family: Mononoki, -apple-syste, Ubuntu, Fira Sans;
    line-height: 0.9;
  }
`
