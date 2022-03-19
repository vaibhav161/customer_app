import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const UpdatePhoneNumber = () => {
  return (
    <View
      style={{
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
      }}>
      <Text style={{marginTop: 25, color: 'white', fontSize: 12}}>
        Email Address
      </Text>
      <TextInput
        keyboardType="default"
        placeholderTextColor="grey"
        style={styles.fullName}
        placeholder="Email Address"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullName: {
    borderBottomWidth: 0.5,
    padding: 5,
    width: '100%',
    color: 'white',
    borderBottomColor: 'white',
    textAlign: 'left',
  },
});

export default UpdatePhoneNumber;
