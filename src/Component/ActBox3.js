import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {width} from 'react-native-dimension';
import color from '../Assets/colors/colors';
import Antdesgin from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
const ActBox3 = props => {
  return (
    <>
      <View style={[styles.container, props.stylecontainer]}>
        <View style={styles.card}>
          <View style={styles.contentImg}>
            <Image
              style={styles.imgStyle}
              source={{
                uri: global.imagePath + props.image,
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.textheading}>{props.title}</Text>
            <Text style={styles.contentStyle}>{props.description}</Text>
            <View style={styles.iconCont}>
              <Icon name="watch-later" size={15} style={styles.iconStyle} />
              <Text style={styles.iconText}>{props.event_date}</Text>
            </View>
            <View style={styles.iconCont}>
              <Icon name="location-on" size={17} style={styles.iconStyle} />
              <Text style={styles.iconText}>{props.adress}</Text>
            </View>
            <Antdesgin
              name={props.iconheart}
              size={20}
              style={styles.iconStyle1}
              onPress={props.onPressIcon}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 15,
    elevation: 0,
  },

  contentIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: -10,
  },
  imgStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: '100%',
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
    fontSize: 15,
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
    fontSize: 12,
    paddingLeft: 5,
    color: color.default,
  },
  iconStyle1: {
    color: color.btnColor,
    alignSelf: 'flex-end',
  },
  iconStyle: {
    color: color.btnColor,
  },
});

export default ActBox3;
