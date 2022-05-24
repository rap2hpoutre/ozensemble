import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';
import pck from '../../../package.json';
import Background from '../../components/Background';
import H1 from '../../components/H1';
import HeaderBackground from '../../components/HeaderBackground';
import TextStyled from '../../components/TextStyled';
import { defaultPaddingFontScale } from '../../styles/theme';
import NPS from '../NPS/NPS';
import QuizzsNavigator from '../Quizzs/QuizzsNavigator';
import CGUs from './CGUs';
import Export from './Export';
import PrivacyPolicy from './PrivacyPolicy';
import Reminder from '../../components/Reminder';
import { reminderDefis, reminderDefisMode, reminderDefisWeekDay } from '../../recoil/reminder';
import matomo from '../../services/matomo';

const InfosStack = createStackNavigator();

const Infos = () => {
  return (
    <Background color="#39cec0" withSwiperContainer>
      <HeaderBackground />
      <InfosStack.Navigator initialRouteName="INFOS_MENU" headerMode="none">
        <InfosStack.Screen name="INFOS_MENU" component={InfosMenu} />
        <InfosStack.Screen name="DEFI_7_DAYS_REMINDER">
          {(props) => (
            <Reminder
              {...props}
              reminderState={reminderDefis}
              reminderModeState={reminderDefisMode}
              reminderWeekDayState={reminderDefisWeekDay}
            />
          )}
        </InfosStack.Screen>
        <InfosStack.Screen name="CGU">{({ navigation }) => <CGUs onClose={navigation.goBack} />}</InfosStack.Screen>
        <InfosStack.Screen name="PRIVACY_POLICY">
          {({ navigation }) => <PrivacyPolicy onClose={navigation.goBack} />}
        </InfosStack.Screen>
        <InfosStack.Screen name="EXPORT" component={Export} />
        <InfosStack.Screen name="TESTS" component={QuizzsNavigator} />
      </InfosStack.Navigator>
    </Background>
  );
};

const InfosMenu = ({ navigation }) => {
  const [NPSvisible, setNPSvisible] = useState(false);
  const onPressContribute = () => setNPSvisible(true);
  const closeNPS = () => setNPSvisible(false);

  return (
    <>
      <ScreenBgStyled>
        <NPS forceView={NPSvisible} close={closeNPS} />
        <Container>
          <TopTitle>
            <TextStyled color="#4030a5">Mes informations</TextStyled>
          </TopTitle>
          <MenuItem
            caption="Rappel de mon défi 7 jours"
            onPress={() => {
              matomo.logReminderOpen();
              navigation.push('DEFI_7_DAYS_REMINDER');
            }}
          />
          <MenuItem caption="Conditions Générales d'Utilisation" onPress={() => navigation.push('CGU')} />
          <MenuItem
            caption="Mentions Légales & Politique de Confidentialité"
            onPress={() => navigation.push('PRIVACY_POLICY')}
          />
          <MenuItem caption="Exporter mes données" onPress={() => navigation.push('EXPORT')} />
          {/* todo : open nps */}
          <MenuItem caption="Mon avis sur l'application" onPress={onPressContribute} />
          <MenuItem
            caption="Mes tests "
            onPress={() => {
              matomo.logQuizzOpen('FROM_INFOS');
              navigation.push('TESTS');
            }}
          />
          <VersionContainer>
            <VersionLabel>version {pck.version}</VersionLabel>
          </VersionContainer>
        </Container>
      </ScreenBgStyled>
    </>
  );
};

const MenuItem = ({ caption, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <MenuItemStyled>
      <Text>{caption}</Text>
      <Arrow>{'>'}</Arrow>
    </MenuItemStyled>
  </TouchableOpacity>
);

export default Infos;

const VersionContainer = styled.View`
  margin-top: 30px;
  flex: 1;
  align-items: center;
`;
const VersionLabel = styled(TextStyled)`
  color: #ddd;
`;

export const ScreenBgStyled = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

const Container = styled.View`
  padding-bottom: 100px;
`;

const MenuItemStyled = styled.View`
  height: 70px;
  border-bottom-width: 1px;
  border-bottom-color: #4030a522;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${defaultPaddingFontScale()}px;
`;

const commonCss = css`
  width: 95%;
  flex-shrink: 0;
`;

const Arrow = styled.Text`
  color: #4030a5;
  font-weight: bold;
`;

const TopTitle = styled(H1)`
  ${commonCss}
  padding-horizontal: ${defaultPaddingFontScale()}px;
  padding-top: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
