import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Login from './components/login-signup/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './components/login-signup/Signup';
import BottomTabs from './components/navigation/BottomTabs';
import SelectedCategory from './components/category/SelectedCategory';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import Notifications from './components/notifications/Notifications';
import Settings from './components/profile/Settings';
import PersonalInfo from './components/profile/PersonalInformation';
import Paid from './components/profile/Paid';
import Received from './components/profile/Received';
import Returned from './components/profile/Returned';
import Reviewed from './components/profile/Reviewed';
// import GoLive from './components/home/GoLive';
// import Chat from './components/home/ChatRoom';
import {TouchableOpacity} from 'react-native';
import UpdatePhoneNumber from './components/profile/UpdatePhoneNumber';
import UpdateEmailAddress from './components/profile/UpdateEmailAddress';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Live"
          component={GoLive}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen name="Chat" component={Chat} /> */}
        <Stack.Screen
          name="selectedCategory"
          component={SelectedCategory}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>Sellers</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="settings"
          component={Settings}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>Settings</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="updateEmail"
          component={UpdateEmailAddress}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>
                  Update Email Address
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="updatePhone"
          component={UpdatePhoneNumber}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>
                  Update Phone Number
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="personalinfo"
          component={PersonalInfo}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>
                  Personal Information
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="paid"
          component={Paid}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>Paid</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="received"
          component={Received}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>Received</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="returned"
          component={Returned}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>Returned</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="reviewed"
          component={Reviewed}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>Reviewed</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="notifications"
          component={Notifications}
          options={{
            headerBackVisible: false,

            headerStyle: {
              backgroundColor: '#252B39',
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '93%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Image source={require('./assets/arrow_back_24px.png')} />
                <Text style={{color: 'white', fontSize: 17}}>
                  Notifications
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('notifications')}>
                  <Image source={require('./assets/bell.png')} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// "agora-react-native-rtm": "^1.4.8",
// "react-native-agora": "^3.5.1",
//  "agora-rn-uikit": "^3.3.0",
