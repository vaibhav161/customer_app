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
const SelectedCategory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <Text
        style={{
          textAlign: 'center',
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'white',
          marginTop: 10,
        }}>
        Showing Sellers selling products related to Sports
      </Text>
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
                source={require('../../assets/demo_profile.png')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{marginRight: 50}}>
              <Text style={{color: 'white'}}>Saurav Sinha</Text>
              <Text style={{color: 'darkgrey'}}>+91 8899765431</Text>
            </View>
            <View>
              {/* <Ionicons name="settings" size={30} color="white" />
               */}
              {/* <Image source={require('../../assets/settings.png')} /> */}
              <TouchableOpacity>
                <Text
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    textAlign: 'center',
                    borderColor: '#339AF7',
                    color: '#339AF7',
                    borderRadius: 5,
                  }}>
                  + Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', padding: 10, fontSize: 11}}>
              Selling 23 Products out of which 09 are related to Sports
            </Text>
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
            <View>
              <Image
                source={require('../../assets/demo_profile2.png')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{marginRight: 50}}>
              <Text style={{color: 'white'}}>Volutpat Eleifend</Text>
              <Text style={{color: 'darkgrey'}}>+91 8693899765</Text>
            </View>
            <View>
              {/* <Ionicons name="settings" size={30} color="white" />
               */}
              {/* <Image source={require('../../assets/settings.png')} /> */}
              <TouchableOpacity>
                <Text
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    textAlign: 'center',
                    borderColor: '#339AF7',
                    color: '#339AF7',
                    borderRadius: 5,
                  }}>
                  + Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', padding: 10, fontSize: 11}}>
              Selling 23 Products out of which 09 are related to Sports
            </Text>
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
            <View>
              <Image
                source={require('../../assets/demo_profile3.png')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{marginRight: 50}}>
              <Text style={{color: 'white'}}>Malesuada Mus</Text>
              <Text style={{color: 'darkgrey'}}>+91 6394899765</Text>
            </View>
            <View>
              {/* <Ionicons name="settings" size={30} color="white" />
               */}
              {/* <Image source={require('../../assets/settings.png')} /> */}
              <TouchableOpacity>
                <Text
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    textAlign: 'center',
                    borderColor: '#339AF7',
                    color: '#339AF7',
                    borderRadius: 5,
                  }}>
                  + Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', padding: 10, fontSize: 11}}>
              Selling 23 Products out of which 09 are related to Sports
            </Text>
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
            <View>
              <Image
                source={require('../../assets/dummy.jpeg')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{marginRight: 50}}>
              <Text style={{color: 'white'}}>Quam Turpis</Text>
              <Text style={{color: 'darkgrey'}}>+91 8197655431</Text>
            </View>
            <View>
              {/* <Ionicons name="settings" size={30} color="white" />
               */}
              {/* <Image source={require('../../assets/settings.png')} /> */}
              <TouchableOpacity>
                <Text
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    textAlign: 'center',
                    borderColor: '#339AF7',
                    color: '#339AF7',
                    borderRadius: 5,
                  }}>
                  + Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', padding: 10, fontSize: 11}}>
              Selling 23 Products out of which 09 are related to Sports
            </Text>
            <Image source={require('../../assets/chevron_right_24px.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectedCategory;

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
