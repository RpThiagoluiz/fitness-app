import { ContainerPage } from '@components/ContainerPage';
import { ExerciseCard } from '@components/ExerciseCard';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import { fakeExercisesData } from 'src/mocks/fakeExercisesData';
import { Container } from './styles';

export const Exercises = ({}: RootTabScreenProps<'Exercises'>) => {
  return (
    <ContainerPage hasHeader screenTitle="Exercises">
      <ExerciseCard data={fakeExercisesData[0]} />
    </ContainerPage>
  );
};
