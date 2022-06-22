import styled, { createGlobalStyle } from 'styled-components';

import { ThemeType } from './themes/default';

type Props = {
	theme: ThemeType;
};
export default createGlobalStyle<Props>`
   html{
    font-size: 62.5%;
    background-color: ${(props) => props.theme.white};
  }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  color: ${(props) => props.theme.gray_1}
}

a {
  color: inherit;
  text-decoration: none;
}

`;
