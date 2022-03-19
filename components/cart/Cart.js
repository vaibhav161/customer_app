import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        {/* <Text style={{ color: "lightgrey" }}>Cart - Send to login</Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
  },
});
