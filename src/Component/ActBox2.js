import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {width} from 'react-native-dimension';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
const ActBox2 = props => {
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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textheading}>{props.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name="person" size={20} style={styles.iconStyle} />
                <Text style={{fontWeight: 'bold'}}>10</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 18}}>
              <Icon name="location-on" size={20} style={styles.iconStyle} />
              <Text style={{fontSize: 17}}>Rawalpindi</Text>
            </View>

            {/* <Text style={styles.contentStyle}>{props.description}</Text> */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '98%',
                marginTop: '5%',
              }}>
              <View style={styles.iconCont}>
                <Icon
                  name="calendar-today"
                  size={19}
                  style={styles.iconStyle}
                />
                <Text style={styles.iconText}>{props.event_date}</Text>
              </View>

              <View style={styles.iconCont}>
                <Icon name="watch-later" size={19} style={styles.iconStyle} />
                <Text style={styles.iconText}>{props.event_end_date}</Text>
              </View>
            </View>

            {/* <View style={styles.iconCont}>
              <Icon name="location-on" size={17} style={styles.iconStyle} />
              <Text style={styles.iconText}>{props.adress}</Text>
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
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
    fontSize: 22,
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
    fontSize: 17,
    paddingLeft: 5,
    color: color.default,
  },
  iconStyle: {
    color: color.btnColor,
  },
});

export default ActBox2;
