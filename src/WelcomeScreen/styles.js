import styled, { css } from 'styled-components';
import H2 from '../components/H2';
import H1 from '../components/H1';
import Screen1Image from '../components/Illustrations/Screen1';
import Screen2Image from '../components/Illustrations/Screen2';
import Screen3Image from '../components/Illustrations/Screen3';
import { mediaHeight } from '../styles/mediaQueries';
import { screenWidth, screenHeight } from '../styles/theme';

export const AbsoluteView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CTAButtonContainer = styled.View`
  height: ${screenHeight * 0.22}px;
  align-items: center;
  background-color: #f9f9f9;
  flex-shrink: 1;
`;

export const ScreenBgStyled = styled.View`
  background-color: #f9f9f9;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

export const Title = styled(H1)`
  margin-bottom: ${screenHeight * 0.025}px;
  width: 75%;
  flex-shrink: 0;
`;

export const SubTitle = styled(H2)`
  width: 75%;
  margin-bottom: ${screenHeight * 0.25}px;
  flex-shrink: 0;
`;

const bigImage = css`
  height: 200px;
`;
const mediumImage = css`
  height: 150px;
`;
const smallImage = css`
  height: 65px;
`;

const imageCss = css`
  margin-bottom: ${screenHeight * 0.05}px;
  width: ${screenWidth}px;
  flex-shrink: 0;
  ${bigImage}
  ${mediaHeight.medium`${mediumImage}`}
  ${mediaHeight.small`${smallImage}`}
`;

export const StyledScreen1 = styled(Screen1Image)`
  ${imageCss}
`;

export const StyledScreen2 = styled(Screen2Image)`
  ${imageCss}
`;

export const StyledScreen3 = styled(Screen3Image)`
  ${imageCss}
  margin-bottom: 0px;
`;
