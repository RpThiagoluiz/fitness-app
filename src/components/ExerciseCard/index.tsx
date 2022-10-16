import { type ExercisesType } from '@interface/ExerciseType';
import { Container, ImageWrapper, Image, TitleWrapper, Title } from './styles';

interface Props {
  data: ExercisesType;
}

export const ExerciseCard = ({ data }: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image key={data.id} source={{ uri: data.gifUrl }} />
      </ImageWrapper>
      <TitleWrapper>
        <Title>
          Target: {data.target} - {data.name}
        </Title>
        <Title>Body part: {data.bodyPart}</Title>
      </TitleWrapper>
    </Container>
  );
};
