import Logo from '@assets/images/logo.webp';
import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { ContainerGradient } from '@components/ContainerGradient';
import React from 'react';
import { useAuthStore } from 'src/store/useAuthStore';
import { Title, ImageLogo, ButtonText } from './styles';

export const Home = () => {
  const { login } = useAuthStore();

  return (
    <ContainerGradient>
      <Title>TiF</Title>
      <ImageLogo source={Logo} />
      <ButtonTouchableOpacity activeOpacity={0.8} onPress={login}>
        <ButtonText>Entrar</ButtonText>
      </ButtonTouchableOpacity>
    </ContainerGradient>
  );
};
