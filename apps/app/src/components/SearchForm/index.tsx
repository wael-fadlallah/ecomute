import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles, { formInputStyle } from './style';
import Config from 'react-native-config'
import Icon from 'react-native-vector-icons/Octicons';
import {CommuteRoute} from '../../app/App';

const autocompleteConfig = {
  key: Config.GOOGLE_MAPS_API_KEY,
  language: 'en',
};


const SearchForm = ({onFormChange}) => {

  const onPress = (data, details = null, type = 'from') => {
    onFormChange((prev: CommuteRoute) => {
      return {
        ...prev,
        [type]: {
          name: data.description,
          selected: true,
          coordinate: { ...details.geometry.location },
        },
      };
    });
  };
  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <View style={styles.fromSearchBox}>
        <GooglePlacesAutocomplete
          placeholder="From"
          fetchDetails={true}
          onPress={(data, details) => onPress(data, details, 'from')}
          query={autocompleteConfig}
          suppressDefaultStyles={true}
          enablePoweredByContainer={false}
          styles={formInputStyle}
        />
        <InputIcon type='dot' />
      </View>
      <View style={styles.ToSearchBox}>
        <GooglePlacesAutocomplete
          placeholder="To"
          fetchDetails={true}
          onPress={(data, details) => onPress(data, details, 'to')}
          query={autocompleteConfig}
          suppressDefaultStyles={true}
          enablePoweredByContainer={false}
          styles={formInputStyle}
        />
        <InputIcon type='location' />
      </View>
    </View>
  );
}

const InputIcon = (props) => {
  const {type} = props;

  return <View style={{justifyContent: 'center'}}>
    <Icon name={type} size={30} color='blue'/>
  </View>
};

export default SearchForm;
