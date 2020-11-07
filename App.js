import React, {useEffect} from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import component
import { AuthContext} from './component/Context';
import Drawer from './NavigationBar/MainDrawer';
import Rootstack from './Screen/RootStack';
import { ActivityIndicator } from 'react-native-paper';
import * as Google from 'expo-google-app-auth';

export default function App() {

  // create a state that contain Authatication detail
  // Basic Statemangement
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 
  
  // statemangement usin Assynoc 
  const initialLogingState ={
    isLoading: true,
    userName:null,
    userToken:null,
  };

  const loginReducer = ( prevState , action ) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken : action.token,
          isLoading:false,
        };
        case 'LOGIN':
        return{
          ...prevState,
          userName : action.id,
          userToken : action.token,
          isLoading:false,
        };
        case 'LOGOUT':
        return{
          ...prevState,
          userName: null,
          userToken:null,
          isLoading:false,
        };
        case 'REGISTER':
          return{
            ...prevState,
            userName : action.id,
            userToken : action.token,
            isLoading:false,
          };
    }
  };

  const [ loginState , dispatch] = React.useReducer( loginReducer , initialLogingState); 


// creat signin, signup and signout state usine react hook call

const authContext = React.useMemo (() => ({
   
  signIn :async () => {
    
     
    // setUserToken ('fghj');
   
    // let userToken;
    
    // userToken = null ;
    // if (userName=='yatin' && password=='pass'){
    //   try {
    //     userToken = 'yatin123'
    //     await AsyncStorage.setItem('userToken', userToken)
    //   } catch (e) {
    //     console.log(e);
    //   }
  
    // }
    // console.log ( 'user token:' , userToken);
    // dispatch({ type: 'LOGIN', id : userName , token: userToken});

    try {
      const result = await Google.logInAsync({
        androidClientId: "644100071753-vq56jpqiq7bd4qs5np29t1vkb184e412.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
       let  userToken = 'yatin1234;'
        dispatch({ type: 'LOGIN', id : result.user.name , token: userToken});
      } else {
       console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  },
  signOut :() => {
    // setUserToken (null);
    // setIsLoading(false);
    dispatch({ type: 'LOGOUT'});
  },

  signUp : async() => {
    // setUserToken ('yfghj');
    try {
      userToken = 'yatin123;'
      await AsyncStorage.removeItem('userToken')
    } catch (e) {
      console.log(e);
    }
    // setIsLoading(false);
  },

}), []);


  useEffect(() => {
    return () => {
        setTimeout(async()=>{
          // setIsLoading(false);

          let userToken;
          userToken = null;
          try {
          
            await AsyncStorage.getItem('userToken')
          } catch (e) {
            console.log(e);
          }
          console.log ( 'user token:' , userToken);
          dispatch({ type: 'REGISTER', token: userToken });
        },10)
    };
  }, [])

  // loding screen
  if (loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  // main part
  return (
    <AuthContext.Provider value ={authContext}>
     
      <NavigationContainer>
        {/**/}
        {loginState.userToken !== null ? (
         <Drawer/> 
         )
         :
        <Rootstack/>
} 
      </NavigationContainer>
    </AuthContext.Provider>
  );
}