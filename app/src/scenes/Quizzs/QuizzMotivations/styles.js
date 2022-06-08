import React from 'react';
import styled, { css } from 'styled-components';
import H1 from '../../../components/H1';
import TextStyled from '../../../components/TextStyled';
import { defaultPaddingFontScale } from '../../../styles/theme';

export const commonCss = css`
  width: 100%;
  flex-shrink: 0;
`;

export const Paragraph = styled.View`
  margin-bottom: 25px;
`;

export const TopContainer = styled.View`
  padding: 20px ${defaultPaddingFontScale()}px ${(props) => (props.shortPaddingBottom ? 30 : 100)}px;
`;

export const TopTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  ${commonCss}
  margin-top: 10px;
  margin-bottom: 20px;
  max-width: 95%;
`;

export const TopTitle = styled(H1)`
  padding: 0 10px;
`;

export const SectionTitle = styled(TextStyled)`
  color: #4030a5;
  font-weight: bold;
`;
