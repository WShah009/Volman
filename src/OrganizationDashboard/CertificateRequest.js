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

const CertificateRequest = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <CertificateRequestHeader
        onPressnotification={() => {
          navigation.navigate('notification');
        }}
      />

      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <View style={styles.card}>
          <View style={styles.contentImg}>
            {/* <Image
              style={styles.imgStyle}
              source={{
               
              }}
            /> */}
            <Image
              source={require('../Assets/volunteer.jpeg')}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.contentContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textheading}>Zeeshan Ali</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name="watch-later" size={19} style={styles.iconStyle} />
                <Text style={{color: '#272071'}}> 03:10 PM</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Icon name="mail" size={20} style={styles.iconStyle} />
              <Text style={{fontSize: 17,color: '#272071',marginLeft:2,}}>Zeeshan@gmail.com</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5 }}>
              <Icon name="location-on" size={20} style={styles.iconStyle} />
              <Text style={{fontSize: 17,color: '#272071'}}>Rawalpindi</Text>
            </View>

            {/* <Text style={styles.contentStyle}>{props.description}</Text> */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '98%',
                marginTop: '0%',
              }}>
              <View style={styles.iconCont}>
                <Icon name="phone" size={19} style={styles.iconStyle} />
                <Text style={styles.iconText}>03403840</Text>
              </View>
              <View style={styles.iconCont}>
                <Icon
                  name="calendar-today"
                  size={19}
                  style={styles.iconStyle}
                />
                <Text style={styles.iconText}>03-11-23</Text>
              </View>
            </View>

            {/* <View style={styles.iconCont}>
              <Icon name="location-on" size={17} style={styles.iconStyle} />
              <Text style={styles.iconText}>{props.adress}</Text>
            </View> */}
          </View>
        </View>
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

export default CertificateRequest;
