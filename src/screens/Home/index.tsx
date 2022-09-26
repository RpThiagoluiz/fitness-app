import { Image } from 'react-native';
import { fakeExercisesData } from 'src/mocks/fakeExercisesData';
import { Container, Title } from './styles';

export function Home() {
  const data = fakeExercisesData;

  return (
    <Container>
      <Title>Home</Title>
      <Image
        style={{ width: 300, height: 200 }}
        source={{ uri: data[0].gifUrl }}
      />
    </Container>
  );
}
