import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <TouchableOpacity onPress={() => navigation.navigate('Live')}>
        <Text
          style={{
            color: 'lightgrey',
            textAlign: 'center',
            marginTop: 50,
            fontSize: 40,
          }}>
          Join Live
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text
          style={{
            color: 'lightgrey',
            textAlign: 'center',
            marginTop: 50,
            fontSize: 40,
          }}>
          Join Chat
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
  },
});
