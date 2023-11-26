import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },
});
