import { RootTabScreenProps } from '@routes/TabsRoutes';
import { Container, Title } from './styles';

export const Exercises = ({}: RootTabScreenProps<'Exercises'>) => {
  return (
    <Container>
      <Title>Exercises</Title>
    </Container>
  );
};
