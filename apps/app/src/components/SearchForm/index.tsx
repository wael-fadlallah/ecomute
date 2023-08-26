import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

function SearchForm() {
  return (
    <View style={{ margin: 10 }}>
      <TextInput
        label="Home Address"
        style={{ borderTopEndRadius: 20, borderTopStartRadius: 20 }}
        underlineColor="#808080"
        activeUnderlineColor="#808080"
      />
      <TextInput
        label="Office Address"
        style={{
          borderTopEndRadius: 0,
          borderTopStartRadius: 0,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
        }}
        underlineStyle={{ opacity: 0 }}
      />
    </View>
  );
}

export default SearchForm;
