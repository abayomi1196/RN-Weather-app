import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import CurrentWeather from './src/components/current-weather';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <CurrentWeather />
      </View>
    </NavigationContainer>
  );
};

export default App;
