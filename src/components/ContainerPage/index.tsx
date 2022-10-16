import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export const ContainerPage = ({ children }: Props) => (
  <Container>{children}</Container>
);
