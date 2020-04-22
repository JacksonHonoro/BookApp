import React from 'react';
import {View} from 'react-native';

import Background from '../../component/Background';
import {useSelector} from 'react-redux';

import {Container} from './styles';

export default function SingleBook() {
  const infoBook = useSelector((state) => state.saveInfoBook[0]);

  return (
    <Background>
      <Container>
        <View />
      </Container>
    </Background>
  );
}
