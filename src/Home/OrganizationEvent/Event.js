import {
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import {React, useState} from 'react';
import BoxHor from '../../Component/BoxHor';
import TopTab from '../../Navigation/TopTab';
import OrgnInfo from '../../Navigation/OrgnInfo';
import TabNavigate from '../../Navigation/Tabnavigate';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';
import color from '../../Assets/colors/colors';
import Header from '../../Component/Header';
import CheckBox1 from '@react-native-community/checkbox';
import {Linking} from 'react-native';

const Event = ({route}) => {
  const phoneNumber = '1234567890';

  const handleFemaleCheck = () => {
    setMaleChecked(false);
    setFemaleChecked(true);
  };

  const handleMaleCheck = () => {
    setMaleChecked(true);
    setFemaleChecked(false);
  };

  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const {
    title,
    date,
    description,
    img,
    id,
    end_time,
    start_time,
    // latitude,
    address,
    //longitude,
  } = route.params;
  console.log(end_time, 'Event ID');
  const navigation = useNavigation();
  return (
    <>
      <Header Text={title} />
      <ScrollView>
        <View style={styles.primoCont}>
          <Image
            style={styles.eventImg}
            source={{
              uri: global.imagePath + img,
            }}
          />
          <Text style={styles.primoCenter}>{title}</Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              Linking.openURL(`tel:${phoneNumber}`);
              // navigation.navigate('HomeBottomTab');
            }}>
            <Icon name="person" style={styles.userStyle} size={22} />
            <Text style={styles.orgText}>Contact Organizer</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${phoneNumber}`);
            }}>
            <Text style={[styles.orgText, {textAlign: 'center'}]}>
              {phoneNumber}
            </Text>
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          style={styles.centerDetails}
          onPress={() => {
            navigation.navigate('Primo Center', {
              desc: description,
              title: title,
            });
          }}>
          <Text style={styles.centerDetailsText}>{title} Details</Text>
          <Icon name="arrow-forward" style={styles.arrowStyle} size={22} />
        </TouchableOpacity>
        <View style={styles.primoCont}>
          <View style={styles.dateContainer}>
            <View style={[styles.dateCont, {marginBottom: 10}]}>
              <Icon name="calendar-today" size={23} color={color.btnColor} />
              <Text style={styles.dateText}>
                {date} {start_time}
              </Text>
            </View>
            <View style={styles.dateCont}>
              <Icon name="calendar-today" size={23} color={color.btnColor} />
              <Text style={styles.dateText}>
                {date}
                {end_time}
              </Text>
            </View>
          </View>
          {/* <View style={styles.iconCont}>
            <Icon name="location-on" size={22} color={color.btnColor} />
            <Text style={styles.addressText}> {address} </Text>
          </View> */}
          <Text style={styles.causeText}>Type of Event</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtnevent}>
              <Text style={styles.houseText}>Houseless</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtnevent}>
              <Text style={styles.houseText}>Community & Neighborhood</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.reqText}>Requirement</Text>
          <View style={styles.requirementContainer}>
            <View style={styles.reqContent}>
              <Icon name="person" size={22} style={styles.reqIcon} />
              <Text style={styles.addressText}> Minimum Age 18+</Text>
            </View>

            {/* <View style={styles.reqContent}>
              <Icon name="lock" size={22} style={styles.reqIcon} />
              <Text style={styles.addressText}> Organizor Approval</Text>
            </View> */}

            <View style={{marginRight: '20%'}}>
              <View>
                <Text style={[styles.addressText, {marginBottom: 10}]}>
                  Gender
                </Text>
                <Text style={{color: color.default, fontSize: 13}}>Female</Text>
              </View>
              {/* <View style={styles.gender1}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CheckBox1
                    value={maleChecked}
                    onValueChange={() => {
                      handleMaleCheck();
                      //setFieldValue('gender', 0);
                    }}
                  />
                  <Text style={styles.loginText1}> Male </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CheckBox1
                    value={femaleChecked}
                    onValueChange={() => {
                      handleFemaleCheck();
                      //setFieldValue('gender', 1);
                    }}
                  />
                  <Text style={styles.loginText1}> Female </Text>
                </View>
              </View> */}
            </View>

            <View style={styles.reqContent}>
              <Icon name="location-on" size={22} style={styles.reqIcon} />
              <Text style={styles.addressText}>Background Check</Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={styles.centerDetails}
          onPress={() => {
            navigation.navigate('MapScreen', {
              long: longitude,
              lat: latitude,
            });
          }}>
          <Text style={styles.centerDetailsText}>Get Direction</Text>
          <Icon name="arrow-forward" style={styles.arrowStyle} size={22} />
        </TouchableOpacity> */}
        <View style={styles.joinBtnContainer}>
          <TouchableOpacity
            style={styles.joinBtn}
            onPress={() => {
              navigation.navigate('Volenter', {
                eventId: id,
                orgTitle: title,
                eventDate: date,
                endTime: end_time,
                startTime: start_time,
              });
            }}>
            <Text style={styles.joinText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Event;

const styles = StyleSheet.create({
  primoCont: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  eventImg: {
    height: normalize(130),
    width: '100%',
  },
  reqText: {
    color: color.btnColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  primoCenter: {
    color: color.btnColor,
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loginBtn: {
    width: '65%',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.blueGreen,
    borderWidth: 1,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  orgText: {
    color: color.blueGreen,
    fontSize: 17,
    fontWeight: 'bold',
  },
  userStyle: {
    color: color.blueGreen,
    marginRight: 5,
  },

  centerDetails: {
    backgroundColor: color.btnColor,
    color: '#fff',
    marginTop: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  arrowStyle: {
    color: color.white,
  },
  centerDetailsText: {
    color: color.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  dateCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: color.default,
    fontSize: 15,
    marginLeft: 5,
  },
  addressText: {
    color: color.default,
    fontSize: 16,
  },

  GenderStyles: {
    color: color.default,
    fontSize: 16,
  },

  iconCont: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  causeText: {
    color: color.btnColor,
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 18,
  },
  loginBtnevent: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49496e',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  loginText: {
    color: color.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  houseText: {
    color: color.white,
    fontSize: 14,
  },
  reqContent: {
    width: '49%',
    alignSelf: 'center',
    marginVertical: 8,
  },
  requirementContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  reqIcon: {
    alignSelf: 'center',
    color: color.btnColor,
  },
  buttonContainer: {
    width: '22%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },

  joinText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.white,
    textTransform: 'uppercase',
  },
  joinBtnContainer: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  joinBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.btnColor,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  text: {
    color: '#2F737B',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: '1%',
  },
  gender1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
