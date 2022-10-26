import React from 'react';
import TextStyled from '../../../../components/TextStyled';
import ButtonPrimary from '../../../../components/ButtonPrimary';
import Element from '../../../../components/ElementDayDefi';
import WrapperContainer from '../../../../components/WrapperContainer';
import styled from 'styled-components';
import { screenWidth } from '../../../../styles/theme';
import { defaultPaddingFontScale } from '../../../../styles/theme';
import H2 from '../../../../components/H2';
import { P } from '../../../../components/Articles';
import { Spacer } from '../../../../components/Articles';
import ArrowEmotion from '../../../../components/ArrowEmotion';
import { TouchableOpacity } from 'react-native';

const ArrowContainer = styled.View`
  flex-direction: row;
  width: 45%;
  justify-content: space-between;
`;

const PaddingContainer = styled.View`
  padding-horizontal: ${defaultPaddingFontScale()}px;
`;

const SituationContainer = styled.View`
  width: 100%;
  heigth: 100px;
  background-color: #efefef;
  padding: 10px;
  padding-bottom: 25px;
  padding-top: 25px;
  align-items: center;
  margin-bottom: 30px;
`;

const BulletPoint = styled.View`
  margin: 10px;
`;

const ButtonPrimaryStyled = styled(ButtonPrimary)`
  margin-bottom: 50px;
`;

const FirstSituationContainer = styled.View`
  flex-direction: row;
  align-items: stretch;
`;

const FirstTextContainer = styled.View`
  background-color: #ffffff;
  border: 1px solid #d3d3e8;
  border-radius: 3px;
  width: ${screenWidth * 0.4 - 20}px;
  padding: 7px;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
`;

const TextContainer = styled.View`
  background-color: #ffffff;
  border: 1px solid #d3d3e8;
  border-radius: 3px;
  margin-left: 10px;
  margin-vertical: 10px;
  padding: 10px;
  width: ${screenWidth * 0.77 - 20}px;
`;

const TextEmotion = styled(P)`
  text-align: center;
`;

export const Explications = ({ navigation, emotion, answersRiskSituations }) => (
  <WrapperContainer
    onPressBackButton={navigation.goBack}
    noPaddingHorizontal
    title="Aller plus loin pour maintenir ma motivation ">
    <PaddingContainer>
      <Element
        content={
          <>
            <TextStyled>
              Nous allons nous pencher sur les raisons qui vous poussent à consommer. {'\n\n'}
              <TextStyled bold>C’est humain de perdre en motivation</TextStyled>, et nous allons vous donner des{' '}
              <TextStyled bold>conseils</TextStyled> pour continuer votre démarche de réduction. {'\n\n'}
              Pour personnaliser cet exercice, nous reprenons <TextStyled bold>votre situation du défi 2</TextStyled> :
            </TextStyled>
          </>
        }
      />
    </PaddingContainer>

    <SituationContainer>
      <H2 color="#4030a5">Ma situation la plus facile à changer</H2>
      <Spacer size={10} />
      <FirstSituationContainer>
        <FirstTextContainer>
          <P noMarginBottom>{answersRiskSituations[0]?.content}</P>
        </FirstTextContainer>
        <Spacer size={10} />
        <FirstTextContainer>
          <TextEmotion noMarginBottom>Et je bois pour :</TextEmotion>
          <Spacer size={10} />
          {emotion?.iconBilan}
          <Spacer size={10} />
          <TextEmotion noMarginBottom color="#4030A5">
            {emotion?.description}
          </TextEmotion>
        </FirstTextContainer>
      </FirstSituationContainer>
    </SituationContainer>

    <PaddingContainer>
      <Element
        content={
          <>
            <TextStyled>
              Les chercheurs ont étudié les raisons de consommer et ont avancé l’hypothèse que{' '}
              <TextStyled bold>nous buvons de l’alcool pour obtenir des effets spécifiques</TextStyled>, qui peuvent se
              classer selon deux dimensions : {'\n\n'}
            </TextStyled>
            <BulletPoint>
              <TextStyled>
                {'\u2022'} <TextStyled bold>l’état émotionnel</TextStyled> (positif ou négatif)
              </TextStyled>
            </BulletPoint>
            <BulletPoint>
              <TextStyled>
                {'\u2022'} <TextStyled bold>la situation</TextStyled> (intérieure ou extérieure)
              </TextStyled>
            </BulletPoint>
          </>
        }
      />
      <ButtonPrimaryStyled
        content="Je découvre les conseils"
        widthSmall
        onPress={() => navigation.navigate('CONSEILS')}
      />
    </PaddingContainer>
  </WrapperContainer>
);

