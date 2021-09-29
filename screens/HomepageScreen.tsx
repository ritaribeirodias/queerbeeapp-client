import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Homepage = () => {
    return (
      <View style={styles.homepage}>
        <Text style={styles.logo}>queerbee🌈</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  homepage: { 
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    fontSize: 30,
  }
});

export default Homepage;