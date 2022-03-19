import React from 'react';
import {Image} from 'react-native';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

const Category = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <Text style={styles.toptext}>
        Choose the category to find the sellers of your interest.
      </Text>
      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/mike.png')} /> */}
            <Text style={{fontSize: 30}}>🎤</Text>
            <Text style={{color: 'white', marginTop: 5}}>Singing</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/music.png')} /> */}
            <Text style={{fontSize: 30}}>🎺</Text>
            <Text style={{color: 'white', marginTop: 5}}>Music</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/dance.png')} /> */}
            <Text style={{fontSize: 30}}>💃🏻</Text>
            <Text style={{color: 'white', marginTop: 5}}>Dance</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/hot.png')} /> */}
            <Text style={{fontSize: 30}}>🔥</Text>
            <Text style={{color: 'white', marginTop: 5}}>Hot</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/art.png')} /> */}
            <Text style={{fontSize: 30}}>🎨</Text>
            <Text style={{color: 'white', marginTop: 5}}>Art</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/fitness.png')} /> */}
            <Text style={{fontSize: 30}}>💪</Text>
            <Text style={{color: 'white', marginTop: 5}}>Fitness</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/lifestyle.png')} /> */}
            <Text style={{fontSize: 30}}>😎</Text>
            <Text style={{color: 'white', marginTop: 5}}>Life Style</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/random.png')} /> */}
            <Text style={{fontSize: 30}}>🎲</Text>
            <Text style={{color: 'white', marginTop: 5}}>Random</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/talks.png')} /> */}
            <Text style={{fontSize: 30}}>💬</Text>
            <Text style={{color: 'white', marginTop: 5}}>Talks</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/sports.png')} /> */}
            <Text style={{fontSize: 30}}>🏀</Text>
            <Text style={{color: 'white', marginTop: 5}}>Sports</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/food.png')} /> */}
            <Text style={{fontSize: 30}}>🍲</Text>
            <Text style={{color: 'white', marginTop: 5}}>Food</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('selectedCategory')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={require('../../assets/dog.png')} /> */}
            <Text style={{fontSize: 30}}>🐕</Text>
            <Text style={{color: 'white', marginTop: 5}}>Pets</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
  },
  toptext: {
    color: 'white',
    textAlign: 'center',
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
  },
  categories: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  category: {
    width: 100,
    height: 100,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderColor: '#252B39',
    borderWidth: 1,
    backgroundColor: '#252B39',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
