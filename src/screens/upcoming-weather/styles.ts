import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
  background-color: #9dbcd0;
`;
