import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '../components/headerComponent';
import PictureComponent from '../components/pictureComponent';
import TitleComponent from '../components/titleComponent';
const ProfileScreen = ({navigation}: any) => {

    return (
     <View style={styles.background}>
       <HeaderComponent></HeaderComponent>
       <PictureComponent></PictureComponent>
       <TitleComponent></TitleComponent>
       <TitleComponent></TitleComponent>
       <TitleComponent></TitleComponent>
       <TitleComponent></TitleComponent>
       <TitleComponent></TitleComponent>
     </View>   

    );
};
const styles = StyleSheet.create({
    background: {
        backgroundColor: "white",
        height: "100%"
    }
})
export default ProfileScreen;