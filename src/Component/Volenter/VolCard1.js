import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../Assets/colors/colors';
import ModalDesign from '../modal/JoinOrgModal';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {APIS} from '../../Apiurls/Apis';
const VolCard1 = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const navigation = useNavigation();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleSuccessModal = () => {
    setSuccessModalVisible(!isSuccessModalVisible);
  };
  const JoinEvent = (eventid, role) => {
    if (role === '') {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Enter Role', ToastAndroid.SHORT);
      } else {
        alert('Successfully Saved');
      }
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Cookie', 'PHPSESSID=e8dc1269cf42c7a86d6d79aa1eddd937');
      var formdata = new FormData();
      formdata.append('user_id', global.userid);
      formdata.append('event_id', eventid);
      formdata.append('org_id', global.org_id);
      formdata.append('role', role);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      fetch(APIS.MemberJoinEvents, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  };
  return (
    <>
      <View style={styles.card}>
        <Modal
          transparent={true}
          isVisible={isModalVisible}
          style={styles.modalContainer}>
          <View style={styles.modalView}>
            <LinearGradient
              colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
              style={styles.linearGradientModal}>
              <Text style={styles.modalText}>Summary</Text>
              <View style={styles.iconCont}>
                <Icon
                  name="cancel"
                  style={styles.iconStyle}
                  onPress={toggleModal}
                />
              </View>
            </LinearGradient>
            <View style={styles.modalBody}>
              <Text style={styles.volStyle}>{props.title}</Text>
              <Text style={styles.timeStyle}>
                {props.start_time} - {props.end_time}
              </Text>
              {/* <Text style={styles.volStyle}>25/12</Text> */}
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={() => {
                  JoinEvent(props.eventid, props.role);
                  if (props.role != '') {
                    setTimeout(() => {
                      toggleSuccessModal();
                    }, 500);
                  } else {
                    if (Platform.OS === 'android') {
                      ToastAndroid.show('Enter Role', ToastAndroid.SHORT);
                    } else {
                      alert('Enter Role');
                    }
                  }
                }}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={isSuccessModalVisible}
          style={styles.modalContainer}>
          <View style={styles.modalView}>
            <LinearGradient
              colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
              style={styles.linearGradientModal}>
              <Text style={styles.modalText}>Success</Text>
              <View style={styles.iconCont}>
                <Icon
                  name="cancel"
                  style={styles.iconStyle}
                  onPress={toggleSuccessModal}
                />
              </View>
            </LinearGradient>
            <View style={styles.successmodalBody}>
              <Icon name="access-time" style={styles.crossIcon} />
              <Text style={styles.pendAppr}>Pending Approval</Text>
              <Text style={styles.anEmail}>
                An Eamil has been sent to you from STERLING Volunteers with a
                link to complete your background check.
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={() => {
                  toggleSuccessModal(), navigation.goBack();
                }}>
                <Text style={styles.confirmText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <LinearGradient
          colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
          style={styles.linearGradient}>
          <View style={styles.dateContStyle}>
            <Text style={styles.dateText}>{props.day}</Text>
            <Text style={styles.dateText}>{props.month}</Text>
            <Text style={styles.dateText}>{props.year} </Text>
          </View>
        </LinearGradient>
        <View style={styles.cardCont}>
          <Text style={styles.volText}>{props.title}</Text>
          <Text style={styles.timeStyle}>
            {props.start_time} - {props.end_time}
          </Text>
          {/* <Text style={styles.dateStyle}>25/12</Text> */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={toggleModal}>
            <Text style={styles.loginText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    width: '35%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  linearGradientModal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  card: {
    backgroundColor: '#fff',
    width: '99%',
    borderRadius: 12,
    elevation: 1,
    flexDirection: 'row',
  },
  cardCont: {
    width: '44%',
    marginLeft: '3%',
  },
  dateText: {
    color: color.white,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateContStyle: {
    width: '100%',
    textAlign: 'center',
  },
  timeStyle: {
    width: '100%',
    flexWrap: 'wrap',
    color: color.default,
    fontSize: 16,
    paddingVertical: 8,
  },
  dateStyle: {
    color: color.default,
    fontSize: 16,
    paddingBottom: 20,
  },
  volText: {
    color: color.btnColor,
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  buttonContainer: {
    width: '22%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
  loginBtn: {
    backgroundColor: color.btnColor,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '100%',
  },
  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: color.white,
  },
  modalContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  modalHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  modalText: {
    color: color.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    width: '62%',
    alignSelf: 'flex-end',
  },
  iconCont: {
    width: '38%',
  },
  iconStyle: {
    fontSize: 25,
    color: color.white,
    position: 'absolute',
    right: 5,
    top: -12,
  },
  modalBody: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  modalView: {
    borderRadius: 12,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: color.white,
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmBtn: {
    backgroundColor: color.purple,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '45%',
  },
  confirmText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
  volStyle: {
    color: color.default,
    fontSize: 16,
    fontWeight: '700',
  },
  timeStyle: {
    flexWrap: 'wrap',
    color: color.default,
    fontSize: 16,
    paddingVertical: 8,
    fontWeight: '700',
  },
  successmodalBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  crossIcon: {
    color: color.btnColor,
    fontSize: 50,
  },
  pendAppr: {
    fontWeight: 'bold',
    fontSize: 17,
    color: color.btnColor,
    paddingVertical: 5,
  },
  anEmail: {
    color: color.default,
    marginBottom: 12,
    fontWeight: '700',
    lineHeight: 21,
  },
});
export default VolCard1;
