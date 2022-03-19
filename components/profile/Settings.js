import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <ScrollView>
        <View style={styles.profileCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/address.png')}
                style={{width: 16}}
              />
              <Text style={styles.lastSection}>Address</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
          <View style={styles.divider}></View>
          <TouchableOpacity
            onPress={() => navigation.navigate('personalinfo')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/personalInfo.png')}
                style={{width: 16}}
              />
              <Text style={styles.lastSection}>Personal Information</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </TouchableOpacity>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/language.png')} />
              <Text style={styles.lastSection}>Language</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/preference.png')} />
              <Text style={styles.lastSection}>Preference theme</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
        </View>
        <View style={styles.profileCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/help.png')}
                style={{width: 16}}
              />
              <Text style={styles.lastSection}>Help</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/tnc.png')}
                style={{width: 16}}
              />
              <Text style={styles.lastSection}>Terms and Conditions</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/privacy.png')}
                style={{width: 16}}
              />
              <Text style={styles.lastSection}>Privacy Policy</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
        </View>
        <View style={styles.profileCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              {/* <Image
                source={require('../../assets/address.png')}
                style={{width: 16}}
              /> */}
              <Text style={{color: '#ff6565', marginLeft: 8}}>Sign Out</Text>
            </View>
            <Image source={require('../../assets/chevron_right_red.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

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
    marginTop: 20,
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
