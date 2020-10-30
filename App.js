import React, {useEffect} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import component
import { AuthContext} from './component/Context';
import Drawer from './NavigationBar/MainDrawer';
import Rootstack from './Screen/RootStack';
import { ActivityIndicator } from 'react-native-paper';


export default function App() {

  // create a state that contain Authatication detail
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);  

// creat signin, signup and signout state usine react hook call

const authContext = React.useMemo (() => ({
  signIn :() => {
    setUserToken ('fghj');
    setIsLoading(false);
  },
  signOut :() => {
    setUserToken (null);
    setIsLoading(false);
  },

  signUp :() => {
    setUserToken ('fghj');
    setIsLoading(false);
  },

}));


  useEffect(() => {
    return () => {
        setTimeout(()=>{
          setIsLoading(false);
        }, 1 );
    };
  }, [])

  // loding screen
  if (isLoading){
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
        {userToken !== null ? (
         <Drawer/> 
         )
         :
        <Rootstack/>
} 
      </NavigationContainer>
    </AuthContext.Provider>
  );
}