
import React from 'react';
import { View, TextInput,Text,TouchableOpacity,Dimensions,StyleSheet,Platform, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext} from '../component/Context'; 

const vw = Dimensions.get('window').width/100;
const vh =Dimensions.get ('window').height/100;
const image = { uri: '../img/bg.jpeg' };

const SignInScreen = ({navigation})=> {
    
    const [data, setdata] = React.useState({
        userName:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true
    });

    const { signIn } = React.useContext(AuthContext); 

    const textInputChange= (val) =>{
        if(val.length >= 4){  
            setdata({
                ...data,
                userName:val,
                check_textInputChange:true,
            });
        }
        else{
            setdata({
                ...data,
                userName:val,
                check_textInputChange:false,
            });
        }
    }
    
    const hendlePasswordChange =(val)=>{
        setdata({
            ...data,
            password:val,
           
        });
    }

    const updateScurtyTextEntry =()=>{
        setdata({
            ...data,
            secureTextEntry: !data.secureTextEntry
           
        });
    }

    

  const  loginHandle =(userName,password)=>{
   signIn(userName,password);
  }

    return(
       


        <View style={styles.maincon}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
             
             <View style={styles.header}>
                 <Text style={styles.text_header}>Welcome!</Text>
                 </View>
        
            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}>
           
                <Text style={styles.text_footer}> userName</Text>
                <View style={styles.action}>
                   <FontAwesome
                   name="user-o"
                   color="#05375a"
                   size={20}
                   />     
                   <TextInput
                   placeholder="Your userName"
                   style={styles.textinput}
                   autoCapitalize="none"
                   onChangeText={(val)=>textInputChange(val)}
                   />
                   {data.check_textInputChange ?
                   <Animatable.View animation="bounceIn">
                         <Feather
                   name="check-circle"
                   color="green"
                   size={20}
                   />
                   </Animatable.View>
                  
                    :null}
                </View>    
                <Text style={[styles.text_footer,{marginTop:20}]}> Password</Text>
                <View style={styles.action}>
                   <FontAwesome
                   name="lock"
                   color="#05375a"
                   size={20}
                   />     
                   <TextInput
                   placeholder="Your Password"
                   secureTextEntry={data.secureTextEntry ? true : false }
                   style={styles.textinput}
                   autoCapitalize="none"
                   onChangeText={(val)=>hendlePasswordChange(val)}
                   />
                    <TouchableOpacity 
                    onPress={updateScurtyTextEntry}
                    >
                        {data.secureTextEntry ?
                    <Feather
                    name="eye-off"
                    color="gray"
                    size={20}
                    />
                    :
                    <Feather
                    name="eye"
                    color="gray"
                    size={20}
                    />
                     }
                   </TouchableOpacity>
                </View>    
                     <TouchableOpacity>
                         <Text style={{color:'#009387',marginTop:15}}>
                             Forgot Password
                         </Text>
                     </TouchableOpacity>

                     <View style={styles.button}>
                     <TouchableOpacity
                             style={styles.signin}
                            onPress= {()=>{loginHandle( data.userName, data.password)}}
                           
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signin}
                            
                            >
                                <Text style={[styles.textsign,{
                                    color:"#fff"
                                }]}>Sign In</Text>
                                
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress= {()=>navigation.navigate('SignUpScreen')}
                            style={[styles.signin,{
                                borderColor:"#009387",
                                borderWidth:1,
                                marginTop:15
                             }]}
                        >
                            <Text style={[styles.textsign,
                           { color:"#009387",}
                            ]} >
                                
                                Sign Up
                                
                                </Text>
                        </TouchableOpacity>

                     </View>

            </Animatable.View>
                   
            
        </View>
    );
}


export default SignInScreen;



const styles = StyleSheet.create({
    maincon:{
        flex:1,
        backgroundColor:"#009387"
       
    }, header:{
        flex:1,
        justifyContent:'flex-end',
       paddingHorizontal:20,
       paddingBottom:50,
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    text_header:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30
    },
    text_footer:{
        color:"#05375a",
        fontSize:18
    },
    action:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5,
    },
    textinput:{
        flex:1,
        marginTop:Platform.OS== 'ios' ? 0 : -12,
        paddingLeft:10,
        color:"#05375a",
    },
    button:{
        alignItems:"center",
        marginTop:50
    },
    signin:{
        width:"100%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textsign:{
        fontSize:18,
        fontWeight:"bold",
    }
})