import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
`;

export const NameText = styled.Text`
  justify-content: center;
  align-self: center;
  font-weight: bold;
  color: #fff;
`;

export const CityNameText = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

export const CountryNameText = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const RiseSetWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;
