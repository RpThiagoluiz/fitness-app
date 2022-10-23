import { RootTabScreenProps } from '@routes/TabsRoutes';
import { ContainerPage } from '@components/ContainerPage';
import { FilterExercises } from './components/FilterExercises';
import { ManageExercisesProvider } from './context/manageExercises';
import { ExerciseList } from './components/ExerciseList';

export const Exercises = ({}: RootTabScreenProps<'Exercises'>) => {
  return (
    <ManageExercisesProvider>
      <ContainerPage hasHeader screenTitle="Exercises">
        <FilterExercises />
        <ExerciseList />
      </ContainerPage>
    </ManageExercisesProvider>
  );
};
