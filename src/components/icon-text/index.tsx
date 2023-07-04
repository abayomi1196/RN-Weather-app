import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Wrapper, TextTheme } from './styles';

type Props = {
  iconName: string;
  iconColor: string;
  bodyText: string;
  bodyTextStyles: StyleProp<TextStyle>;
};

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }: Props) => (
  <Wrapper>
    <Icon size={50} name={iconName} color={iconColor} />
    <TextTheme style={bodyTextStyles}>{bodyText}</TextTheme>
  </Wrapper>
);

export default IconText;
