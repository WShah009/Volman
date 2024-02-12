import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../Assets/colors/colors';
import InboxHeaderwithsearch from '../Component/InboxHeaderwWithSearch';
import {useNavigation} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

import LinearGradient from 'react-native-linear-gradient';
const Inbox = () => {
  const navigation = useNavigation();
  return (
    <View
    style={{flex:1}}
    >
      <InboxHeaderwithsearch
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          navigation.navigate('notification');
        }}
      />
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <View style={styles.plancard}>
         
          
          <View
          style={{
        
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <LinearGradient
            colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
            style={styles.linearGradient}>
           
          
          </LinearGradient>
        </View>
        
        <TouchableOpacity
             style={{
           
          alignItems:'center',
          justifyContent:'center',
           flexDirection:'row',
           width:'100%'
            }}
            onPress={() => {
              navigation.navigate('Inboxmsg');
            }}>
            <Text style={{color: '#1d224f', fontWeight: 'bold', fontSize:20,paddingLeft:20}}>
              Nouman            </Text>
              <View
              style={{flexDirection:'row',width:'60%',marginLeft:-50}}
              >
              <Text style={{color: '#6B6B6B', fontSize: 15}}>
              Subject-Email Message.. 
            </Text>
            </View>
            <Text style={{color: '#6B6B6B', fontSize: 15,marginRight:40}}>
              Date
            </Text>
            
          
</TouchableOpacity>


          
          

          
        </View>
      </View>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  linearGradient: {
   
height:'100%',
width:18,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  plancard: {
  
    justifyContent:'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    width: '85%',

   alignItems:'center',
   
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
