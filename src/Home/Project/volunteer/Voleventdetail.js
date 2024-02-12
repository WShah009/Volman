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

const VolEventDetails = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const data = [
    {
      Name: 'Shazaib Awan',

      Gender: 'Male',
      Hours: '4',
      Role: 'Packager',
      Joining_time: '11:00AM',
      Leaving_time: '3:00PM',
    },
    {
      Name: 'Usman khan',

      Gender: 'Male',
      Hours: '3',
      Role: 'Team Leader',
      Joining_time: '9:30 AM',
      Leaving_time: '12:30 PM',
    },
    {
      Name: 'Ali Zeeshan',

      Gender: 'Male',
      Hours: '2',
      Role: 'Facilitator',
      Joining_time: '2:00 PM',
      Leaving_time: '4:00 PM',
    },
    {
      Name: 'Aiman Malik',

      Gender: 'Female',
      Hours: '5',
      Role: 'Food Distributor',
      Joining_time: '10:00 AM',
      Leaving_time: '3:00 PM',
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <Header Text="Meal Packing" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../Assets/meal.jpg')}
          resizeMode="stretch"
          style={{width: '85%', height: 170, borderRadius: 20, marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: '34%',
            left: '55%',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 8,
              elevation: 13,
            }}>
            Duration: 5 Hours
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
          }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 23,
              fontWeight: 'bold',
              color: color.btnColor,
            }}>
            Organization Name
          </Text>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 49,
              width: '65%',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: color.btnColor,
            }}>
            <FontAwesome name="user-circle" size={23} color="#2e6875" />

            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#2e6875',
                marginLeft: 7,
              }}>
              Contact Organizer
            </Text>
          </View>
        </View>



        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 49,
            width: '100%',
            marginTop: 13,
            backgroundColor: color.btnColor,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 27,
            }}>
            Primo center Details
          </Text>
       <TouchableOpacity
       onPress={()=>{
        navigation.navigate('VolonclickEveDetails')
       }}
       >
       <FontAwesome
            name="arrow-right"
            size={23}
            color="white"
            style={{marginRight: 22}}
          />
       </TouchableOpacity>
         
        </View>

        {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              flexDirection: 'row',
              width: '80%',
            }}>
                
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="email"
                size={30}
                color={color.linTopClr}
              />
              <Text style={{color: '#1d224f', marginLeft: 4}}>
                Nouman@gmail.com
              </Text>
            </View>
          </View> */}

        <View
          style={{
            flexDirection: 'row',
            marginLeft: -100,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Ionicons name="location-sharp" size={30} color={color.linTopClr} />
          <Text style={{color: '#1d224f', marginLeft: 4}}>
            Chaklala Sceheme 3,Rawalpindi
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-start',
            width: '80%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="calendar-month"
              size={30}
              color={color.linTopClr}
            />
            <Text style={{color: '#1d224f', marginLeft: 4}}>30-12-2024</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 4,
            }}>
            <FontAwesome5 name="user-alt" size={20} color={color.linTopClr} />
            <Text style={{color: '#1d224f', marginLeft: 10}}>Packager</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 90,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
        }}>
        <Text style={{color: '#060B49', fontSize: 18}}>{'Start\nTime'}</Text>
      
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey', fontSize: 16}}>: 11:00AM</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: 'black',
              marginHorizontal: 10,
            }}
          />
          <Text style={{color: '#060B49', fontSize: 18}}>{'End\nTime'}</Text>

          <Text style={{color: 'grey', fontSize: 16}}> : 11:00PM</Text>
        </View>
      </View>
        

      <View
        style={{
          flexDirection: 'row',
          height: 90,
          marginTop: -10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          marginLeft:4
        }}>
        <Text style={{color: '#060B49', fontSize: 18}}>{'Joining\n  Time'}</Text>
      
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#060B49', fontSize: 16}}>: 11:00AM</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: 'black',
              marginHorizontal: 10,
            }}
          />
          <Text style={{color: '#060B49', fontSize: 18}}>{'Leaving\n  Time'}</Text>

          <Text style={{color: '#060B49', fontSize: 16}}> : 11:00PM</Text>
        </View>
      </View>





      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 49,
          width: '100%',
          marginTop: 13,
          backgroundColor: color.btnColor,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 27,
          }}>
          Get Direction
        </Text>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('NearMe')
          }}
          >
          <FontAwesome
          name="arrow-right"
          size={23}
          color="white"
          style={{marginRight: 22}}
        />
          </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
};

export default VolEventDetails;

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
