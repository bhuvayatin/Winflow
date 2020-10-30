import * as React from 'react';
import { View,  StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext} from '../component/Context';

export function DrawerContent(props){
     
    const [isDarkTheme, setDarkTheme] = React.useState(false);
    // const  {signOut} = React.useContext(AuthContext)
    const toggleTheme =() =>{
        setDarkTheme(!isDarkTheme);
    }
    const { signOut} = React.useContext(AuthContext); 

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawercontent}>
                   <View style={styles.userinfosection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={{ 
                                    uri : 'https://imgur.com/I80W1Q0.png'
                                }}
                                size={100}
                            />
                            <View style={{marginLeft:15,marginTop:15, flexDirection:'column', alignItems:'center',}}>
                            <Title style={styles.title}>Yatin Bhuva</Title>
                            <Caption style={styles.caption}>@bhuvayatin</Caption>
                        </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.Paragraph,styles.caption}> 80 </Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.Paragraph,styles.caption}> 11K </Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                   </View>
                   <Drawer.Section style={styles.drawersection}>
                   <Drawer.Item 
                 icon={({ color, size})=>(
                    <Icon name="home-outline"
                    color={color}
                    size={size}
                    />
                    )}
                 label=" Home"
                 onPress={()=>{ props.navigation.navigate('HomeScreen')}}
                 />
                  <Drawer.Item 
                 icon={({ color, size})=>(
                    <Icon name="account-outline"
                    color={color}
                    size={size}
                    />
                    )}
                 label=" Profile"
                 onPress={()=>{ props.navigation.navigate('ProfileScreen')}}
                 />
             
                   </Drawer.Section>
                </View>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Drak Theme</Text>
                            <View pointerEvents="none">

                            <Switch value={isDarkTheme} />
                            </View>
                        </View>

                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomdrawersection}>
                 <Drawer.Item 
                 icon={({ color, size})=>(
                    <Icon name="exit-to-app"
                    color={color}
                    size={size}
                    />
                    )}
                 label=" Sign Out"
                 onPress={()=>{signOut( ) }}
                 />
            </Drawer.Section>
        </View>

    );
}

const styles = StyleSheet.create({
    drawercontent:{
        flex:1,
    },
   userinfosection:{
    
    paddingLeft:20,

   },
   
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    }, 



    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    Paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawersection:{
        marginTop:15,
    },
    bottomdrawersection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    },
});
  