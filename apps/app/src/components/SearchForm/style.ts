import { StyleSheet } from 'react-native';

export const formInputStyle = {
  container: {
    backgroundColor: 'white',
    padding: 20,
    position: 'relative',
  },
  listView: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '290%',
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  row: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    backgroundColor: '#FFFFFF',
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
};
export default StyleSheet.create({
  fromSearchBox: {position: 'relative', zIndex: 1000},
  ToSearchBox: {position: 'relative', zIndex: 1},
});
