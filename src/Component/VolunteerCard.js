import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { width } from 'react-native-dimension';
import color from '../Assets/colors/colors';

const VolunteerCard = () => {
return (
  <>
    <ScrollView style={styles.container}>
        <View style={styles.card}>
            <View style={styles.contentImg} >
                <Image style={styles.imgStyle}
                    source={{
                    uri: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt',}}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.textheading}>US Hunger</Text>
                <View style={styles.iconCont}>
                    <Icon name="watch-later" size={15} style={styles.iconStyle} />
                    <Text style={styles.iconText}>Anytime</Text>
                </View>
                <View style={styles.iconCont}>
                    <Icon name="location-on" size={17}  style={styles.iconStyle} />
                    <Text style={styles.iconText}>Scheme 3 Rawalpindi</Text>
                </View>
            </View>
            <View style={styles.contentIcon}>
                <Icon name="arrow-forward" style={styles.userStyle} size={22}  />
            </View>
       </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({


textheading:{
    color: '#272071', 
    fontSize: 18,
   lineHeight: 20,
   fontWeight: "bold",
  },

contentContainer:{
  width:"60%",
  marginLeft:"3%",
  paddingVertical: 5
},

card:{
  flexDirection:"row",
  backgroundColor:"#fff",
  borderRadius:10,
  paddingVertical: 5,
  paddingLeft: 5,
  paddingRight: 15,
  elevation: 0,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: 20
},


imgStyle:{
    borderBottomLeftRadius: 10,
    borderTopLeftRadius:10,
    height: '100%'
},
contentStyle:{
    width:"100%",
    flexWrap:"wrap",
    fontSize: 13,
    lineHeight: 17
},
contentImg:{
    width:"29%",
},

textheading:{
  color: '#272071', 
  fontSize: 15,
  fontWeight: "bold",

},
userStyle:{
  color: color.btnColor,
  fontSize: 18
},
iconCont:{
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 4
},
iconText:{
  fontSize: 12,
  paddingLeft: 5,
  color: color.default
},
iconStyle:{
  color: color.btnColor
},
contentIcon:{
  width: '6%'
}

});

export default VolunteerCard;