import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonalInfo = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <View
        style={{
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 15,
        }}>
        <Text style={{color: 'white', marginBottom: 3}}>Srinivas Lak</Text>
        <Text style={{color: 'darkgrey', fontSize: 11, marginBottom: 3}}>
          sri.lak@gmail.com
        </Text>
        <Text style={{color: 'darkgrey', fontSize: 11}}>+91 9876543210</Text>
      </View>
      <View
        style={{
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 15,
        }}>
        <Text style={{color: 'darkgrey', marginTop: 20}}>
          PERSONAL INFORMATION
        </Text>
        <Text style={{marginTop: 25, color: 'white', fontSize: 12}}>
          First Name
        </Text>
        <TextInput
          keyboardType="default"
          placeholderTextColor="grey"
          style={styles.fullName}
          placeholder="First Name"
        />
        <Text style={{marginTop: 20, color: 'white', fontSize: 12}}>
          Last Name
        </Text>
        <TextInput
          keyboardType="default"
          placeholderTextColor="grey"
          style={styles.fullName}
          placeholder="Last Name"
        />
      </View>
      <View style={styles.profileCard}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('updateEmail')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/msg.png')}
              style={{width: 16}}
            />
            <Text style={styles.lastSection}>Update Email Address</Text>
          </TouchableOpacity>
          <Image source={require('../../assets/chevron_right_24px.png')} />
        </View>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('updatePhone')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/phone.png')}
              style={{width: 16}}
            />
            <Text style={styles.lastSection}>Update Phone Number</Text>
          </TouchableOpacity>
          <Image source={require('../../assets/chevron_right_24px.png')} />
        </View>
      </View>
      <TouchableOpacity style={styles.saveChanges}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Save Changes
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
  },
  divider: {
    borderBottomWidth: 0.5,
    height: '1%',
    borderBottomColor: 'white',
    marginBottom: 11,
  },
  profileCard: {
    width: '85%',
    backgroundColor: '#252B39',
    marginTop: 50,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 23,
  },
  saveChanges: {
    width: '85%',
    backgroundColor: '#252B39',
    marginTop: 50,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 23,
    backgroundColor: '#339AF7',
  },
  fullName: {
    borderBottomWidth: 0.5,
    padding: 5,
    width: '100%',
    color: 'white',
    borderBottomColor: 'white',
    textAlign: 'left',
  },
  myOrders: {
    width: 25,
    height: 25,
  },
  lastSection: {
    color: 'white',
    marginLeft: 8,
  },

  socialMedia: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
