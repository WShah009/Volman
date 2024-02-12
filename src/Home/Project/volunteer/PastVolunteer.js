import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../../Assets/colors/colors';

const PendingVolunteer = () => {
  return (
    <ScrollView style={styles.container}>      
      <View style={styles.myInterestCont}>
          <Text style={styles.leftText}>You haven't Volunteered with Volman yet.</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: color.bodyColor,
  },
  myInterestCont: {
        borderRadius: 10,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
  },
  leftText:{
    fontSize: 15,
    color: color.default,
    marginVertical: 5,
  },

});

export default PendingVolunteer