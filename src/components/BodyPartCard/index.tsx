import React from 'react';

import { Container, Title } from './styles';

interface Props {
  bodyPart: string;
}

export const BodyPartCard = ({ bodyPart }: Props) => {
  return (
    <Container>
      <Title>{bodyPart}</Title>
    </Container>
  );
};
