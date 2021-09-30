import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const PictureComponent = () => {
  return (
      <View style={styles.picture}>

      </View>
  );

};

const styles = StyleSheet.create({
    picture: {
      height: 170,
      width: 170,
      backgroundColor: "yellow",
      marginHorizontal: 40,
      marginTop: 30,
      borderRadius: 90,
    
    }
});

export default PictureComponent;