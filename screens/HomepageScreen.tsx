import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import ProfileScreen from './ProfileScreen';

const Homepage = ({navigation}: any) => {
    return (
      <View>
      <View style={styles.homepage}>
        <Button title="queerbee🌈" onPress={() => navigation.navigate('Profile')}/> 
      </View> 
      </View>
    );
};

const styles = StyleSheet.create({
  homepage: { 
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    fontSize: 30,
  },
  text: {
    fontSize: 30, 
    color: "black"
  }
});

export default Homepage;