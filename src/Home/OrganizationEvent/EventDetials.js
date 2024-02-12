import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InfoCard from '../../Component/InfoCard';
import EventCard from '../../Component/EventCard';
import Header from '../../Component/Header';
const EventDetials = ({route}) => {
  const {desc, title} = route.params;
  return (
    <View>
      <Header Text={title} />
      <EventCard description={desc} />
    </View>
  );
};

export default EventDetials;

const styles = StyleSheet.create({});
