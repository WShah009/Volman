
  import { StyleSheet, Text, View ,ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Assets/colors/colors';
import TagsInput from '../../Component/input/TagsInput';

const MyInterest = () => {
  return (
    <ScrollView style={styles.container}>  
        <View style={styles.myInterestCont}>
          <Text style={styles.leftText}>My Cause</Text>
          <Icon name="edit" style={styles.iconStyle}/>
        </View>
        <View style={[styles.myInterestCont,styles.tagsStyle]}>
          <Text style={styles.leftText}>My Tags</Text>
        </View>
        <TagsInput
                  placeholder="Search and Add Skills, Talents, etc."
                  placeholderTextColor="#444444"
                />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginBtn}  >
              <Text style={styles.loginText}>Save</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15
  },
  myInterestCont: {
        borderRadius: 10,
        fontSize: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
  },
  iconStyle:{
    color: color.btnColor,
    fontSize: 22,
    marginLeft: 7
  },
  leftText:{
    fontSize: 16,
    fontWeight: "bold",
    marginVertical:15,
    color: color.btnColor,
  },
  tagsStyle:{
    marginTop: 30
  },
  buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  loginBtn:{
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '45%'
  },
  loginText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white
  },
});


export default MyInterest