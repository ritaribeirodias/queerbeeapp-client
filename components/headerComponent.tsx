import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderComponent = () => {
    return (
        <View style={styles.logo}>
         <Text style={styles.text}> queerbee🌈  </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
      backgroundColor: "white",
      height: "5%",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
        fontSize: 20,  
    }
})

export default HeaderComponent;