import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import Reminder from '../../components/Reminder';
import { reminderGain, reminderGainMode, reminderGainWeekDay } from '../../recoil/reminder';
import matomo from '../../services/matomo';

const GainsReminder = ({ navigation, route }) => (
  <Reminder
    navigation={navigation}
    route={route}
    reminderState={reminderGain}
    reminderModeState={reminderGainMode}
    name="GAINS_REMINDER"
    onSetReminderConfirm={(reminder, mode, weekDay) => {
      matomo.logReminderSetMode(mode);
      matomo.logReminderSet(reminder);
    }}
    reminderWeekDayState={reminderGainWeekDay}>
    {({ reminder, mode, weekDay }) => {
      return (
        <>
          <Container>
            {dayjs(reminder).isValid() ? (
              <>
                <SubTitle color="#191919">Pour un meilleur suivi, un rappel est programmé : </SubTitle>
                <Title color="#4030a5">
                  {mode === 'day' ? 'TOUS LES JOURS' : `TOUS LES ${dayjs().day(weekDay).format('dddd').toUpperCase()}S`}
                  {'\n'}À {dayjs(reminder).format('HH:mm')}
                </Title>
              </>
            ) : (
              <>
                <Title color="#4030a5">
                  Un rappel permet de remplir plus souvent l'application et obtenir des résultats plus efficaces
                </Title>
                <SubTitle color="#191919">
                  Définissez un rappel quotidien ou hebdomadaire sur votre téléphone pour vous rappeler
                </SubTitle>
              </>
            )}
          </Container>
        </>
      );
    }}
  </Reminder>
);

const Title = styled(H1)`
  margin-bottom: 15px;
  margin-top: 15px;
  flex-shrink: 0;
  text-align: center;
`;

const SubTitle = styled(H2)`
  margin-bottom: 15px;
  margin-top: 15px;
  flex-shrink: 0;
  text-align: center;
`;

const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
  margin-top: 20px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default GainsReminder;