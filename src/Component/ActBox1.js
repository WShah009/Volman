import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { width } from 'react-native-dimension';
import color from '../Assets/colors/colors';

const ActBox1 = () => {
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
            <Text style={styles.contentIcon}>
                <Icon name="person-add" style={styles.userStyle} size={22}  />
            </Text>
            <Text style={styles.textheading}>US Hunger</Text>
            <Text style={styles.contentStyle} >
                The idea with React Native Elements. The idea with React Native Elements.
            </Text>
            <View style={styles.iconCont}>
                <Icon name="watch-later" size={15} style={styles.iconStyle} />
                <Text style={styles.iconText}>Anytime</Text>
            </View>
            <View style={styles.iconCont}>
                <Icon name="location-on" size={17}  style={styles.iconStyle} />
                <Text style={styles.iconText}>Scheme 3 Rawalpindi</Text>
            </View>
          </View>
       </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
foo:{

   flex:1,
   flexDirection:"row",
  //  backgroundColor:"pink",
    marginBottom:10,
    marginLeft:"1%",
    marginRight:"1%",
    width:"98%",
    padding:5,
    borderRadius:10,
    height:165,
 
},

cardp2icon:{
  paddingLeft:"85%",
 WIDTH:"40%",
//  backgroundColor:"orange", 
},
boarder:{
  // backgroundColor: "pink",
  borderWidth: 5,
  borderBottomLeftRadius: 20,
  borderTopLeftRadius:20,
  
},




footer1:{
   width:"100%",
   height:155,
   marginRight:30,
   flexWrap:"wrap",
 },
cardp1:{
  // backgroundColor:"red",
  width:"35%",
  // backgroundColor:"green", 

},
cardp2:{
  // backgroundColor:"green",
  width:"64%",
  marginLeft:"2%",
  // backgroundColor:"yellow", 
  height:"100%",
  },
  cardp2iconsetting:{
   
  },

textheadingend:{
  color: '#272075', 
  fontSize: 14,
 lineHeight: 22,
 fontWeight: "bold",

},


textheading:{
    color: '#272071', 
    fontSize: 18,
   lineHeight: 20,
   fontWeight: "bold",
  //  paddingBottom:10,
  //  marginBottom:"0.4%",
  },


cardp2end:{
    marginTop:"70%",
},


texthead:{

  marginTop:"14%",
},

contentContainer:{
  width:"64%",
  marginLeft:"3%",
},

card:{
  flex:1,
  flexDirection:"row",
  backgroundColor:"#fff",
  width:"99%",
  borderRadius:10,
  paddingVertical: 5,
  paddingLeft: 5,
  paddingRight: 15,
  elevation: 0,
},

contentIcon:{
justifyContent: 'flex-end',
alignSelf: 'flex-end',
marginBottom: -10
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
width:"35%",
},

textheading:{
  color: '#272071', 
  fontSize: 15,
  fontWeight: "bold",

},
userStyle:{
  color: color.btnColor,
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
}

});

export default ActBox1;