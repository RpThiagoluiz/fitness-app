import Logo from '@assets/images/logo.webp';
import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { ContainerGradient } from '@components/ContainerGradient';
import { Title, ImageLogo, ButtonText } from './styles';

export const Home = () => {
  return (
    <ContainerGradient>
      <Title>TiF</Title>
      <ImageLogo source={Logo} />
      <ButtonTouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          console.log(`Change Route`);
        }}
      >
        <ButtonText>ButtonText</ButtonText>
      </ButtonTouchableOpacity>
    </ContainerGradient>
  );
};
