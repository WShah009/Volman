import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../../Component/Header';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NotificationHeader from '../../Component/NotificationHeader';
import Modal from 'react-native-modal';
import normalize from 'react-native-normalize';
const products = [
  {
    id: 1,
    name: 'Peterson',
    description: 'The React Native Element Text is use For show string data',
    time: '10:00 AM',
  },
  {
    id: 2,
    name: 'Cancer',
    description: 'The React Native Element Text is use For show string data',
    time: '1:00 PM',
  },
  {
    id: 3,
    name: 'Health Institute',
    description: 'The React Native Element Text is use For show string data',
    time: '11:00 AM',
  },
];
const Notification = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [data, setData] = useState();
  const Notifications = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=r401kr29ocfrvv38emv2f0pcf0');

    var formdata = new FormData();
    formdata.append('userid', global.userid);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    await fetch(
      'https://fisdemoprojects.com/volmanNew/api/show-event-notification.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(({notifications}) => {
        console.log(notifications, 'NOTIFICATION');
        if (notifications) {
          setData(notifications);
        }
      })
      .catch(error => console.log('error', error));
  };
  const updateNotification = async id => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=r401kr29ocfrvv38emv2f0pcf0');

    var formdata = new FormData();
    formdata.append('id', id);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    await fetch(
      'https://fisdemoprojects.com/volmanNew/api/update-notification-status.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.response_desc) {
          Notifications();
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    Notifications();
  }, []);
  const ProductItem = ({item}) => {
    return (
      <View
        onPress={() => {
          updateNotification(item.id);
        }}
        style={{
          width: '100%',
          height: 95,

          flexDirection: 'row',
          backgroundColor: 'white',

          marginTop: 4,

          elevation: 3,
        }}>
        <Image
          source={require('../../Assets/volunteer.jpeg')}
          resizeMode="cover"
          style={{width: '25%', height: 83, marginTop: 10}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '80%',
            }}>
            <Text
              style={{
                color: color.blueGreen,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Saim Ali{' '}
            </Text>

            <Text style={{color: color.black, fontSize: 18}}>Just Now</Text>

            {/* <Text style={{fontSize: 15, fontWeight: 'bold',color:color.black}}>
            {item.org_name} add a new Event {item.Notification}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', color: color.black}}>
            {item.description}
          </Text> */}
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 4,
              }}></View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="watch-later"
                size={15}
                style={{color: color.btnColor}}
              />
              <Text
                style={{fontSize: 12, paddingLeft: 5, color: color.default}}>
                {item.Created_at}
              </Text>
            </View>
          </View> */}
          </View>

          <Text
            style={{
              color: color.black,
              fontSize: 18,
              marginRight: '-75%',
              marginTop: -20,
            }}>
            Join Oganization
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <NotificationHeader Text="Notifications" />
      <View>
        <Text
          style={{
            color: color.linBotClr,
            fontSize: 20,
            fontWeight: 'bold',
            margin: 10,
          }}>
          Today
        </Text>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={toggleModal}>
              <ProductItem item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal
        transparent={true}
        isVisible={isModalVisible}
        style={styles.modalContainer}>
        <View style={{backgroundColor: 'white', borderRadius: 10}}>
          {/* <LinearGradient
            colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
            style={styles.lineargradientmodal}>
            <Icon
              name="close"
              size={25}
              style={{color: 'white'}}
              onPress={() => {
                toggleModal(false);
              }}
            />
          </LinearGradient> */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../../Assets/volunteer.jpeg')}
              resizeMode="cover"
              style={{
                width: '25%',
                height: 100,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 10,
                opacity: 10,
              }}
            />
            <Text
              style={{color: color.purple, fontSize: 22, fontWeight: 'bold'}}>
              Malik Umar
            </Text>
            <Text style={{color: color.black, fontSize: 20}}>Joins Event</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  toggleModal(false);
                }}>
                <Text style={styles.loginText}>Accept</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginBtndelete}
                onPress={() => {
                  toggleModal(false);
                }}>
                <Text style={styles.loginText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginBottom: '5%'}} />
        </View>
      </Modal>
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: normalize(65),
    elevation: 0,
    paddingHorizontal: 12,
    textAlign: 'center',
    zIndex: -60,
  },
  lineargradientmodal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: normalize(45),
    elevation: 0,
    paddingHorizontal: 12,
    textAlign: 'center',
    zIndex: -60,
  },

  rightCont: {
    flexDirection: 'row',
  },
  notIcon: {
    marginLeft: 5,
  },
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '65%',
  },
  loginBtndelete: {
    paddingHorizontal: 20,
    backgroundColor: color.red,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '65%',
  },
  buttonContainer: {
    width: '50%',

    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.white,
  },
});
