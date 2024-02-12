import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';
//
const Card5 = props => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.contentImg}>
          <Image
            style={styles.imgStyle}
            source={{uri: global.imagePath + props.img}}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentIcon} onPress={props.onPress}>
            <Icon name="person-add" style={styles.userStyle} size={22} />
          </Text>
          <Text style={styles.textheading}>{props.title}</Text>
          <Text style={styles.contentStyle}>{props.short_description}</Text>
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
    width: '96%',
    borderRadius: 10,
    paddingVertical: 7,
    paddingLeft: 6,
    paddingRight: 15,
    elevation: 1,
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
    paddingBottom: 15,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStyle: {
    color: color.btnColor,
  },
});

export default Card5;
