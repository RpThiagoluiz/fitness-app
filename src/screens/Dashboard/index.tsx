import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import { useAuthStore } from '@store/useAuthStore';
import { Container, Title } from './styles';

export const Dashboard = ({
  navigation: { navigate },
}: RootTabScreenProps<'Dashboard'>) => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    //Async login Logic
    logout();
    navigate('Home');
  };

  return (
    <Container>
      <ButtonTouchableOpacity activeOpacity={0.8} onPress={handleLogout}>
        <Title>Dashboard</Title>
      </ButtonTouchableOpacity>
    </Container>
  );
};
