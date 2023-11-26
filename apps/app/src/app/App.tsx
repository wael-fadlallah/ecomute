import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Maps';
import SearchForm from '../components/SearchForm';
import { View } from 'tamagui';

type Location = {
  name: string;
  selected: string;
  coordinate: {
    lat: number,
    lng: number
  }
};
export type CommuteRoute = {
  from: Location | undefined;
  to: Location | undefined;
};
export const App = () => {
  const [commuteRoute, setCommuteRoute] = useState<CommuteRoute>({from: undefined, to: undefined});
  return (
    <View>
      <Map route={commuteRoute}/>
      <SearchForm onFormChange={setCommuteRoute} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default App;
