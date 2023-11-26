import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import MapView, { MapMarker, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Octicons';
import { CommuteRoute } from '../app/App';
import style from './style';

function Maps(props) {
  const markerRef = useRef<MapMarker | Animated.LegacyRef<MapMarker>>();
  const map = useRef<MapView>();

  const { to, from }: CommuteRoute = props.route;
  useEffect(() => {
    if (!from?.selected) {
      return;
    }
    if (map) {
      map.current.animateCamera({
        center: {
          latitude: from.coordinate.lat,
          longitude: from.coordinate.lng,
        },
      });
    }
  }, [to, from]);

  return (
    <MapView
      ref={(current) => (map.current = current)}
      provider={PROVIDER_GOOGLE}
      style={style.mapView}
      initialRegion={initialRegion}
    >
      {from && (
        <Marker.Animated
          ref={(marker) => {
            markerRef.current = marker;
          }}
          coordinate={{
            latitude: from?.coordinate?.lat ?? 25.187655,
            longitude: from?.coordinate?.lng ?? 55.264528,
          }}
          tracksViewChanges={true}
          icon={Icon.getImageSourceSync('dot', 50, 'blue')}
        />
      )}

      {to && (
        <Marker.Animated
          coordinate={{
            latitude: to?.coordinate?.lat ?? 25.187655,
            longitude: to?.coordinate?.lng ?? 55.264528,
          }}
          tracksViewChanges={true}
          icon={Icon.getImageSourceSync('location', 50, 'blue')}
        />
      )}
    </MapView>
  );
}

const initialRegion = {
  latitude: 25.187655,
  longitude: 55.264528,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
export default Maps;
