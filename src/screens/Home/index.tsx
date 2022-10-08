import Logo from '@assets/images/logo.webp';
import { ContainerGradient } from '@components/ContainerGradient';
import { Title, ImageLogo } from './styles';

export function Home() {
  return (
    <ContainerGradient>
      <Title>TiF</Title>
      <ImageLogo source={Logo} />
    </ContainerGradient>
  );
}
