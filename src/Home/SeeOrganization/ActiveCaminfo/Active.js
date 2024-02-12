import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Card3 from '../../../Component/Card3';
import Card4 from '../../../Component/Card4';
import {useNavigation} from '@react-navigation/native';
import ActBox1 from '../../../Component/ActBox1';
import ActBox2 from '../../../Component/ActBox2';
import color from '../../../Assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {APIS} from '../../../Apiurls/Apis';
import {width} from 'react-native-dimension';
const Active = () => {
  const navigation = useNavigation();
  const [eventdata, seteventData] = useState();
  const [data, setData] = useState('');
  const isfocused = useIsFocused();
  const GetData = async () => {
    const value = await AsyncStorage.getItem('@orgid_key');
    console.log(value, 'value data get');

    setData(JSON.parse(value));
  };

  const getEvents = () => {
    var formdata = new FormData();

    formdata.append('org_id', data?.orgid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(APIS.GetEvent, requestOptions)
      .then(response => response.json())
      .then(({events, error}) => {
        if (events) {
          seteventData(events);
          console.log(events, 'eventsjhghjjkh');
        }
        if (error) {
          setData('No Events Orgnaized');
        }
      })
      .catch(error => console.log('error', error));
  };
  const Item = ({item}) => (
    <>
      {console.log(item, 'itemss')}
      <View style={styles.cardCont}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Event', {
              id: item?.id,
              title: item?.title,
              description: item?.short_description,
              date: item?.event_date,
              img: item?.Image,
              start_time: item?.start_time,
              end_time: item?.end_time,
              // latitude: item?.latitude,
              // longitude: item?.longitude,
              address: item?.address,
            });
          }}>
          <ActBox2
            image={item?.Image}
            title={item?.title}
            event_date={item.event_date}
            description={item?.short_description}
            adress={item?.address}
            stylecontainer={{width: '99%'}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
  useEffect(() => {
    const fetchdata = async () => {
      await GetData();
    };
    fetchdata().catch(err => console.log(err));
  }, [isfocused]);
  useEffect(() => {
    if (!data) return;
    getEvents();
  }, [isfocused, data]);
  return (
    <View style={styles.container}>
      {data === 'No Events Orgnaized' ? (
        <View style={{alignSelf: 'center', marginTop: '50%'}}>
          <Text style={{color: 'black', fontSize: 20}}>
            No Events Orgnaized
          </Text>
        </View>
      ) : (
        <FlatList
          data={eventdata}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(d, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Active;

const styles = StyleSheet.create({
  cardCont: {
    marginVertical: 5,
    backgroundColor: color.bodyColor,
  },
  container: {
    paddingHorizontal: 8,
    height: 520,
    marginBottom: 10,
  },
});
