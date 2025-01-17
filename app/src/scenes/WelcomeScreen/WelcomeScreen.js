import React, { useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import Background from '../../components/Background';
import ButtonPrimary from '../../components/ButtonPrimary';
import HeaderBackground from '../../components/HeaderBackground';
import Dot from '../../components/SwiperDot';
import { screenHeight } from '../../styles/theme';
import { Screen1, Screen2, Screen3 } from './Screens';
import { storage } from '../../services/storage';
import { showBootSplashState } from '../../components/CustomBootsplash';

const WelcomeScreen = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pagination, setPagination] = useState(true);
  const swiperRef = useRef();
  const setShowBootsplash = useSetRecoilState(showBootSplashState);

  const indexChanged = (index) => {
    setCurrentIndex(index);
    if (index === 2) {
      setPagination(false);
    } else {
      setPagination(true);
    }
  };

  const onStartPress = async () => {
    storage.set('@OnboardingDoneWithCGU', true);
    // RNBootSplash.show;
    setShowBootsplash(true);
    await new Promise((res) => setTimeout(res, 250));
    navigation.navigate('TABS');
    await new Promise((res) => setTimeout(res, 750));
    // RNBootSplash.hide({ fade: true });
    setShowBootsplash(false);
  };

  const onPressNext = () => swiperRef?.current?.scrollBy(1);

  return (
    <Background color="#39cec0" withSwiperContainer neverBottom>
      <HeaderBackground />
      <Swiper
        onIndexChanged={indexChanged}
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        showsPagination={pagination}
        dot={<Dot />}
        activeDot={<Dot active />}
        // nextButton={<StyledArrowRight size={15} />}
        // prevButton={<StyledArrowLeft size={15} />}
        // eslint-disable-next-line react-native/no-inline-styles
        paginationStyle={{
          justifyContent: 'center',
          bottom: screenHeight * 0.05,
        }}>
        <Screen1 />
        <Screen2 />
        <Screen3 setAgreed={setAgreed} agreed={agreed} />
      </Swiper>
      <CTAButtonContainer>
        {currentIndex === 2 ? (
          <ButtonPrimary content="Commencer" onPress={onStartPress} disabled={!agreed} />
        ) : (
          <ButtonPrimary content="Suivant" onPress={onPressNext} />
        )}
      </CTAButtonContainer>
    </Background>
  );
};

export default WelcomeScreen;

const CTAButtonContainer = styled.View`
  height: ${screenHeight * 0.15}px;
  align-items: center;
  background-color: #f9f9f9;
  flex-shrink: 1;
`;

// const StyledArrowRight = styled(ArrowRight)`
//   margin-top: 50px;
// `;

// const StyledArrowLeft = styled(ArrowLeft)`
//   margin-top: 50px;
// `;