export const Conseils = ({ navigation, emotion, situationText, answersRiskSituations, conseil }) => (
  <WrapperContainer
    onPressBackButton={navigation.goBack}
    noPaddingHorizontal
    title="Aller plus loin pour maintenir ma motivation ">
    <SituationContainer>
      <H2 color="#4030a5">Ma situation la plus facile à changer</H2>
      <Spacer size={10} />
      <FirstSituationContainer>
        <FirstTextContainer>
          <P noMarginBottom>{answersRiskSituations[0]?.content}</P>
        </FirstTextContainer>
        <Spacer size={10} />
        <FirstTextContainer>
          <TextEmotion noMarginBottom>Et je bois pour :</TextEmotion>
          <Spacer size={10} />
          {emotion?.iconBilan}
          <Spacer size={10} />
          <TextEmotion noMarginBottom color="#4030A5">
            {emotion?.description}
          </TextEmotion>
        </FirstTextContainer>
      </FirstSituationContainer>

      <ArrowContainer>
        <ArrowEmotion />
        <ArrowEmotion />
      </ArrowContainer>

      <FirstSituationContainer>
        <FirstTextContainer>
          <Spacer size={10} />
          <TextStyled>{situationText}</TextStyled>
          <Spacer size={10} />
        </FirstTextContainer>
        <Spacer size={10} />
        <FirstTextContainer>
          <Spacer size={10} />
          <TextStyled>
            {emotion?.value === 2
              ? 'C’est une émotion positive (traduisant de la joie)'
              : 'C’est une émotion négative (traduisant de la peur)'}
          </TextStyled>
          <Spacer size={10} />
        </FirstTextContainer>
      </FirstSituationContainer>
    </SituationContainer>

    <PaddingContainer>
      <TextStyled bold color="#4030A5">
        Ma raison de consommer{'\n'}
      </TextStyled>
      <TextStyled>
        {conseil} {'\n\n'}
      </TextStyled>
      <TextStyled bold color="#DE285E">
        Le conseil d’Oz Ensemble{'\n'}
      </TextStyled>
      <TextStyled>
        Si l’alcool peut aider à gérer la tristesse ou la colère, il désinhibe et exacerbe également ces émotions
        lorsque l’on devient ivre. Rappelez-vous que le verre qui vous aide à tenir au départ peut vous pousser aussi à
        dire des choses à votre entourage que vous regretterez par la suite. Voire même ne pas vous en souvenir !{' '}
        {'\n\n\n'}
        Si votre entourage vous fait du mal, dites-le leur simplement et calmez-vous autrement en vous isolant un temps
        ou en parlant à une personne de confiance. Prenez le temps de parler des sujets qui fâchent quand vous êtes
        apaisé et sobre.{'\n\n'}
      </TextStyled>

      <TouchableOpacity onPress={() => navigation.navigate('CONTACT')}>
        <TextStyled bold>
          Si ces sujets sont trop difficiles à aborder seul, les conseils d’un{' '}
          <TextStyled bold underline color="#4030A5">
            psychologue
          </TextStyled>{' '}
          pourraient vous aider à gérer ces problèmes relationnels mieux que l’alcool.{'\n\n\n'}
        </TextStyled>
      </TouchableOpacity>

      <ButtonPrimaryStyled content="J’ai compris" widthSmall onPress={() => navigation.navigate('DEFI3_MENU')} />
    </PaddingContainer>
  </WrapperContainer>
);
