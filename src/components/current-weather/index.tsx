import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Wrapper,
  DetailsView,
  TempText,
  FeelsText,
  HighLowText,
  FooterWrapper,
  FooterMessage,
  FooterDescription,
} from './styles';

const CurrentWeather = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'pink',
        flex: 1,
      }}>
      <Wrapper>
        <Icon name="sun" size={100} />
        <TempText>6</TempText>
        <FeelsText>Feels like 5</FeelsText>

        <DetailsView>
          <HighLowText>High: 8</HighLowText>
          <HighLowText>Low: 6</HighLowText>
        </DetailsView>
      </Wrapper>

      <FooterWrapper>
        <FooterDescription>It's sunny</FooterDescription>
        <FooterMessage>It's perfect t-shirt weather</FooterMessage>
      </FooterWrapper>
    </SafeAreaView>
  );
};

export default CurrentWeather;
