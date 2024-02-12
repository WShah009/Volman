import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import Header from '../Component/Header';
import EventHeaderwithsearch from '../Component/EventHeaderWithSearch';
import CertificateRequestHeader from '../Component/CertificateRequestHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import phoneicon from 'react-native-vector-icons/Entypo';
import color from '../Assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import Inboxmsgheader from '../Component/InboxMsgHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Inboxmsg = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Inboxmsgheader />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          flexDirection: 'row',
          width: '80%',
          marginLeft: 40,
        }}>
    
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="calendar-range"
            size={30}
            color={color.linTopClr}
          />
          <Text style={{color: '#1d224f', marginLeft: 4}}>05-11-2023</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="clock"
            size={30}
            color={color.linTopClr}
          />
          <Text style={{color: '#1d224f', marginLeft: 4}}>2:00PM </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="email"
          size={30}
          color={color.linTopClr}
        />
        <Text style={{color: '#1d224f', marginLeft: 4}}>Nouman@gmail.com</Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          marginLeft:15,marginRight:14,width:"90%"
          
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'darkblue'}}>
          Subject
        </Text>

        <Text style={{fontSize: 18, marginTop: 12,}}>
        Do you want to address a text to your email address? You can send a text to any email address by entering the email address into the "To" field in which you'd normally add a contact's name or number. This wikiHow article teaches you how to send a text message from your iPhone or Android phone to an email address.Do you want to address a text to your email
address? You can send a text to any email address by entering the email address into the "To" field in which you'd normally add a contact's name or number. This wikiHow article teaches you how to send a text message from your iPhone or Android phone to an email address.        </Text>
      </View>


      <View
        style={{
          alignItems: 'center',justifyContent:'center',
          
          marginTop: 60,
          marginLeft:115,marginRight:14,width:"40%",height:50,backgroundColor:'#1d224f',borderRadius:10,flexDirection:'row'
          
        }}>
          <MaterialCommunityIcons
          name='arrow-left-top-bold'
          size={30}
          color='white'
          />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white',marginLeft:10}}>
          Reply
        </Text>

       
      </View>


    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: '85%',
    height: 120,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 15,
    elevation: 5,
  },

  contentIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  imgStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: '100%',
    width: '100%',
  },
  contentStyle: {
    width: '100%',
    flexWrap: 'wrap',
    fontSize: 13,
    lineHeight: 17,
  },
  contentImg: {
    width: '35%',
  },
  contentContainer: {
    width: '64%',
    marginLeft: '3%',
  },
  textheading: {
    color: '#272071',
    fontSize: 22,
    fontWeight: 'bold',
  },
  userStyle: {
    color: color.btnColor,
  },
  iconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  iconText: {
    fontSize: 17,
    paddingLeft: 5,
    color: color.default,
  },
  iconStyle: {
    color: color.btnColor,
  },
});

export default Inboxmsg;
