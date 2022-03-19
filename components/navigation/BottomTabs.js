import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Icon} from 'react-native-elements';
import Profile from '../profile/Profile';
import Category from '../category/Category';
import Cart from '../cart/Cart';
import Search from '../search/Search';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';

const BottomTabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#252B39'},
      })}>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerStyle: {
            backgroundColor: '#252B39',
          },
          tabBarActiveTintColor: 'white',
          headerTitleStyle: {color: 'white'},
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 3,
                alignItems: 'center',
              }}>
              {/* <Icon
                style={{fontSize: 17}}
                color="white"
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => navigation.goBack()}
              /> */}
              <Image source={require('../../assets/arrow_back_24px.png')} />

              <Text style={{color: 'white', fontSize: 17}}>Category</Text>
              {/* <Icon
                style={{fontSize: 17}}
                color="white"
                name="bell"
                type="font-awesome"
              /> */}

              <TouchableOpacity
                onPress={() => navigation.navigate('notifications')}>
                <Image source={require('../../assets/bell.png')} />
              </TouchableOpacity>
            </View>
          ),
          // headerLeft: () => <Icon style={{ fontSize: 17, marginLeft: 22 }} color='white' name="long-arrow-left" type='font-awesome' onPress={() => navigation.goBack()} />,
          // headerRight: () => <Icon style={{ fontSize: 17, marginRight: 22 }} color='white' name="bell" type='font-awesome' />,
          tabBarIcon: ({focused, color, size}) => {
            // let iconName = focused ? 'grid' : 'grid-outline';
            // return <Image source={require('../../assets/category.png')} />;
            if (focused) {
              return <Image source={require('../../assets/category.png')} />;
            } else {
              return <Image source={require('../../assets/category.png')} />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: {
            backgroundColor: '#252B39',
          },
          headerTitleStyle: {color: 'white'},
          tabBarActiveTintColor: 'white',
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 3,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/arrow_back_24px.png')} />
              <Text style={{color: 'white', fontSize: 17}}>Search</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('notifications')}>
                <Image source={require('../../assets/bell.png')} />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'search' : 'search-outline';
            return <Image source={require('../../assets/search.png')} />;
          },
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Image source={require('../../assets/home.png')} />;
          },
          headerStyle: {
            backgroundColor: '#252B39',
          },
          tabBarActiveTintColor: 'white',
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 3,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/arrow_back_24px.png')} />
              <Text style={{color: 'white', fontSize: 17}}>Home</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('notifications')}>
                <Image source={require('../../assets/bell.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'person' : 'person-outline';
            return <Image source={require('../../assets/profile.png')} />;
          },
          headerStyle: {
            backgroundColor: '#252B39',
          },
          tabBarActiveTintColor: 'white',
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 3,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/arrow_back_24px.png')} />
              <Text style={{color: 'white', fontSize: 17}}>Profile</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('notifications')}>
                <Image source={require('../../assets/bell.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'cart' : 'cart-outline';
            return <Image source={require('../../assets/cart.png')} />;
          },
          headerStyle: {
            backgroundColor: '#252B39',
          },
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 3,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/arrow_back_24px.png')} />
              <Text style={{color: 'white', fontSize: 17}}>Cart</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('notifications')}>
                <Image source={require('../../assets/bell.png')} />
              </TouchableOpacity>
            </View>
          ),
          // tabBarActiveBackgroundColor: '#339AF7',
          tabBarActiveTintColor: 'white',
          tabBarItemStyle: {borderRadius: 50},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
