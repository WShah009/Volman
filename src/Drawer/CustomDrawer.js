import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { color } from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import {APIS} from '../Apiurls/Apis';
//import Modal from 'react-native-modal';
import { Modal } from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
const Colors = {
  primary: '#1f145c',
  white: '#fff',
  crimson: 'crimson',
  rebeccapurple: 'rebeccapurple',
};
let profile_Image = null;
const CustomDrawer = (props, navigation) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const {image} = useSelector(state => state.OrganizationReducer);
  const isFocused = useIsFocused();
  console.log(image);
  useEffect(() => {}, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
        elevation: 10,
      }}>
      <ImageBackground
        source={require('../Assets/Backgrouddrawer.jpeg')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          opacity:0.9,
        }}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            position: 'absolute',
          }}>
          {image === undefined || image === null || image === '' ? (
            <Image
              source={require('../Assets/profile_image.png')}
              style={{
                width: 120,
                height: 120,
                alignSelf: 'center',
                marginVertical: 15,
                borderWidth: 2,
                borderColor: Colors.white,
                borderRadius: 120,
              }}
            />
          ) : (
            <Image
              source={{uri: global.imagePath + image}}
              style={{
                width: 120,
                height: 120,
                alignSelf: 'center',
                marginVertical: 15,
                borderWidth: 2,
                borderColor: Colors.white,
                borderRadius: 120,
              }}
            />
          )}

          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            {global.Firstname} {global.LastName}
          </Text>
          <Text style={{color: color.gray, fontSize: 8, marginTop: 10}}>
            ________________________________________________________________________
          </Text>
        </View>
        <View style={{marginTop: 180}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
               props.navigation.navigate('main');
             // props.navigation.navigate('Step5');

            }}>
            <Feather name="home" size={30} color={Colors.white} />
            <Text style={styles.Text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              props.navigation.navigate('myproject');
            }}>
            <MaterialCommunityIcons
              name="calendar"
              size={30}
              color={Colors.white}
            />
            <Text style={styles.Text}>Events</Text>
          </TouchableOpacity>

          {global.usertype === '0' ? (
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                props.navigation.navigate('popularevents');
              }}>
              <Fontisto name="line-chart" size={21} color={Colors.white} />
              <Text style={styles.Text}>Popular Events</Text>
            </TouchableOpacity>
          ) : null}

          {/* <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              props.navigation.navigate('settings');
            }}>
            <Feather name="settings" size={27} color={Colors.white} />
            <Text style={styles.Text}>Settings</Text>
          </TouchableOpacity> */}
          {global.usertype === '0' ? null : (
            <>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  props.navigation.navigate('volunteermanagment');
                }}>
                <MaterialIcons name="person" size={30} color={Colors.white} />
                <Text style={styles.Text}>Volunteers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  props.navigation.navigate('settings');
                }}>
                <FontAwesome name="file-text" size={30} color={Colors.white} />
                <Text style={styles.Text}>Reports</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  props.navigation.navigate('Inbox');
                }}>
                <MaterialIcons
                  name="message"
                  size={30}
                  color={Colors.white}
                />
                <Text style={styles.Text}>Inbox</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  props.navigation.navigate('supporthours');
                }}>
                <SimpleLineIcons
                  name="support"
                  size={27}
                  color={Colors.white}
                />
                <Text style={styles.Text}>Support Hours</Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  props.navigation.navigate('Certificate');
                }}>
                <MaterialCommunityIcons
                  name="certificate-outline"
                  size={27}
                  color={Colors.white}
                />
                <Text style={styles.Text}>Certification</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  //addorganization
                  props.navigation.navigate('addorganization');
                }}>
                <Octicons name="organization" size={30} color={Colors.white} />
                <Text style={styles.Text}>Organization Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  props.navigation.navigate('ConatactSupport');
                }}>
                <MaterialCommunityIcons
                  name="face-man-outline"
                  size={30}
                  color={Colors.white}
                />
                <Text style={styles.Text}>Contact Support</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  //addorganization
                  props.navigation.navigate('addevents');
                }}>
                <Octicons name="organization" size={27} color={Colors.white} />
                <Text style={styles.Text}>Add Events</Text>
              </TouchableOpacity> */}
            </>
          )}
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              props.navigation.navigate('settings');
            }}>
            <Feather name="settings" size={30} color={Colors.white} />
            <Text style={styles.Text}>Settings</Text>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              height: 1,
              marginTop: '48%',
            }}
          />

          <TouchableOpacity
            onPress={() => {
              toggleModal(true);
              props.navigation.navigate('LoginScreen');
            }}
            style={{
              marginStart: 30,
              marginTop: global.usertype === '0' ? 25 : '5%',
              flexDirection: 'row',
            }}>
            <SimpleLineIcons name="logout" size={30} color={Colors.white} />
            <Text style={styles.Text}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Modal isVisible={isModalVisible}>
            <View
              style={{
                Height: '30%',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 50,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>
                Are you sure you want to logout?
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  width: '50%',
                  justifyContent: 'space-between',
                  marginTop: 25,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('LoginScreen');
                  }}>
                  <Text>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleModal}>
                  <Text>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginStart: 30,
    marginTop: 80,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button1: {
    marginStart: 30,
    marginTop: 20,

    flexDirection: 'row',
  },
  Text: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 10,
    color: Colors.white,
  },
});

export default CustomDrawer;
