import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Map from '../components/Maps';
import SearchForm from '../components/SearchForm';

export const App = () => {
  return (
    <SafeAreaView>
      <Map />
      <SearchForm />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default App;
