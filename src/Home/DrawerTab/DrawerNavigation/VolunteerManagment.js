import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Touchable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../Component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackwithoutsearch from '../../../Component/HomeStackwithoutsearch';
import VolunteerManagmentHeader from '../../../Component/Voluntermangementheader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../../Assets/colors/colors';
import {useIsFocused} from '@react-navigation/native';
import style from 'react-native-date-picker-select/style';
import {APIS} from '../../../Apiurls/Apis';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const VolunteerManagment = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [open, setOpen] = useState(false);
  const isFocused = useIsFocused();
  const [data, setData] = useState('');
  const [isloading, setisLoading] = useState(false);
  const GetVoulnteer = () => {
    setisLoading(true);
    var formdata = new FormData();
    formdata.append('user_id', global.userid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(APIS.VolunteerManagement, requestOptions)
      .then(response => response.json())
      .then(({users}) => {
        console.log(users, 'users');
        setData(users), setisLoading(false);
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    GetVoulnteer();
  }, [isFocused]);
  const VolunteerData = ({item}) => {
    return (
      <View style={Styles.maincard}>
        <TouchableOpacity
          style={{
            width: '100%',
            marginBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('CertificateRequest');
          }}></TouchableOpacity>
        <View style={Styles.innerCard}>
          {/* {item.first_name === null || item.last_name === null ? null : (
            <>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item.first_name} {item.last_name}
              </Text>
            </>
          )} */}
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../Assets/volunteer.jpeg')}
              resizeMode="cover"
              style={{width: '29%', height: 115, marginRight: 10}}
            />

            {/* <Image
          
          source={require('../assests/picpro.jpg')}
        /> */}
            <View style={{flexDirection: 'column'}}>
              <View style={Styles.iconviewtwo}>
                <View style={{width: '90%'}}>
                  {item.first_name === null ||
                  item.last_name === null ? null : (
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#1C1C4C',
                      }}>
                      {item.first_name} {item.last_name}
                    </Text>
                  )}
                </View>
                <View style={{marginLeft: 10}}>
                  <Icon
                    name="person"
                    size={32}
                    style={{color: color.btnColor}}
                  />
                </View>
              </View>

              <View style={Styles.iconview}>
                {item.email === null ? null : (
                  <>
                    <Icon
                      name="email"
                      size={17}
                      style={{color: color.btnColor}}
                    />
                    <Text style={Styles.Text}>{item.email}</Text>
                  </>
                )}
              </View>

              <View style={Styles.iconview}>
                {item.city === null ? null : (
                  <>
                    <Icon
                      name="home"
                      size={17}
                      style={{color: color.btnColor}}
                    />
                    <Text style={Styles.Text}>{item.city}</Text>
                  </>
                )}
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={Styles.iconview}>
                  {item.phone === null ? null : (
                    <>
                      <Icon
                        name="local-phone"
                        size={17}
                        style={{color: color.btnColor}}
                      />
                      <Text style={Styles.Text}>{item.phone}</Text>
                    </>
                  )}
                </View>
              </View>
              {/* <View
                style={{
                  height: 29,
                  backgroundColor: '#2c5f70',
                  width: '37%',
                  borderRadius: 50,
                  marginTop: 5,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Assign Certificate
                </Text>
              </View> */}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={Styles.mainContainer}>
      <VolunteerManagmentHeader
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          navigation.navigate('notification');
        }}
      />

      {/* <View
        style={{
          height: 40,
          marginTop: 10,
          flexDirection: 'row',
          marginTop: 10,
          flexDirection: 'row-reverse', 

          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          onPress={() => {
            toggleModal();
          }}>
          <MaterialCommunityIcons
            name="filter"
            size={30}
            style={{color: color.btnColor, marginLeft: 10}}
          />
        </TouchableOpacity>
       

        <Text
          style={{
            color: color.btnColor,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Filter
        </Text>
      </View> */}
      {/* <Modal
          transparent={true}
          isVisible={isModalVisible}
          style={style.modalContainer}
          >
          <View style={{backgroundColor: 'white', height: '30%'}}>
            <View
              style={{
                marginTop: 10,
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: color.purple,
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>
                Filter By:
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              
              }}>
         <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={Styles.buttonContainer}>
                  <TouchableOpacity
                    style={Styles.loginBtn}
                    onPress={() => {
                      toggleModal(false);
                    }}
                    
                    >
                    <Text style={Styles.loginText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>

               
            </View>
          </View>
        </Modal> */}

      {isloading === true ? (
        <View style={Styles.IndicatorView}>
          <ActivityIndicator size={30} color={color.btnColor} />
        </View>
      ) : (
        <View style={{alignSelf: 'center', width: '95%', marginTop: 10}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() =>  navigation.navigate('VolunteerInfo')}>
                <VolunteerData item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default VolunteerManagment;
const Styles = StyleSheet.create({
  maincard: {
    width: '95%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 6,
  },
  mainContainer: {flex: 1, width: '100%'},
  innerCard: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 10,
    width: '10%',
  },
  iconview: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 6,
    width: '90%',
  },
  iconviewtwo: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-between',
    width: '68%',
  },
  Text: {fontSize: 15, paddingLeft: 5, color: color.default},
  IndicatorView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',

    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.white,
  },
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '60%',
  },
});
