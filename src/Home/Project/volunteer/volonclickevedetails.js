import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import color from '../../../Assets/colors/colors';
  import {useNavigation} from '@react-navigation/native';
  
  import Header from '../../../Component/Header';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Modal from 'react-native-modal';
  import DatePicker from 'react-native-date-picker';
  import normalize from 'react-native-normalize';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  
  const VolonclickEveDetails = () => {
    navigation = useNavigation();
    return (
      <ScrollView style={{flex: 1}}>
        <Header Text="Meal Packing" />
        <View style={{alignItems:'flex-start',marginLeft:'5%',width:'90%'}}>
          
          <Text
            style={{
              marginTop: 20,
              fontSize: 25,
              fontWeight: 'bold',
              color: color.btnColor,
            }}>
            Details
          </Text>


          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
                
              color: color.black,
            }}>
          {"Primo Center is a leader in providing family shelter and permanent supportive housing, integrated physical, dental, and mental health care, early childhood development, and supportive services to homeless families in Chicago.\nThe organization has considerable capacity and experience as a provider of services to families affected by extreme poverty and homelessness, assisting more than 1,000 people each year with the aid of more than 100 volunteers, 70 staff members, and an annual operating budget of nearly $6 million.\nPrimo Center works in high-need communities across Chicago, operating facilities in North Lawndale and West Humboldt Park on Chicago's west side, in Auburn Gresham and Englewood on the south side, and in Hermosa on the northwest side."}</Text>
         
  
         
  
         
        </View>
  
        
      </ScrollView>
    );
  };
  
  export default VolonclickEveDetails;
  
  const styles = StyleSheet.create({
    loginBtn: {
      paddingHorizontal: 20,
      backgroundColor: color.purple,
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      width: '50%',
    },
    buttonContainer: {
      width: '80%',
  
      alignItems: 'center',
      marginTop: 20,
    },
    linearGradient: {
      height: '100%',
      width: 18,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    plancard: {
      justifyContent: 'space-between',
      backgroundColor: 'white',
      flexDirection: 'row',
      height: 60,
      width: '85%',
  
      alignItems: 'center',
  
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
    container: {
      padding: 18,
      backgroundColor: 'white',
      borderRadius: 20,
      marginLeft: 10,
      marginRight: 10,
      margintop: 20,
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: '#060B49',
      paddingVertical: 5,
      paddingHorizontal: 10,
      padding: 10,
      height: 60,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
  
      width: '100%',
    },
    columnHeader: {
      flex: 1,
      backgroundColor: '#060B49',
      color: 'white',
      padding: 10,
      fontSize: 13,
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
  
      color: '#2c2c58',
    },
  
    from: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#efeeee',
    },
    datePickerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#333',
    },
    linearGradientStyle: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: normalize(65),
      elevation: 0,
      paddingHorizontal: 12,
      zIndex: -60,
    },
    linearGradientStyle2: {
      alignItems: 'center',
      elevation: 0,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 6,
      justifyContent: 'center',
    },
    selectedDateText: {
      marginLeft: 10,
    },
    loginText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: color.white,
    },
    DateInnerContainer: {
      flexDirection: 'row',
      height: 50,
      width: '48%',
      borderRadius: 8,
      marginTop: 8,
      backgroundColor: color.white,
      alignItems: 'center',
    },
  });
  