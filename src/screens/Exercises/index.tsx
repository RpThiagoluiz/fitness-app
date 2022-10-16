import { ExerciseCard } from '@components/ExerciseCard';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import { fakeExercisesData } from 'src/mocks/fakeExercisesData';
import { Container } from './styles';

export const Exercises = ({}: RootTabScreenProps<'Exercises'>) => {
  const filterByName = (name: string) => {
    fakeExercisesData.filter((exercise) => {
      if (exercise.name === name) {
        console.log(exercise);
      }
    });
  };

  console.log({ Juvenal: filterByName('deep push up') });

  return (
    <Container>
      <ExerciseCard data={fakeExercisesData[0]} />
    </Container>
  );
};
