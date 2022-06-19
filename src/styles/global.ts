import styled, { createGlobalStyle } from 'styled-components';

import { ThemeType } from './themes/default';

type Props = {
	theme: ThemeType;
};
export default createGlobalStyle<Props>`
   html{
    font-size: 62.5%;
    background-color: ${(props) => props.theme.background};
  }
  @font-face {
    font-family: 'Segoe UI Bold Italic';
    src: url('./fonts/Segoe UI Bold Italic.ttf') format('ttf'),
    }
      
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${(props) => props.theme.textPrimary}
}

a {
  color: inherit;
  text-decoration: none;
}

`;
