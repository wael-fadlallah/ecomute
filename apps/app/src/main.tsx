import { AppRegistry, SafeAreaView } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import App from './app/App';
import config from '../tamagui.config';

const AppWrapper = () => (
  <TamaguiProvider config={config}>
    <SafeAreaView>
      <App />
    </SafeAreaView>
  </TamaguiProvider>
);
AppRegistry.registerComponent('App', () => AppWrapper);
