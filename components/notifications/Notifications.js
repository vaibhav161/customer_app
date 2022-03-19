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
const Notifications = ({navigation}) => {
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
        Today
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
                source={require('../../assets/ellipse1.png')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{width: 200}}>
              <Text style={{color: 'white'}}>Get 10% off on Nike Cap</Text>
              <Text style={{color: 'white'}}>
                The offer is valid for next 5 days better hurry up before it
                ends.
              </Text>
              <Text style={{color: 'darkgrey', marginTop: 10}}>
                20 mins ago
              </Text>
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
              <Image
                source={require('../../assets/ellipse2.png')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{width: 200}}>
              <Text style={{color: 'white'}}>Get 10% off on Honey Cap</Text>
              <Text style={{color: 'white'}}>
                The offer is valid for next 5 days better hurry up before it
                ends.
              </Text>
              <Text style={{color: 'darkgrey', marginTop: 10}}>
                25 mins ago
              </Text>
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
              <Image
                source={require('../../assets/ellipse3.png')}
                style={styles.socialMedia}
              />
            </View>
            <View style={{width: 200}}>
              <Text style={{color: 'white'}}>Get 10% off on Nike Gloves</Text>
              <Text style={{color: 'white'}}>
                The offer is valid for next 5 days better hurry up before it
                ends.
              </Text>
              <Text style={{color: 'darkgrey', marginTop: 10}}>
                30 mins ago
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

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
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
