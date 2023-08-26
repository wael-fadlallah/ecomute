import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Map from '../components/Maps';
import SearchForm from '../components/SearchForm';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export const App = () => {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView>
        <Map />
        <SearchForm />
      </SafeAreaView>
    </TamaguiProvider>
  );
};
const styles = StyleSheet.create({});

export default App;
