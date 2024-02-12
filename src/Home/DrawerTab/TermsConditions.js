import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import color from '../../Assets/colors/colors';
import Header from '../../Component/Header';
const TermsConditions = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <>
      <Header Text="Terms & Conditions" />
      <ScrollView style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
          }}>
          <View style={styles.card}>
            <Text style={styles.innerText}>Terms & Conditions</Text>
            <Text style={styles.cardText}>
              As a registered volunteer for the U.S. Fund for UNICEF and for all
              volunteer related events and activities, you do hereby discharge
              the U.S. Fund for UNICEF, the event site, their management,
              officers, board members, employees, members, sponsors, volunteers,
              representatives and their successors, and all cooperating
              businesses and organizations, from all claims of damages, demands,
              actions and causes whatsoever in any manner arising from or
              growing out of your participation in a U.S. Fund for UNICEF
              activity, event or fundraiser. {'\n'}I will conduct all volunteer
              activities with high standards, professionalism, and good taste,
              and will do nothing to cause detriment to the reputation or good
              will of the U.S. Fund for UNICEF or UNICEF. {'\n'}Any
              contributions to the U.S. Fund for UNICEF (“USF”) that I receive
              (“Individual Contributions”) and any contributions that I make
              will be sent to USF no later than thirty days following the
              conclusion of the activity. All contributions will be paid in
              United States dollars, checks or money orders will be made payable
              to “U.S. Fund for UNICEF” and sent to: U.S. Fund for UNICEF, 125
              Maiden Lane, New York, New York, 10038 Attention: Volunteer and
              Community Partnerships.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TermsConditions;

const styles = StyleSheet.create({
  footer01: {
    width: '100%',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    fontSize: 17,
    fontFamily: 'Segoe UI, Regular',
  },
  innerText: {
    color: color.btnColor,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 8,
  },

  container: {
    backgroundColor: color.bodyColor,
  },
  cardText: {
    color: color.default,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },

  card: {
    backgroundColor: 'transparent',
    width: '90%',
    borderRadius: 10,
    elevation: 0,
    borderTopEndRadius: 10,
    marginTop: 25,
    paddingHorizontal: 12,

    paddingVertical: 10,
  },
});
