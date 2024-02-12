import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';

const EventCard = props => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titleStyle}>Details</Text>
          <Text style={styles.contentStyle}>{props.description}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    paddingRight: 12,
    borderTopEndRadius: 10,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.btnColor,
    marginTop: 15,
    marginBottom: 7,
  },
  contentStyle: {
    fontSize: 14,
    color: color.default,
    lineHeight: 22,
    marginVertical: 5,
  },
});

export default EventCard;
