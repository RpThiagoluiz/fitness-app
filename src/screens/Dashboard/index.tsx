import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { useAuthStore } from '@store/useAuthStore';
import { Container, Title } from './styles';

export const Dashboard = () => {
  const handleLogout = useAuthStore((state) => state.logout);

  return (
    <Container>
      <ButtonTouchableOpacity activeOpacity={0.8} onPress={handleLogout}>
        <Title>Dashboard</Title>
      </ButtonTouchableOpacity>
    </Container>
  );
};
