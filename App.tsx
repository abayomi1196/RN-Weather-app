import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { CityDetails } from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <CityDetails />
      </View>
    </NavigationContainer>
  );
};

export default App;
