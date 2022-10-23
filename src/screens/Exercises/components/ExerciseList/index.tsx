import { FlatList, Text } from 'react-native';
import { Divider } from '@components/Divider';
import { ExerciseCard } from '@components/ExerciseCard';
import { LoadingMoreItens } from '../LoadingMoreItens';
import { DividerWrapper } from './styles';
import { useManageExercises } from '@screens/Exercises/hooks/useManageExercises';
import { useInfinityScrollExercises } from '@screens/Exercises/hooks/useInfinityScrollExercises';

export const ExerciseList = () => {
  const { filterByBodyPart } = useManageExercises();
  const { filteredData, flatListonEndReached, loading } =
    useInfinityScrollExercises(filterByBodyPart);

  return (
    <FlatList
      ListHeaderComponent={<Text>TODO HEADER</Text>}
      data={filteredData}
      renderItem={({ item }) => <ExerciseCard data={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        marginBottom: 50,
      }}
      ItemSeparatorComponent={() => (
        <DividerWrapper>
          <Divider color="primary" size="small" />
        </DividerWrapper>
      )}
      onEndReached={flatListonEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading ? <LoadingMoreItens /> : null}
    />
  );
};
