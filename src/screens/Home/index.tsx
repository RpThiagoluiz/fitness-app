import Logo from '@assets/images/logo.webp';
import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { ContainerGradient } from '@components/ContainerGradient';
import { useAuthStore } from 'src/store/useAuthStore';
import { Title, ImageLogo, ButtonText } from './styles';

export const Home = () => {
  const handleLogin = useAuthStore((state) => state.login);

  return (
    <ContainerGradient>
      <Title>TiF</Title>
      <ImageLogo source={Logo} />
      <ButtonTouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
        <ButtonText>ButtonText</ButtonText>
      </ButtonTouchableOpacity>
    </ContainerGradient>
  );
};
