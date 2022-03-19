import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Search = () => {
  const [search, setSearch] = React.useState('');
  return (
    <SafeAreaView style={styles.bgLoginSignup}>
      <SearchBar
        placeholder="Search here..."
        inputContainerStyle={{
          width: '95%',
          backgroundColor: 'black',
        }}
        containerStyle={{
          padding: 0,
          marginTop: 10,
        }}
        value={search}
        onChangeText={search => setSearch(search)}
      />
      {/* <View style={{width: 20, backgroundColor: '#339AF7', height: 20}}>
        <Image source={require('../../assets/filter.png')} />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgLoginSignup: {
    backgroundColor: '#252B39',
    flex: 1,
    alignItems: 'center',
  },
});

export default Search;
