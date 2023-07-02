import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Platform, StatusBar, View, Text} from 'react-native';
import styled from 'styled-components/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          backgroundColor: 'pink',
          flex: 1,
        }}>
        <Wrapper>
          <TempText>6</TempText>
          <FeelsTex>Feels like 5</FeelsTex>

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
    </NavigationContainer>
  );
};

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const DetailsView = styled.View`
  flex-direction: row;
`;

const TempText = styled.Text`
  color: #000;
  font-size: 48px;
`;

const FeelsTex = styled.Text`
  font-size: 30px;
  color: #000;
`;

const HighLowText = styled.Text`
  color: #000;
  font-size: 20px;
`;

export const FooterWrapper = styled.View`
  justify-content: flex-end;
  align-items: flex-start;
`;

export const FooterDescription = styled.Text`
  font-size: 48px;
`;

export const FooterMessage = styled.Text`
  font-size: 30px;
`;

export default App;
