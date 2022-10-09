import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Dashboard } from '@screens/Dashboard';
import { Exercises } from '@screens/Exercises';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Exercises: undefined;
  // import { NavigatorScreenParams } from '@react-navigation/native'
  // TypeScreen: NavigatorScreenParams<TypeScreenProps>
};

export type RootTabScreenProps<T extends keyof RootStackParamList> =
  BottomTabScreenProps<RootStackParamList, T>;

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabsRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>
  );
};
