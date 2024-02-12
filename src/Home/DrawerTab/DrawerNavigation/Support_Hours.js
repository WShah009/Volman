import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../Component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../../Assets/colors/colors';

import {useIsFocused} from '@react-navigation/native';
import {APIS} from '../../../Apiurls/Apis';

const Support_Hours = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState('');
  const GetData = () => {
    var formdata = new FormData();
    formdata.append('user_id', global.userid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(APIS.SuppourtHours, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log([result]), setData([result]);
      })
      .catch(error => console.log('error', error));
  };

  const VolunteerData = ({item}) => {
    return (
      <View style={Styles.maincard}>
        <View style={Styles.innerCard}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              marginBottom: 5,
            }}>
            <View style={Styles.iconview}>
              <Icon
                name="watch-later"
                size={15}
                style={{color: color.btnColor}}
              />
              <Text style={Styles.Text}>{item.join_on}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="watch-later"
                size={15}
                style={{color: color.btnColor}}
              />
              <Text
                style={{fontSize: 12, paddingLeft: 5, color: color.default}}>
                {item.end_date}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Header Text="Support Hours" />
      <View style={{alignSelf: 'center', width: '95%', marginTop: 10}}>
        <FlatList
          data={data}
          keyExtractor={index => index.toString()}
          renderItem={({item}) => <VolunteerData item={item} />}
        />
      </View>
    </View>
  );
};

export default Support_Hours;
const Styles = StyleSheet.create({
  maincard: {
    width: '95%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 6,
  },
  innerCard: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 10,
  },
  iconview: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text: {fontSize: 12, paddingLeft: 5, color: color.default},
});
