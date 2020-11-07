
import * as React from 'react';
import { View, Text,StatusBar , StyleSheet, Image,Dimensions,Button } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




const vw = Dimensions.get('window').width/100;
const vh =Dimensions.get ('window').height/100;

const ProfileScreen= ({navigation}) =>{
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

           <StatusBar backgroundColor='#009387' barStyle="light-content"/>
         
        <Text>Profile Screen</Text>
      </View>
    );
  }

  export default ProfileScreen;
  

const styles = StyleSheet.create({

})