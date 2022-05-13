import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/H1';
import TextStyled from '../../components/TextStyled';
import { screenWidth } from '../../styles/theme';

const CategorieGain = ({ children, icon = null, value = '?', unit = '', description, maximize, onPress }) => {
  return (
    <ButtonTouchable onPress={onPress}>
    <Categorie>
      <ComponentCategorie>
        {!!icon && <IconCategorie>{icon}</IconCategorie>}
        {children}
        <UnitCategorie>
          <CategorieValue>
            <TextStyled bold> {value}</TextStyled>
          </CategorieValue>
          {!!unit && (
            <CategorieUnit>
              <TextStyled bold> {unit}</TextStyled>
            </CategorieUnit>
          )}
        </UnitCategorie>
      </ComponentCategorie>
      <TextCategorieContainer>
        <TextCategorie>
          <TextStyled numberOfLines={2}>{description}</TextStyled>
        </TextCategorie>
      </TextCategorieContainer>
    </Categorie>
    </ButtonTouchable>
  );
};

const width = screenWidth / 3;

const Categorie = styled.View`
  margin-left: ${width * 0.2}px;
  width: ${width * 0.85}px;
  margin-right: ${width * 0.2}px;
`;

const ComponentCategorie = styled.View`
  border: 1px solid #4030a5;
  border-radius: 5px;
  width: ${width * 0.85}px;
  min-height: ${width * 0.85}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const IconCategorie = styled.View`
  justify-content: center;
  flex-direction: row;
  height: ${width * 0.85 * 0.4}px;
  align-items: center;
`;

const UnitCategorie = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  height: ${width * 0.85 * 0.5}px;

  align-items: baseline;
  flex-wrap: wrap;
`;

const CategorieUnit = styled(H1)``;

const CategorieValue = styled.Text`
  font-size: 45px;
`;

const TextCategorieContainer = styled.View`
  padding-top: 2px;
  align-items: center;
`;

const TextCategorie = styled.Text`
  text-align: center;
`;

const ButtonTouchable = styled.TouchableOpacity``;

export default CategorieGain;
