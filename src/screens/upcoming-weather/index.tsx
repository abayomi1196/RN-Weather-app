import React from 'react';
import { Text, FlatList, View, ImageBackground } from 'react-native';

import { ListItem } from '../../components';
import { Container } from './styles';

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: {
      main: 'Clear',
    },
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: {
      main: 'Clouds',
    },
  },

  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: {
      main: 'Rain',
    },
  },
];

const Empty = () => (
  <View>
    <Text>Empty list</Text>
  </View>
);

const UpcomingWeather = () => {
  return (
    <Container>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../assets/cloud-bg.jpg')}
      >
        <Text>Upcoming weather</Text>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ListItem
              dt_text={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
              condition={item.weather.main}
            />
          )}
          keyExtractor={(item) => item.dt_txt}
          ListEmptyComponent={<Empty />}
        />
      </ImageBackground>
    </Container>
  );
};

export default UpcomingWeather;
