import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles, { formInputStyle } from './style';
import Config from 'react-native-config'

const autocompleteConfig = {
  key: Config.GOOGLE_MAPS_API_KEY,
  language: 'en',
};

function SearchForm() {
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
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={autocompleteConfig}
          suppressDefaultStyles={true}
          enablePoweredByContainer={false}
          styles={formInputStyle}
        />
      </View>
      <View style={styles.ToSearchBox}>
        <GooglePlacesAutocomplete
          placeholder="To"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={autocompleteConfig}
          suppressDefaultStyles={true}
          enablePoweredByContainer={false}
          styles={formInputStyle}
        />
      </View>
    </View>
  );
}

export default SearchForm;
