import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const UpdateEmailAddress = () => {
  return (
    <View style={{backgroundColor: '#252B39', flex: 1}}>
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
      <View style={styles.loginForm}>
        <Text style={{color: '#339AF7', fontSize: 18}}>
          Verify Email Address
        </Text>
        <Text style={{color: '#339AF7', fontSize: 18}}>Enter OTP</Text>
        <View style={styles.mobileInfoStyle}>
          <TextInput keyboardType="numeric" style={styles.otpNum} />
          <TextInput keyboardType="numeric" style={styles.otpNum} />
          <TextInput keyboardType="numeric" style={styles.otpNum} />
          <TextInput keyboardType="numeric" style={styles.otpNum} />
          <TextInput keyboardType="numeric" style={styles.otpNum} />
          <TextInput keyboardType="numeric" style={styles.otpNum} />
        </View>

        <Text style={{color: 'white', textAlign: 'center'}}>
          Didn't receive an OTP?
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.text}>Update Email Address</Text>
        </TouchableOpacity>
      </View>
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
  loginForm: {
    width: '90%',
    height: '37%',
    backgroundColor: '#252B39',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
});

export default UpdateEmailAddress;
