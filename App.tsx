import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import CurrentWeather from './src/components/current-weather';
import UpcomingWeather from './src/components/upcoming-weather';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {/* <CurrentWeather /> */}
        <UpcomingWeather />
      </View>
    </NavigationContainer>
  );
};

export default App;
