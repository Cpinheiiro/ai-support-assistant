import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    background: ${colors.bg};
    color: ${colors.text};
  }

  button,
  input {
    font-family: inherit;
  }
`;