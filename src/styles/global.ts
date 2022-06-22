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
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans', 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${(props) => props.theme.gray_1}
}

a {
  color: inherit;
  text-decoration: none;
}

`;
