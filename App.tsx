import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Home } from '@screens/index';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}

