import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ItemView, DateText, TempText } from './styles';

type ItemProps = {
  dt_text: string;
  min: number;
  max: number;
  condition: string;
};

const ListItem = ({ dt_text, min, max, condition }: ItemProps) => (
  <ItemView>
    <Icon name="sun" size={50} color={'white'} />
    <DateText>{dt_text}</DateText>
    <TempText>{min}</TempText>
    <TempText>{max}</TempText>
    <Text>{condition}</Text>
  </ItemView>
);

export default ListItem;
