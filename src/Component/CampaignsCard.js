import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';
const CampaignsCard = () => {
return (
  <>
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          There are currently no active Campaigns. Please check back later.   
        </Text>
       </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
container:{
  backgroundColor: color.bodyColor
  },
cardText: {
  color: color.default,
  justifyContent: 'center',
  paddingVertical: 50,
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 15,
  lineHeight: 22
},

card:{
  backgroundColor:"#fff",
  width:"100%",
  borderRadius: 10,
  elevation: 0,
  borderTopEndRadius: 10,
  paddingHorizontal: 8,
  marginTop: 25
},
});

export default CampaignsCard ;