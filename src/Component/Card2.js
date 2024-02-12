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
import AlertJoined from './AlertJoined';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import Modal from 'react-native-modal';

const CardDesign = props => {
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
      <View style={styles.card}>
        {/* <Modal
          transparent={true}
          isVisible={isModalVisible}
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginLeft: 0,
            marginRight: 0,
          }}>
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
              <TouchableOpacity style={styles.loginBtn} onPress={toggleModal}>
                <Text style={styles.loginText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
        <View style={styles.contentImg}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: global.imagePath + props.Image,
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentIcon} onPress={props.onPress}>
            <Icon name="person-add" style={styles.userStyle} size={25} />
          </Text>
          <Text style={styles.textheading}>{props.title}</Text>
          <Text style={styles.contentStyle}>{props?.shortDescriptions}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    //flexWrap: 'nowrap',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 12,
    elevation: 1,
    borderTopEndRadius: 10,
    marginVertical: 5,
  },

  contentIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: -10,
  },
  imgStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: '100%',
  },
  contentStyle: {
    width: '100%',
    flexWrap: 'wrap',
    fontSize: 13,
    paddingBottom: 15,
    lineHeight: 17,
  },
  contentImg: {
    width: '35%',
  },
  contentContainer: {
    width: '64%',
    marginLeft: '3%',
  },
  textheading: {
    color: color.btnColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStyle: {
    color: color.btnColor,
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
    marginTop: -15,
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

export default CardDesign;
