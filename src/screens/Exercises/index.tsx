import { FlatList, Text } from 'react-native';
import { useState } from 'react';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import { ContainerPage } from '@components/ContainerPage';
import { ExerciseCard } from '@components/ExerciseCard';
import { Divider } from '@components/Divider';
import { LoadingMoreItens } from './components/LoadingMoreItens';
import { fakeExercisesData } from 'src/mocks/fakeExercisesData';
import { DividerWrapper } from './styles';

export const Exercises = ({}: RootTabScreenProps<'Exercises'>) => {
  const initData = fakeExercisesData.slice(0, 5);
  const [perPage, setPerPage] = useState(5);
  const [datas, setDatas] = useState(initData);
  const [loading, setLoading] = useState(false);

  const flatListonEndReached = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPerPage((prevState) => prevState + 5);
      setDatas(fakeExercisesData.slice(0, perPage));
    }, 500);
  };

  return (
    <ContainerPage hasHeader screenTitle="Exercises">
      <FlatList
        ListHeaderComponent={<Text>HEADER List</Text>}
        data={datas}
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
    </ContainerPage>
  );
};
