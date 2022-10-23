import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface Props {
  screenTitle?: string;
}

export const ScreenHeader = ({ screenTitle }: Props) => {
  const { colors } = useTheme();
  return (
    <Container
      start={{ x: 0.1, y: 0.1 }}
      colors={[colors.tertiary, colors.primary]}
    >
      <Title>{screenTitle}</Title>
    </Container>
  );
};
