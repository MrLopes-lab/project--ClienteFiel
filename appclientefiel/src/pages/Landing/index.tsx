import React from 'react';
import { View, Text, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { Container, Banner, Title } from './styles';

import landingImg from '../../assets/images/Landing.png';
import boxIcon from '../../assets/images/icons/Box.png';
import starIcon from '../../assets/images/icons/Star.png';

const Landing: React.FC = () => {
  return (
    <>
      <Banner source={landingImg} />
      <Container>
        <Title>
          Seja bem-vindo,
          {'\n'}
          <Title>O que deseja fazer?</Title>
        </Title>

        <View>
          <RectButton>
            <Image source={boxIcon} />
            <Text>Clientes</Text>
          </RectButton>

          <RectButton>
            <Image source={starIcon} />
            <Text>Novo Cliente</Text>
          </RectButton>
        </View>
      </Container>
    </>
  );
};

export default Landing;
