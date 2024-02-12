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
import color from '../../Assets/colors/colors';

import {useNavigation} from '@react-navigation/native';

import Header from '../../Component/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import BorderInput from '../../Component/input/BorderInput';
import normalize from 'react-native-normalize';
import {TextInput} from 'react-native-gesture-handler';
const ConatactSupport = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Header Text="Conatact Support" />
      <View style={styles.inputContainer}>
        <View style={styles.inputContent}>
          <TextInput
            placeholder="  Name"
            style={{
              borderRadius: 10,
              elevation: 2,
              backgroundColor: 'white',
              marginTop: 25,
              height: 65,
            }}
          />
        </View>
        <View style={styles.inputContent}>
          <TextInput
            placeholder="  Email"
            style={{
              borderRadius: 10,
              elevation: 2,
              backgroundColor: 'white',
              marginTop: 10,
              height: 65,
            }}
          />
        </View>

        <View style={styles.inputContent}>
          <TextInput
            placeholder="  Subject"
            style={{
              borderRadius: 10,
              elevation: 2,
              backgroundColor: 'white',
              marginTop: 10,
              height: 65,
            }}
          />
        </View>
        <View style={styles.inputContent}>
          <TextInput
            placeholder="  Message..."
            style={{
              borderRadius: 10,
              elevation: 2,
              backgroundColor: 'white',
              marginTop: 10,
              height: 99,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            marginTop: 50,
            marginLeft: 10,
            marginRight: 14,
            width: '40%',
            height: 50,
            backgroundColor: '#1d224f',
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize:18, fontWeight: 'bold', color: 'white'}}>
            Send Message
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ConatactSupport;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContent: {
    width: '79%',
  },
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
