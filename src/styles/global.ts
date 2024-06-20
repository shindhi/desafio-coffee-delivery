import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: #FAFAFA;
  }
  
  body, input, textarea, button {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme['base-100']};
  }
`
