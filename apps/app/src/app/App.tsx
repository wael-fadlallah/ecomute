/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Map from '../components/Maps';

export const App = () => {

  return (
    <>
      <SafeAreaView>
        <Map />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({});

export default App;
