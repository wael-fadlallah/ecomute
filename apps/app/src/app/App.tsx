import React from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Maps';
import SearchForm from '../components/SearchForm';
import { View } from 'tamagui';

export const App = () => {
  return (
    <View>
      <Map />
      <SearchForm />
    </View>
  );
};
const styles = StyleSheet.create({});

export default App;
