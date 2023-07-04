import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
  background-color: #9dbcd0;
`;

export const ItemView = styled.View`
  padding: 20px;
  margin: 16px 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-width: 5px;
  background-color: pink;
`;

export const TempText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const StyledImage = styled.Image``;
