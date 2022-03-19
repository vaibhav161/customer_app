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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <ScrollView>
        <View style={styles.profileCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Image
                source={require('../../assets/dummy.jpeg')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{marginRight: 50}}>
              <Text style={{color: 'white'}}>Saurav Sinha</Text>
              <Text style={{color: 'white'}}>+91 8899765431</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('settings')}>
              {/* <Ionicons name="settings" size={30} color="white" />
               */}
              <Image source={require('../../assets/settings.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 19, textAlign: 'center'}}>
                140
              </Text>
              <Text
                style={{color: 'darkgrey', fontSize: 10, textAlign: 'center'}}>
                My Wishlist
              </Text>
            </View>
            <Text style={{color: 'white'}}>|</Text>
            <View>
              <Text style={{color: 'white', fontSize: 19, textAlign: 'center'}}>
                140
              </Text>
              <Text
                style={{color: 'darkgrey', fontSize: 10, textAlign: 'center'}}>
                Followed Streams
              </Text>
            </View>
            <Text style={{color: 'white'}}>|</Text>
            <View>
              <Text style={{color: 'white', fontSize: 19, textAlign: 'center'}}>
                24K
              </Text>
              <Text
                style={{color: 'darkgrey', fontSize: 10, textAlign: 'center'}}>
                Recently Viewed
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={{color: 'white', marginBottom: 20}}>My Orders</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => navigation.navigate('paid')}>
                <View
                  style={{
                    borderColor: '#339AF7',
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 60,
                  }}>
                  <Image
                    source={require('../../assets/paid.png')}
                    style={styles.myOrders}
                  />
                </View>
              </TouchableOpacity>
              <Text style={{color: 'darkgrey'}}>Paid</Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => navigation.navigate('received')}>
                <View
                  style={{
                    borderColor: '#339AF7',
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 60,
                  }}>
                  <Image
                    source={require('../../assets/received.png')}
                    style={styles.myOrders}
                  />
                </View>
              </TouchableOpacity>
              <Text style={{color: 'darkgrey'}}>Received</Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => navigation.navigate('returned')}>
                <View
                  style={{
                    borderColor: '#339AF7',
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 60,
                  }}>
                  <Image
                    source={require('../../assets/returned.png')}
                    style={styles.myOrders}
                  />
                </View>
              </TouchableOpacity>
              <Text style={{color: 'darkgrey'}}>Returned</Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => navigation.navigate('reviewed')}>
                <View
                  style={{
                    borderColor: '#339AF7',
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 60,
                  }}>
                  <Image
                    source={require('../../assets/reviewed.png')}
                    style={styles.myOrders}
                  />
                </View>
              </TouchableOpacity>
              <Text style={{color: 'darkgrey'}}>Reviewed</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileCard}>
          <Text style={{color: 'white', marginBottom: 20}}>My Services</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/cap.png')} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/gloves.png')} />
                </View>
              </TouchableOpacity>
            </View>
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
                source={require('../../assets/address.png')}
                style={{width: 16}}
              />
              <Text style={styles.lastSection}>Address</Text>
            </View>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
          <View
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
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
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
    marginBottom: 10,
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
