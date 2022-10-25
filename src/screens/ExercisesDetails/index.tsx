import { type ExercisesStackRoutesProps } from '@routes/ExercisesStackRoutes';
import { Container, Title } from './styles';

export function ExercisesDetails({
  route,
}: ExercisesStackRoutesProps<'ExercisesDetails'>) {
  const exercise = route.params.exercise;

  return (
    <Container>
      <Title>{exercise.name}</Title>
    </Container>
  );
}
