import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../../Component/Header';
import CustomButtonActive from '../../../Component/customButtonActiveCard';
import color from '../../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/AntDesign';
const OrgActiveCardScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header Text={'Hope Farm'} />
      {/* <CustomButtonActive /> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '44%',
          width: '100%',
        }}>
        {/* <View style={{backgroundColor:'orange',}}></View> */}
        <Image
          source={require('../../../Assets/kids.jpg')}
          style={{width: '80%', height: '40%', marginBottom: 20}}
        />
        <Text
          style={{
            marginTop: 5,
            color: color.darkBlue,
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Primio Center{' '}
        </Text>
        <CustomButtonActive />
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          width: '100%',
          height: '8%',
          backgroundColor: color.darkBlue,
          flexDirection: 'row',
          justifyContent: 'space-between', // This ensures icons are spaced apart
          alignItems: 'center', // Align items in the center vertically
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 17}}>
          Primo Center Details
        </Text>
        <Icon name="arrowright" size={30} color={color.white} />
      </TouchableOpacity>
      {/* <View style={{height: '50%', width: '100%', backgroundColor: 'grey'}}>
        <View
          style={{
            height: '10%',
            padding: 15,
            backgroundColor: 'orange',
            flexDirection: 'row',
            justifyContent: 'space-between', // This ensures views are spaced apart
            alignItems: 'center', // Align items in the center vertically
          }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image source={require('../../../Assets/calendar-alt.png')} />
            <Text style={{color: 'black'}}>1ate</Text>
          </View>

          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image source={require('../../../Assets/calendar-alt.png')} />
            <Text style={{color: 'black'}}>Date</Text>
          </View>
        </View>
      </View> */}
      <View style={{height: '50%', width: '100%', backgroundColor: 'grey'}}>
        <View
          style={{
            height: '10%',
            // padding: 15,
            backgroundColor: 'orange',
            flexDirection: 'row',
            // justifyContent: 'space-between', // This ensures views are spaced apart
            // alignItems: 'center', // Align items in the center vertically
          }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              width: '50%',
              height: '100%',
            }}>
            <Image
              source={require('../../../Assets/calendar-alt.png')}
              style={{height: '55%', width: '10%', tintColor: color.darkBlue}}
            />
            <Text style={{color: 'black', marginLeft: 5}}>12/02/2022</Text>
            {/* Adjust margin left to separate text and image */}
          </View>

          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginLeft: 0, // Adjust the margin between the two green views
              width: '50%',
            }}>
            <Image
              source={require('../../../Assets/calendar-alt.png')}
              style={{height: '55%', width: '10%', tintColor: color.darkBlue}}
            />
            <Text style={{color: 'black', marginLeft: 5}}>12/02/2022</Text>
          </View>
        </View>
        <View
          style={{
            height: '10%',
            width: '100%',

            backgroundColor: 'orange',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../Assets/location2.png')}
            style={{
              height: '53%',
              width: '4%',
              tintColor: color.darkBlue,
              marginTop: 10,
              marginLeft: 40,
            }}
          />
          <Text style={{marginTop: 10, marginLeft: 10, color: 'black'}}>
            4952 W. Madison Street Chicago, IL 606
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrgActiveCardScreen;
