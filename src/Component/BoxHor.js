import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
const BoxHor = () => {
return (
  <>
    <ScrollView>

        
        
      <View style={styles.foo}>
     
          
       
       <View style={styles.cardp1} >
       <Image style={[styles.footer1,styles.boarder]}
            source={{
              uri:
                'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=',}}
          />
      </View >
       <View style={styles.cardp2}>


       <Text style={styles.cardp2icon} >
          <Icon name="person-add" size={22}  />
          </Text>  

          <View style={styles.cardp2iconsetting}>
        
      
      <View>
      <Text style={styles.textheading} >
          text
     
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
foo:{

   flex:1,
   flexDirection:"row",
   backgroundColor:"#fFF",
    marginBottom:10,
    marginLeft:"1%",
    marginRight:"1%",
    width:"98%",
    padding:5,
    borderRadius:10,
    height:165,
   
},

cardp2icon:{
 paddingLeft:"90%",
 WIDTH:"40%",
 
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

export default BoxHor;