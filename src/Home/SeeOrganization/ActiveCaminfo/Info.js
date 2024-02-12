import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import InfoCard from '../../../Component/InfoCard';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Info = () => {
  const [data, setData] = useState('');
  const isfocused = useIsFocused();
  const GetData = async () => {
    const value = await AsyncStorage.getItem('@orgid_key');
    console.log(value, 'value data get');

    setData(JSON.parse(value));
  };
  useEffect(() => {
    console.log('effect called');
    const fetchdata = async () => {
      await GetData();
    };
    fetchdata().catch(err => console.log(err));
  }, [isfocused]);
  return (
    <View>
      <InfoCard title={data?.title} desc={data?.description} />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
