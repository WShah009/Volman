import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import phoneicon from 'react-native-vector-icons/Entypo';
import color from '../../../Assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../Component/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ceil} from 'lodash';

const GenerateCertificate = () => {
 
  const navigation = useNavigation();
  const data = [
    {
      Event_Name: 'Health & Social',
      Event_Date: '29-03-2023',
      Location:'Rawalpindi',
      Hours: '4',
      Role: 'Packager',
      Joining_time:'11:00AM',
      Leaving_time:'3:00PM',
    },
    {
        Event_Name: 'Community Cleanup',
        Event_Date: '15-04-2023',
        Location: 'City Center Park',
        Hours: '3',
        Role: 'Team Leader',
        Joining_time: '9:30 AM',
        Leaving_time: '12:30 PM',
      
    },
    {
        Event_Name: 'Educational Workshop',
        Event_Date: '05-05-2023',
        Location: 'Local School',
        Hours: '2',
        Role: 'Facilitator',
        Joining_time: '2:00 PM',
        Leaving_time: '4:00 PM',
    },
    {
        Event_Name: 'Food Drive',
        Event_Date: '22-06-2023',
        Location: 'Community Center',
        Hours: '5',
        Role: 'Food Distributor',
        Joining_time: '10:00 AM',
        Leaving_time: '3:00 PM',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Header />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -40,
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            alignItems: 'center',
            height: '85%',
          }}>
          <Text style={{fontSize: 25, color: '#1d224f', fontWeight: 'bold',marginTop:20}}>
            VOLUNTEER
          </Text>
          <Text style={{fontSize: 25, color: '#1d224f', fontWeight: 'bold'}}>
            APPRICIATION
          </Text>
          <Text style={{fontSize: 20, color: '#1d224f', fontStyle: 'italic'}}>
            Certificate
          </Text>

          <Text style={{fontSize: 15, color: '#1d224f',marginTop:30}}>
            This Certificate is proudly presented to</Text>
          <Text style={{borderBottomWidth: 1,fontSize: 25, color: '#2e6875',fontStyle:'italic',marginTop:15}}>
            Zeeshan Ali</Text>
          <Text
          style={{fontSize: 15, color: '#1d224f',marginTop:15}}
          >
            Thank You for all that you do for your Organization 
          </Text>

          <Text
          style={{fontSize: 15, color: '#1d224f',marginTop:5}}
          >
            and Community!
          </Text>

          <View
        //   style={{alignItems:'flex-start',justifyContent:'flex-start'}}
          >
          <View style={{flexDirection: 'row',marginRight:'65%',marginTop:20}}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color={color.linTopClr}
            />
            <Text>Total 5 hours</Text>
          </View>
          </View>
          <View style={{height: 20}}></View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.columnHeader}>Event Name</Text>
          <Text style={styles.columnHeader}>Event Date</Text>
          <Text style={styles.columnHeader}>Location</Text>
          <Text style={styles.columnHeader}>Hours</Text>
          <Text style={styles.columnHeader}>Role</Text>
          <Text style={styles.columnHeader}>Joining Time</Text>
          <Text style={styles.columnHeader}>Leaving Time</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
         // horizontal
          //showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.dataRow,
                { backgroundColor: index % 2 == 0 ? '#efeeee' : '#cdcdd7' },
              ]}
            >
              <Text style={styles.dataCell}>{item.Event_Name}</Text>
              <Text style={styles.dataCell}>{item.Event_Date}</Text>
              <Text style={styles.dataCell}>{item.Location}</Text>
              <Text style={styles.dataCell}>{item.Hours}</Text>
              <Text style={styles.dataCell}>{item.Role}</Text>
              <Text style={styles.dataCell}>{item.Joining_time}</Text>
              <Text style={styles.dataCell}>{item.Leaving_time}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
    <View
    style={{marginLeft:'50%'}}
    >
 <Text
          style={{fontSize: 15, color: '#1d224f',marginTop:15}}
          >
            Thank You so much
          </Text>

          <Text
          style={{fontSize: 20,fontWeight:'bold', color: '#1d224f',marginTop:5,marginBottom:10}}
          >
            Regards Volman
          </Text>
    </View>
   
        </View>
      </View>
      <View
      style={{flexDirection:'row',justifyContent:'flex-end'}}
      >
   <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',

        marginBottom:20,
          marginRight: 14,
          width: '30%',
          height: 50,
          backgroundColor: '#2e6875',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <MaterialCommunityIcons
          name="email"
          size={30}
          color="white"
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10,
          }}>
       Email
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',

        marginBottom:20,
          marginRight: 14,
          width: '30%',
          height: 50,
          backgroundColor: '#1d224f',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <MaterialCommunityIcons
          name="printer-outline"
          size={30}
          color="white"
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10,
          }}>
          Print
        </Text>
      </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',

        marginBottom:20,
          marginRight: 14,
          width: '40%',
          height: 50,
          backgroundColor: '#1d224f',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <MaterialCommunityIcons
          name="arrow-left-top-bold"
          size={30}
          color="white"
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10,
          }}>
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
  container: {

    padding: 18,
    backgroundColor: 'white',
    borderRadius:20,
    marginLeft:10,
    marginRight:10,
    margintop:20,
   
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#060B49',
    paddingVertical: 5,
    paddingHorizontal:10,
    padding: 10,
    height: 60,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
   
    width:'100%'
    
  },
  columnHeader: {
    flex: 1,
    backgroundColor: '#060B49',
    color: 'white',
    padding:10,
    fontSize:13,
  
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    // backgroundColor: 'lightblue',
  },
  dataCell: {
    flex: 1,
    // backgroundColor: 'lightblue',
   
    height: 50,
    padding: 10,
   
    color:'#2c2c58'
  },
});

export default GenerateCertificate;
