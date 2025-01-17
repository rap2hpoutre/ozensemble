import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import H2 from '../../../../components/H2';
import { P } from '../../../../components/Articles';
import { useNavigation } from '@react-navigation/native';
import TextStyled from '../../../../components/TextStyled';

const ResultAddiction = ({ value }) => {
  const navigation = useNavigation();
  const getResultScore = () => {
    switch (value) {
      default:
      case null:
        return;
      case 'good':
        return (
          <View>
            <ResultParagraph color="#191919">
              Votre consommation d'alcool ne devrait pas provoquer de risque pour votre santé.
            </ResultParagraph>
          </View>
        );
      case 'risk':
        return (
          <View>
            <ResultParagraph color="#191919">
              <P bold>Votre consommation d'alcool comporte vraisemblablement des risques pour votre santé</P>, même si
              actuellement vous ne souffrez de rien. Pour en savoir plus, consultez{' '}
              <TextStyled color="#4030a5" underline onPress={() => navigation.navigate('ALCOHOL_AND_HEALTH_RISKS')}>
                l'article sur les risques sur la santé à long terme.
              </TextStyled>
            </ResultParagraph>
            <ResultParagraph color="#191919">
              N'hésitez pas à demander conseil de manière{' '}
              <P bold color="#de285e">
                anonyme et gratuite
              </P>{' '}
              à l'équipe Oz Ensemble.
            </ResultParagraph>
          </View>
        );
      case 'addicted':
        return (
          <View>
            <ResultParagraph color="#191919">
              <P bold>Il est possible que vous soyez dépendant de l'alcool.</P>
            </ResultParagraph>
            <ResultParagraph color="#191919">
              Cette dépendance peut être psychologique si vous ressentez un besoin de consommer malgré les inconvénients
              de cette consommation et/ou physique si la dimunution ou l'arrêt de votre consommation entraîne des signes
              de “manque”.
            </ResultParagraph>
            <ResultParagraph color="#191919">
              Nous vous conseillons de{' '}
              <P bold color="#de285e">
                faire appel gratuitement
              </P>{' '}
              et de manière{' '}
              <P bold color="#de285e">
                anonyme
              </P>{' '}
              à un{' '}
              <P bold color="#de285e">
                professionnel Oz Ensemble
              </P>
              .
            </ResultParagraph>
          </View>
        );
    }
  };

  return (
    <ContainerSection>
      <ResultTitle>Mes résultats</ResultTitle>
      {getResultScore()}
    </ContainerSection>
  );
};

export const ContainerSection = styled.View`
  margin: 5px 0 20px 0;
`;
export const ResultParagraph = styled(P)`
  margin: 8px 0;
`;

export const TopContainer = styled.View`
  padding: 20px 25px 40px;
`;

export const ResultTitle = styled(H2)`
  width: 85%;
  flex-shrink: 0;
  font-weight: bold;
  color: #4030a5;
`;

export default ResultAddiction;
