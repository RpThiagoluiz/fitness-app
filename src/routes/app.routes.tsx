import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@screens/Home';
import { useAuthStore } from '@store/useAuthStore';
import { TabsRoutes } from './TabsRoutes';

export const Routes = () => {
  const { isLogged } = useAuthStore.getState();

  return (
    <NavigationContainer>
      {isLogged ? <TabsRoutes /> : <Home />}
    </NavigationContainer>
  );
};
