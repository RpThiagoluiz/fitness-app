import { Divider } from '@components/Divider';
import { type ExercisesType } from '@interface/ExerciseType';
import { Container, ImageWrapper, Image, TitleWrapper, Title } from './styles';

interface Props {
  data: ExercisesType;
  onPress: (item: ExercisesType) => void;
}

export const ExerciseCard = ({ onPress, data }: Props) => {
  return (
    <Container onPress={() => onPress(data)}>
      <Divider isVertical color="primary" size="large" />
      <ImageWrapper>
        <Image key={data.id} source={{ uri: data.gifUrl }} />
      </ImageWrapper>
      <Divider isVertical size="small" />
      <TitleWrapper>
        <Title>
          Target: {data.target} - {data.name}
        </Title>
        <Title>Body part: {data.bodyPart}</Title>
      </TitleWrapper>
    </Container>
  );
};
