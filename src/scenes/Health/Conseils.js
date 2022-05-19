import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';
import Background from '../../components/Background';
import HeaderBackground from '../../components/HeaderBackground';
import TextStyled from '../../components/TextStyled';
import { ScreenBgStyled, TopContainer, TopSubTitle, TopTitle } from './styles';
import { listConseils } from './ListConseil';
import { screenHeight, screenWidth } from '../../styles/theme';
import AppointmentHeart from '../../components/Illustrations/AppointmentHeart';

const Conseils = ({ navigation }) => {
  return (
    <Background color="#39cec0" withSwiperContainer>
      <HeaderBackground />
      <ScreenBgStyled>
        <TopContainer>
          <TopTitle>
            <TextStyled color="#4030a5">Mes conseils</TextStyled>
          </TopTitle>
          <ViewConseilsContainer horizontal={true}>
            {listConseils.map((conseil, index) => (
              <ConseilContainer onPress={() => navigation.navigate(conseil.link)} key={index}>
                <ImageStyled source={conseil.img} />
                <TitleConseilContainer>
                  <TextStyled> {conseil.title}</TextStyled>
                </TitleConseilContainer>
              </ConseilContainer>
            ))}
          </ViewConseilsContainer>
          <TopSubTitle>
            <TextStyled color="#4030a5">Parler avec un professionnel</TextStyled>
          </TopSubTitle>
          <TopSubTitle>
            <TextStyled color="#000000">Gratuitement et anonymement</TextStyled>
          </TopSubTitle>
          <TakeAppointement onPress={() => navigation.navigate('DOCTOLIB')}>
            <IconContainer>
              <AppointmentHeart size={20} />
            </IconContainer>
            <TextContainer>
              <TextStyled> Prendre un RDV</TextStyled>
              <TextStyled> avec Doctolib</TextStyled>
            </TextContainer>
          </TakeAppointement>
        </TopContainer>
      </ScreenBgStyled>
    </Background>
  );
};

const ViewConseilsContainer = styled.ScrollView`
  margin-bottom: ${screenHeight * 0.05}px;
  margin-left: -30px;
  margin-right: -30px;
  padding-left: 30px;
`;

const ConseilContainer = styled.TouchableOpacity`
  shadow-color: #000000cc;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;
  elevation: 10;
  width: ${screenWidth * 0.4}px;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: white;
`;

const TitleConseilContainer = styled.Text`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TakeAppointement = styled.TouchableOpacity`
  margin-top: 10px;
  border: 1px solid #4030a5;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 30%;
  align-items: center;
`;

const TextContainer = styled.View`
  margin: 20px 0px 20px;
`;

const ImageStyled = styled.Image`
  width: ${screenWidth * 0.4}px;
  height: ${screenHeight * 0.15}px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export default Conseils;
