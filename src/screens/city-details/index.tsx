import React from 'react';
import { ImageBackground } from 'react-native';

import { IconText } from '../../components';

import {
  Container,
  CityNameText,
  CountryNameText,
  RiseSetWrapper,
} from './styles';

function CityDetails() {
  return (
    <Container>
      <ImageBackground
        imageStyle={{ overlayColor: '#000' }}
        style={{ flex: 1 }}
        source={require('../../assets/lagos-bg.jpg')}
      >
        <CityNameText>Lagos</CityNameText>
        <CountryNameText>Nigeria</CountryNameText>

        <IconText
          iconColor="green"
          iconName="users"
          bodyText="213.4m"
          bodyTextStyles={{ fontSize: 25, marginLeft: 7.5, color: 'green' }}
        />

        <RiseSetWrapper>
          <IconText
            iconColor="white"
            iconName="sunrise"
            bodyText="06:30:00"
            bodyTextStyles={{ fontSize: 20, color: '#fff', fontWeight: '600' }}
          />

          <IconText
            iconColor="white"
            iconName="sunset"
            bodyText="18:02:45"
            bodyTextStyles={{ fontSize: 20, color: '#fff', fontWeight: '600' }}
          />
        </RiseSetWrapper>
      </ImageBackground>
    </Container>
  );
}

export default CityDetails;
