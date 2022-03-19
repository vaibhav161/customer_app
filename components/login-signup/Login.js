import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Login = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('🇮🇳+91');
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  //User Interface
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <Text style={styles.loginHeader}>Login</Text>
      <Picker
        style={{display: 'none'}}
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="🇮🇳 +91" value="🇮🇳+91" />
        <Picker.Item label="🇨🇦 +1" value="🇨🇦+1" />
      </Picker>

      <View style={styles.loginForm}>
        <Text style={{color: '#339AF7', fontSize: 18}}>Mobile Number</Text>
        <View style={styles.mobileInfoStyle}>
          <TouchableOpacity onPress={open}>
            <Text style={styles.countryCode}>{selectedLanguage}</Text>
          </TouchableOpacity>
          <TextInput keyboardType="numeric" style={styles.mobileNumber} />
        </View>
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
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Tabs')}>
        <Text style={styles.text}>Get OTP</Text>
      </TouchableOpacity>
      <View style={styles.dividerStyles}>
        <View style={styles.divider} />
        <Text style={{color: 'white'}}>Or Login With</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.otherLogins}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/fb.png')}
            style={styles.socialMedia}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/insta.png')}
            style={styles.socialMedia}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/snapchat.png')}
            style={styles.socialMedia}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/gplus.png')}
            style={styles.socialMedia}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.newCustomerBg}
        onPress={() => navigation.navigate('Signup')}>
        <View>
          <Text style={styles.newCustomer}>New Customer</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

//Styles
const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
    alignItems: 'center',
  },
  loginHeader: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
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
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: '90%',
    backgroundColor: '#339AF7',
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  dividerStyles: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 0.5,
    height: '1%',
    width: '35%',
    borderBottomColor: 'white',
  },
  otherLogins: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialMedia: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  countryCode: {
    borderBottomWidth: 0.5,
    padding: 10,
    width: 80,
    color: 'white',
    borderBottomColor: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  mobileNumber: {
    borderBottomWidth: 0.5,
    padding: 10,
    width: '70%',
    color: 'white',
    borderBottomColor: 'white',
    textAlign: 'center',
  },
  mobileInfoStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 10,
    alignItems: 'flex-start',
  },
  otpNum: {
    borderBottomWidth: 0.5,
    padding: 10,
    width: '10%',
    color: 'white',
    borderBottomColor: 'white',
  },
  newCustomer: {
    color: 'white',
    fontSize: 18,
  },

  newCustomerBg: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    width: '90%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
