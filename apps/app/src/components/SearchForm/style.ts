import { StyleSheet } from 'react-native';

export const formInputStyle = {
  container: {
    backgroundColor: 'white',
    padding: 20,
    position: 'relative',
    width: '80%',
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
  fromSearchBox: {
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D7D7',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ToSearchBox: {
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
