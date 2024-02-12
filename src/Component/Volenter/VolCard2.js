import React from 'react';
import { View, ScrollView, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import { Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { width } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../Assets/colors/colors';
const VolCard2 = () => {
return (
<>
   <View style={styles.card}>
      <LinearGradient colors={[color.linTopClr, color.linMidClr, color.linBotClr]} style={styles.linearGradient}>
        <View style={styles.dateContStyle} >
          <Text style={styles.dateText}>02</Text>
          <Text style={styles.dateText}>Dec</Text>
          <Text style={styles.dateText}>2022 </Text>
        </View >
      </LinearGradient>
      <View style={styles.cardCont}>
          <Text style={styles.volText}>Volenter</Text>
         <Text style={styles.timeStyle}>9:00AM - 12:00PM</Text>
         <Text  style={styles.dateStyle}>25/12</Text>
      </View>
      <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Full</Text>
         </TouchableOpacity>
      </View>
   </View>
</>
);
};
const styles = StyleSheet.create({
  linearGradient:{
    width: '35%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  card:{
    backgroundColor:"#fff",
    width:"99%",
    borderRadius:12,
    elevation: 1,
    flexDirection: 'row',
  },
  cardCont:{
    width:"44%",
    marginLeft:"3%",
  },
  dateText:{
    color: color.white, 
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'center'
  },
  dateContStyle:{
    width:"100%",
    textAlign: 'center'
  },
  timeStyle:{
    width:"100%",
    flexWrap:"wrap",
    color: color.default, 
    fontSize: 16,
    paddingVertical: 8
    },
  dateStyle:{
      color: color.default, 
      fontSize: 16, 
      paddingBottom: 20
    },
  volText:{
      color: color.btnColor, 
      fontSize: 20,
      fontWeight: "bold",
      paddingTop: 15
    },
  buttonContainer:{
      width: '22%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginRight: 10,
      marginBottom: 10
    },
  loginBtn:{
      backgroundColor: color.lightGray,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      width: '100%'
    },
  loginText:{
      fontSize: 17,
      fontWeight: 'bold',
      color: color.white
    },
  });
export default VolCard2;