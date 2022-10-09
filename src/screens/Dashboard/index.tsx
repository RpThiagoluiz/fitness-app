import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import { useAuthStore } from '@store/useAuthStore';
import { Container, Title } from './styles';

export const Dashboard = ({}: RootTabScreenProps<'Dashboard'>) => {
  const { logout } = useAuthStore();

  return (
    <Container>
      <ButtonTouchableOpacity activeOpacity={0.8} onPress={logout}>
        <Title>Dashboard</Title>
      </ButtonTouchableOpacity>
    </Container>
  );
};
