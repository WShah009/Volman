import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import {BlurView, BlurWrpper} from '@react-native-community/blur';
import color from '../../Assets/colors/colors';
const CustomSidebarMenu = ({navigation}) => {
  // const {user} = useSelector(state => state.loginSlice);
  console.log(loginData(null),'In Side Bar Menu');
 const mode = 'stretch';
 const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
        <Text>Custom Sidebar</Text>
      {/* <Image
        style={{width: '100%', height: '100%', position: 'absolute'}}
        source={icon.drawer_bg}
        blurRadius={10}
      />
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={icon.profile_image} />
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%'}}>
        <Text style={{color:color.white}}>Balance</Text>
        <Text style={{color:color.white}}>KD 300.99</Text>
        </View>

      </View>
      <View style={{flex: 0.7,borderTopWidth:1,borderColor:'white'}}>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('GameScreen')}>
        <Image source={icon.drawer_dashboard_icon} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('Wallet_Stack')}>
        <Image source={icon.wallet} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Wallet</Text>
        </Pressable>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('Payment_History_Stack')}>
        <Image source={icon.payment_history} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Payment History</Text>
        </Pressable>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('Give_Feedback_Stack')}>
        <Image source={icon.give_Feedback} style={styles.Image_Size} resizeMode={mode} />
        <Text style={styles.Drawer_button_Text}>Give Feedback</Text>
        </Pressable>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('Support_Ticket_History_Stack')}>
        <Image source={icon.support_ticket_history} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Support Ticket History</Text>
        </Pressable>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('Privacy_Policy_Stack')}>
        <Image source={icon.privacy_policy} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Privacy Policy</Text>
        </Pressable>
        <Pressable style={styles.drawer_Button} onPress={()=>navigation.navigate('Settings_Stack')}>
        <Image source={icon.settings} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Settings</Text>
        </Pressable>
      </View>
      <View style={{flex: 0.1,justifyContent:"center",borderTopWidth:1,borderColor:'white'}}>
      <Pressable style={styles.drawer_Button} onPress={()=>dispatch(loginData({user : null}))}>
        <Image source={icon.logout} style={styles.Image_Size} resizeMode={mode}/>
        <Text style={styles.Drawer_button_Text}>Logout</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

export default CustomSidebarMenu;

const styles = StyleSheet.create({
  drawer_Button:{
    flexDirection:'row',alignItems:"center",paddingHorizontal:20,paddingVertical:10
  },
  Image_Size:{
    width:25,
    height:25
  },
  Drawer_button_Text:{
    marginLeft:10,fontSize:18,fontWeight:"bold",color:color.white
  }
});
