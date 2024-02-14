import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import color from '../Assets/colors/colors';

const CustomActiveCard = ({name, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/farm.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity>
            <Image
              source={require('../Assets/joinorg.png')}
              style={styles.joinOrgImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Image
              source={require('../Assets/date.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>12 jan 2024</Text>
          </View>
          <View style={styles.infoRow}>
            <Image
              source={require('../Assets/map-location.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>Philadelphia</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    height: 125,
    elevation: 5, // Android shadow elevation
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    width: '35%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
  },
  joinOrgImage: {
    width: 29,
    height: 24,
  },
  description: {
    color: 'grey',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  infoIcon: {
    tintColor: color.myblue,
    marginRight: 4,
    width: 16,
    height: 16,
  },
  infoText: {
    color: color.myblue,
  },
});

export default CustomActiveCard;
