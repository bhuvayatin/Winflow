
import * as React from 'react';
import { View, Text,StatusBar , StyleSheet, Image,Dimensions,Button } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




const vw = Dimensions.get('window').width/100;
const vh =Dimensions.get ('window').height/100;

const HomeScreen= ({navigation}) =>{
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

           <StatusBar backgroundColor='#009387' barStyle="light-content"/>
         
        <Text>Home Screen</Text>
      </View>
    );
  }

  export default HomeScreen;
  

const styles = StyleSheet.create({
  maincon:{
      flex:1,
      flexDirection:'column'
  },
  image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  main:{
     
      flexDirection:'row',
      
      justifyContent:'space-between',
      alignItems:'center'
  },
  logo:{
      marginVertical:5,
      marginHorizontal:5
      
  },
  tinyLogo: {
      alignItems:'center',
      justifyContent:'center',
      width: 80,
      
      height: 80,
    },
    login:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:25,
        color:"#fff",
        fontFamily:"serif"
    },
    container:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',

      
       
    },
    text1:{
      justifyContent:'center',
      textAlign:"center",
      marginHorizontal:'10%',
      color:'#fff'
    },
    text:{
        backgroundColor:'#fff',
       marginHorizontal:"10%",
       marginVertical:"4%",
        padding:15,
        borderRadius:65
    },
    btncontainer:{
      
       marginLeft:
       "26%",
       width:"95%"
    },
    btn:{
        width:'45%',
        
    },
    submit:{
        textAlign:"center",
        
        backgroundColor:'#333',
       
        padding:10,
        color:'#fff',
        borderRadius:40
    }
})