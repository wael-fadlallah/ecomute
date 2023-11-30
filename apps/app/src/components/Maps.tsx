import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import MapView, { MapMarker, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { CommuteRoute } from '../app/App';
import style from './style';
import Config from 'react-native-config';
import { getIconAsImage as icon } from '../assets/icons';

function Maps(props) {
  const fromMarkerRef = useRef<MapMarker | Animated.LegacyRef<MapMarker>>();
  const map = useRef<MapView>();

  const { to, from }: CommuteRoute = props.route;
  useEffect(() => {
    if (!from?.selected) {
      return;
    }
    if (map) {
      map.current.fitToSuppliedMarkers(['from', 'to'], {
        edgePadding: { top: 80, right: 80, bottom: 80, left: 80 },
      });
    }
  }, [to, from]);

  const originLocation = {
    latitude: from?.coordinate?.lat ?? 25.187655,
    longitude: from?.coordinate?.lng ?? 55.264528,
  };

  const destinationLocation = {
    latitude: to?.coordinate?.lat ?? 25.187655,
    longitude: to?.coordinate?.lng ?? 55.264528,
  };

  return (
    <MapView
      ref={(current) => (map.current = current)}
      provider={PROVIDER_GOOGLE}
      style={style.mapView}
      initialRegion={initialRegion}
    >
      {from && (
        <Marker.Animated
          identifier={'from'}
          ref={(marker) => {
            fromMarkerRef.current = marker;
          }}
          coordinate={originLocation}
          tracksViewChanges={true}
          icon={icon({ type: 'warehouse', size: 30, color: 'blue', iconFamily: 'FontAwesome5' })}
        />
      )}

      {to && (
        <Marker.Animated
          identifier={'to'}
          coordinate={destinationLocation}
          tracksViewChanges={true}
        />
      )}
      <MapViewDirections
        origin={originLocation}
        destination={destinationLocation}
        apikey={Config.GOOGLE_MAPS_API_KEY}
        strokeWidth={10}
        strokeColor="hotpink"
        lineCap={'butt'}
      />
    </MapView>
  );
}

const initialRegion = {
  latitude: 25.187655,
  longitude: 55.264528,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
export default Maps;
