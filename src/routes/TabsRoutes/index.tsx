import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '@screens/Dashboard';
import { Exercises } from '@screens/Exercises';

const Tab = createBottomTabNavigator();

export const TabsRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>
  );
};
