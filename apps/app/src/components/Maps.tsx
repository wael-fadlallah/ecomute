import React from 'react';
import { SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function Maps() {
  console.log('Maps.tsx');
  return (
    <SafeAreaView>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        initialRegion={{
          latitude: 25.187655,
          longitude: 55.264528,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
}

export default Maps;
