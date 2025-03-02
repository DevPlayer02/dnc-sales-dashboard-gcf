import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
  body, html {
    background: ${(props) => props.theme.appBackground};
    color: ${(props) => props.theme.appColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  h1, h1, p, ul, li {
    margin: 0;
    padding: 0;
  }
`
