import * as React from 'react';
import { StyleSheet, View } from 'react-native';


const TitleComponent = () => {

    return(
        <View style={styles.title}>

        </View>
    )
};
const styles = StyleSheet.create({
    title:{
        width: 170,
        height: 50,
        backgroundColor: "pink",
        borderRadius: 15,
        marginLeft: 40,
        marginTop: 15,
    },
});

export default TitleComponent;