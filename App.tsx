import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading';
import lightTheme from '@theme/global/lightTheme';
import { Routes } from 'src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar translucent animated backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  );
}
