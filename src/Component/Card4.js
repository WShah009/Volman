import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Card4 = () => {
return (
  <>
    <ScrollView>

        
        
      <View style={styles.card}>
     
          
       
       <View style={styles.cardp1} >
       <Image style={[styles.footer1,styles.boarder]}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8D3XaS45MiAhxp_JrtMZkCjct9uLCuF0vA&usqp=CAU',}}
          />
      </View >
       <View style={styles.cardp2}>


       <Text style={styles.cardp2icon} >
          <Icon name="person-add" size={22}  />
          </Text>  

          <View style={styles.cardp2iconsetting}>
        
      
      <View>
      <Text style={styles.textheading} >
          Us Hunger
     
          </Text>
   
          </View>
         
         
          </View>
          
            <Text style={[styles.footer1,styles.footer01]} >
            The idea with React Native Elements 
            The idea with React Native Elements 
            The idea with React Native Elements 
            </Text>
        
          
    </View>
        
   

       </View>
  
    
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
  card:{

   flex:1,
   flexDirection:"row",
   backgroundColor:"#fFF",
    marginLeft :"1%",
    marginRight:"1%",
    padding:5,
    borderRadius:10,
    height:165,
    width:"98%",
},

cardp2icon:{
  paddingLeft:"85%",
 WIDTH:"40%",
 
},
boarder:{
  // backgroundColor: "pink",
  borderWidth: 5,
  borderBottomLeftRadius: 10,
  borderTopLeftRadius:10,
  
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

},
cardp2:{
  // backgroundColor:"green",
  width:"64%",
  marginLeft:"2%",
  },
  cardp2iconsetting:{
   
  },





textheading:{
  color: '#272071', 
  fontSize: 18,
 lineHeight: 20,
 fontWeight: "bold",
//  paddingBottom:10,
//  marginBottom:"0.4%",
},

icon1:{}




});

export default Card4;