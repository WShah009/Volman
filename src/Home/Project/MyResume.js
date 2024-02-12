import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Assets/colors/colors';
import VolunteerHistoryNav from '../../Navigation/VolunteerHistoryTab';

const MyResume = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.myInterestCont}>
        <View style={styles.leftCont}>
          <Icon name="outlined-flag" style={styles.iconStyle} />
          <Text style={styles.leftText}>Serving Date</Text>
        </View>
        <Text style={styles.leftText}>0</Text>
      </View>
      <View style={styles.myInterestCont}>
        <View style={styles.leftCont}>
          <Icon name="watch-later" style={styles.iconStyle} />
          <Text style={styles.leftText}>Hours</Text>
        </View>
        <Text style={styles.leftText}>0</Text>
      </View>
      <View style={styles.myInterestCont}>
        <View style={styles.leftCont}>
          <Icon name="credit-card" style={styles.iconStyle} />
          <Text style={styles.leftText}>Impact</Text>
        </View>
        <Text style={styles.leftText}>0</Text>
      </View>
      <Text style={styles.volenteerText}>Volunteer History</Text>
      <VolunteerHistoryNav />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15,
  },
  myInterestCont: {
    borderRadius: 10,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  leftCont: {
    fontSize: 14,
    color: color.default,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    color: color.btnColor,
    fontSize: 23,
    marginRight: 7,
  },
  leftText: {
    fontSize: 15,
    color: color.default,
  },
  volenteerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.btnColor,
    marginTop: 25,
  },
});

export default MyResume;
