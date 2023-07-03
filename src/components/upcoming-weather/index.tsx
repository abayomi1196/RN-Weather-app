import React from 'react';
import { Text, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ItemView, TempText, DateText } from './styles';

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

type ItemProps = {
  dt_text: string;
  min: number;
  max: number;
  condition: string;
};

const Item = ({ dt_text, min, max, condition }: ItemProps) => (
  <ItemView>
    <Icon name="sun" size={50} color={'white'} />
    <DateText>{dt_text}</DateText>
    <TempText>{min}</TempText>
    <TempText>{max}</TempText>
    <Text>{condition}</Text>
  </ItemView>
);

const Empty = () => (
  <View>
    <Text>Empty list</Text>
  </View>
);

const UpcomingWeather = () => {
  return (
    <Container>
      <Text>Upcoming weather</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            dt_text={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
            condition={item.weather.main}
          />
        )}
        keyExtractor={(item) => item.dt_txt}
        ListEmptyComponent={<Empty />}
      />
    </Container>
  );
};

export default UpcomingWeather;
