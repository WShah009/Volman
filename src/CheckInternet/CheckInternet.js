import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
const CheckInternet = ({isConnected, setIsConnected}) => {
  useEffect(() => {
    const unsunscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected', state.isConnected);
      setIsConnected(state.isConnected);
    });
    return () => {
      unsunscribe();
    };
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text>{isConnected === true ? 'Connected' : 'Not Connected'}</Text>
    </View>
  );
};
export default CheckInternet;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
