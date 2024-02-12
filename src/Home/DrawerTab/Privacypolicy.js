import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import color from '../../Assets/colors/colors';

import Header from '../../Component/Header';
const Privacypolicy = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <>
      <Header Text="Privacy Policy" />
      <ScrollView style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
          }}>
          <View style={styles.card}>
            <Text style={styles.innerText}>Privacy Policy</Text>
            <Text style={styles.cardText}>
              Information shall be handled based on the principle of
              confidentiality, so it is stored securely and accessed by
              authorised individuals only. We are committed to implementing and
              maintaining appropriate technical, security and organizational
              measures to protect personal data against unauthorized or unlawful
              processing and use, and against accidental loss, destruction,
              damage, theft or disclosure, such as:{'\n'}- We limit access to
              information on a need-to-know basis and take appropriate measures
              to ensure that our people are aware that such information is only
              used in accordance with this Privacy Notice.{'\n'}- We undertake
              regular reviews of who has access to information that we hold to
              ensure that your information is only accessible by appropriately
              trained staff, volunteers and contractors. {'\n'}- Our online
              forms are always encrypted and our network is protected and
              routinely monitored.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Privacypolicy;

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
