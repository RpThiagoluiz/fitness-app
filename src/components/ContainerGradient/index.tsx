import { useTheme } from 'styled-components';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export function ContainerGradient({ children }: Props) {
  const { colors } = useTheme();

  return (
    <Container
      start={{ x: 0.1, y: 0.2 }}
      colors={[
        colors.attention,
        colors.attention_light,
        colors.secondary,
        colors.secondary_light,
      ]}
    >
      {children}
    </Container>
  );
}
