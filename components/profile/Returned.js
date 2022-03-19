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
      <ScrollView>
        <View style={styles.profileCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{color: 'white'}}>View Orders From</Text>
            </View>
            <View>
              {/* <Ionicons name="settings" size={30} color="white" />
               */}
              {/* <Image source={require('../../assets/settings.png')} /> */}
              <TouchableOpacity>
                <Text
                  style={{
                    padding: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    textAlign: 'center',
                    elevation: 3,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    color: '#339AF7',
                    borderRadius: 1,
                    fontSize: 12,
                  }}>
                  The Start
                </Text>
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
            }}>
            <View>
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 11,
                  paddingBottom: 1,
                }}>
                Order NAEDB002578435
              </Text>
              <Text
                style={{
                  padding: 10,
                  fontSize: 11,
                  paddingBottom: 1,
                  paddingTop: 1,
                  color: 'darkgrey',
                }}>
                Placed On Nov 26, 2021
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#339AF7', fontSize: 11, marginRight: 5}}>
                View Details
              </Text>
              <Image source={require('../../assets/chevron_right_24px.png')} />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <View>
              <Image source={require('../../assets/gadget.png')} />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'white', width: 200, marginBottom: 20}}>
                Galaxy Z Flip 3 5G Single SIM Phantom Bl...
              </Text>
              <Text style={{color: '#FF3131'}}>Returned</Text>
            </View>
          </View>
          <View>
            {/* <Ionicons name="settings" size={30} color="white" />
             */}
            {/* <Image source={require('../../assets/settings.png')} /> */}
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
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 11,
                  paddingBottom: 1,
                }}>
                Order NAEDB002578435
              </Text>
              <Text
                style={{
                  padding: 10,
                  fontSize: 11,
                  paddingBottom: 1,
                  paddingTop: 1,
                  color: 'darkgrey',
                }}>
                Placed On Nov 26, 2021
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#339AF7', fontSize: 11, marginRight: 5}}>
                View Details
              </Text>
              <Image source={require('../../assets/chevron_right_24px.png')} />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <View>
              <Image source={require('../../assets/gadget.png')} />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'white', width: 200, marginBottom: 20}}>
                Galaxy Z Flip 3 5G Single SIM Phantom Bl...
              </Text>
              <Text style={{color: '#FF3131'}}>Returned</Text>
            </View>
          </View>
          <View>
            {/* <Ionicons name="settings" size={30} color="white" />
             */}
            {/* <Image source={require('../../assets/settings.png')} /> */}
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
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 11,
                  paddingBottom: 1,
                }}>
                Order NAEDB002578435
              </Text>
              <Text
                style={{
                  padding: 10,
                  fontSize: 11,
                  paddingBottom: 1,
                  paddingTop: 1,
                  color: 'darkgrey',
                }}>
                Placed On Nov 26, 2021
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#339AF7', fontSize: 11, marginRight: 5}}>
                View Details
              </Text>
              <Image source={require('../../assets/chevron_right_24px.png')} />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <View>
              <Image source={require('../../assets/gadget.png')} />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'white', width: 200, marginBottom: 20}}>
                Galaxy Z Flip 3 5G Single SIM Phantom Bl...
              </Text>
              <Text style={{color: '#FF3131'}}>Returned </Text>
            </View>
          </View>
          <View>
            {/* <Ionicons name="settings" size={30} color="white" />
             */}
            {/* <Image source={require('../../assets/settings.png')} /> */}
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.text}>FILE A NEW RETURN REQUEST</Text>
        </TouchableOpacity>
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
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  profileCard: {
    width: '85%',
    backgroundColor: '#252B39',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
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

  divider: {
    borderBottomWidth: 0.5,
    height: '1%',
    borderBottomColor: 'white',
    marginBottom: 10,
    marginTop: 10,
  },
});
