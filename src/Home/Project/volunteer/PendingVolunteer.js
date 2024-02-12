import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../../Assets/colors/colors';
import VolunteerCard from '../../../Component/VolunteerCard';

const PendingVolunteer = () => {
  return (
    <ScrollView style={styles.container}>      
      <VolunteerCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: color.bodyColor,
  },

});

export default PendingVolunteer