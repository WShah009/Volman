import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import color from '../Assets/colors/colors';
const CustomJoinedModal = ({visible, closeModal}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
      style={{borderRadius: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <View
          style={{
            marginBottom: 70,
            backgroundColor: '#fff',
            padding: 20,
            elevation: 5,
            width: '70%',
            height: '25%',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/orgtick.png')}
            style={{marginTop: -100}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              marginTop: 20,
              fontWeight: 'bold',
              color: color.darkBlue,
            }}>
            Organization Joined
          </Text>

          <TouchableOpacity
            onPress={closeModal}
            style={{
              position: 'absolute',
              bottom: 20,
              //   right: '50%',
              backgroundColor: color.myblue,
              borderRadius: 15,
              padding: 10,
              width: 120,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              color: color.white,
            }}>
            <Text
              style={{
                fontSize: 22,
                marginTop: -6,
                fontWeight: '900',
              }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default CustomJoinedModal;
