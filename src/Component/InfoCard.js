import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';

const InfoCard = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.innerText}>About {props.title}</Text>
        <Text style={styles.cardText}>{props.desc}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer01: {
    width: '100%',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    fontSize: 17,
    fontFamily: 'Segoe UI, Regular',
  },
  innerText: {
    color: color.btnColor,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 8,
  },

  container: {
    backgroundColor: color.bodyColor,
  },
  cardText: {
    color: color.default,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },

  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    elevation: 0,
    borderTopEndRadius: 10,
    marginTop: 25,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});

export default InfoCard;
