import React from 'react';
import { Dimensions, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function Maps() {
  console.log('Maps.tsx');
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
      }}
      initialRegion={{
        latitude: 25.187655,
        longitude: 55.264528,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

export default Maps;
