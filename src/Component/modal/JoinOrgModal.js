import React from 'react';
import {useState} from 'react';
import {
  Alert,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Assets/colors/colors';
import normalize from 'react-native-normalize';
import Modal from 'react-native-modal';

const ModalDesign = () => {
  const [alert, setAlert] = useState();
  const showAlert = () => {
    Alert.alert('You need to...');
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Modal
        transparent={true}
        isVisible={isModalVisible}
        style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Icon
              name="check-circle"
              style={styles.iconStyle}
              onPress={toggleModal}
            />
            <Text style={styles.modalText}>Organization Joined</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  modalHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  modalText: {
    color: color.btnColor,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  modalBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalView: {
    borderRadius: 12,
    width: '70%',
    alignSelf: 'center',
    backgroundColor: color.white,
  },
  iconStyle: {
    fontSize: 55,
    color: color.btnColor,
    marginTop: -13,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginBtn: {
    backgroundColor: color.purple,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '40%',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
});

export default ModalDesign;
