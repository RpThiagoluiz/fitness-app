import { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { fakeExercisesData } from 'src/mocks/fakeExercisesData';
import { Divider } from '@components/Divider';
import { ExerciseCard } from '@components/ExerciseCard';
import { LoadingMoreItens } from '../LoadingMoreItens';
import { DividerWrapper } from './styles';

export const ExerciseList = () => {
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
    <FlatList
      ListHeaderComponent={<Text>TODO HEADER</Text>}
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
  );
};
