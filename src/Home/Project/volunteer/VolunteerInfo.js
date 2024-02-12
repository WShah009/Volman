import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import color from '../../../Assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Component/Header';
import LinearGradient from 'react-native-linear-gradient';
import VolunteerInfoHeader from '../../../Component/VolunteerInfoHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import normalize from 'react-native-normalize';
const VolunteerInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const data = [
    {
      Event_Name: 'Health & Social',
      Event_Date: '29-03-2023',
      Location: 'Rawalpindi',
      Hours: '4',
      Role: 'Packager',
      Joining_time: '11:00AM',
      Leaving_time: '3:00PM',
    },
    {
      Event_Name: 'Community Cleanup',
      Event_Date: '15-04-2023',
      Location: 'City Center Park',
      Hours: '3',
      Role: 'Team Leader',
      Joining_time: '9:30 AM',
      Leaving_time: '12:30 PM',
    },
    {
      Event_Name: 'Educational Workshop',
      Event_Date: '05-05-2023',
      Location: 'Local School',
      Hours: '2',
      Role: 'Facilitator',
      Joining_time: '2:00 PM',
      Leaving_time: '4:00 PM',
    },
    {
      Event_Name: 'Food Drive',
      Event_Date: '22-06-2023',
      Location: 'Community Center',
      Hours: '5',
      Role: 'Food Distributor',
      Joining_time: '10:00 AM',
      Leaving_time: '3:00 PM',
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <VolunteerInfoHeader Text="Saim" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../Assets/info.png')}
          resizeMode="stretch"
          style={{width: '85%', height: 170, borderRadius: 20, marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: '45%',
            left: '48%',
          }}>
          <AntDesign name="clockcircle" size={18} color={color.white} />
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 8,
            }}>
            20 Volunteer Hours
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            flexDirection: 'row',
            width: '80%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="email"
              size={30}
              color={color.linTopClr}
            />
            <Text style={{color: '#1d224f', marginLeft: 4}}>
              Nouman@gmail.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="gender-male"
              size={30}
              color={color.linTopClr}
            />
            <Text style={{color: '#1d224f', marginLeft: 4}}>Male</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: -100,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Ionicons name="location-sharp" size={30} color={color.linTopClr} />
          <Text style={{color: '#1d224f', marginLeft: 4}}>
            Chaklala Sceheme 3,Rawalpindi
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            flexDirection: 'row',
            width: '80%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="phone"
              size={30}
              color={color.linTopClr}
            />
            <Text style={{color: '#1d224f', marginLeft: 4}}>03235099232</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="calendar-text"
              size={30}
              color={color.linTopClr}
            />
            <Text style={{color: '#1d224f', marginLeft: 4}}>25</Text>
          </View>
        </View>
      </View>
      <View style={{marginLeft: 40, marginTop: 20}}>
        <Text style={{color: '#1d224f', fontSize: 23, fontWeight: 'bold'}}>
          Preferences:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginLeft: 10,
              marginRight: 14,
              width: '40%',
              height: 50,
              backgroundColor: '#1d224f',
              borderRadius: 10,
              flexDirection: 'row',
              opacity: 0.8,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Packing
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginLeft: 10,
              marginRight: 14,
              width: '40%',
              height: 50,
              backgroundColor: '#1d224f',
              borderRadius: 10,
              flexDirection: 'row',
              opacity: 0.8,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Driving
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#b3c8cd',
          height: 90,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#1d224f', fontSize: 20}}>
          Organization Joining Date
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="calendar-text"
            size={30}
            color={color.linTopClr}
          />
          <Text style={{color: '#1d224f', fontSize: 15}}>25-03-2023</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            width: '50%',
            height: 55,
            backgroundColor: '#1d224f',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Generate Certificate
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          isVisible={isModalVisible}
          style={styles.modalContainer}>
          <View
            style={{backgroundColor: 'white', height: '34%', borderRadius: 10}}>
            <View
              style={{
                marginTop: 20,
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: color.purple,
                  fontSize: 22,
                  fontWeight: 'bold',

                  marginLeft: 15,
                }}>
                Date Range:
              </Text>
            </View>

            {/* <View style={styles.container}>
      <Text style={styles.label}>Selected Date:</Text>
      <Text>{selectedDate.toISOString().split('T')[0]}</Text>

      <DatePicker
        date={selectedDate}
        onDateChange={handleDateChange}
        mode="date"
        androidVariant="nativeAndroid"
      />
    </View> */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.from}>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={styles.datePickerButton}>
                  <MaterialCommunityIcons
                    name="calendar-range-outline"
                    size={24}
                    color="#333"
                  />
                  <Text style={styles.selectedDateText}>
                    {date.toISOString().split('T')[0]}
                  </Text>
                </TouchableOpacity>

                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={styles.datePickerButton}>
                  <MaterialCommunityIcons
                    name="calendar-range-outline"
                    size={24}
                    color="#333"
                  />
                  <Text style={styles.selectedDateText}>
                    {date.toISOString().split('T')[0]}
                  </Text>
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    toggleModal(false);
                    navigation.navigate('GenerateCertificate');
                  }}>
                  <Text style={styles.loginText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginBottom: '5%'}} />
          </View>
        </Modal>
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2e6875',
          }}>
          Activity
        </Text>
      </View>
      <View style={{height: 20}}></View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.columnHeader}>Event Name</Text>
            <Text style={styles.columnHeader}>Event Date</Text>
            <Text style={styles.columnHeader}>Location</Text>
            <Text style={styles.columnHeader}>Hours</Text>
            <Text style={styles.columnHeader}>Role</Text>
            <Text style={styles.columnHeader}>Joining Time</Text>
            <Text style={styles.columnHeader}>Leaving Time</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            // horizontal
            //showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View
                style={[
                  styles.dataRow,
                  {backgroundColor: index % 2 == 0 ? '#efeeee' : '#cdcdd7'},
                ]}>
                <Text style={styles.dataCell}>{item.Event_Name}</Text>
                <Text style={styles.dataCell}>{item.Event_Date}</Text>
                <Text style={styles.dataCell}>{item.Location}</Text>
                <Text style={styles.dataCell}>{item.Hours}</Text>
                <Text style={styles.dataCell}>{item.Role}</Text>
                <Text style={styles.dataCell}>{item.Joining_time}</Text>
                <Text style={styles.dataCell}>{item.Leaving_time}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {/* <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.columnHeader}>Event Name</Text>
          <Text style={styles.columnHeader}>Event Date</Text>
          <Text style={styles.columnHeader}>Location</Text>
          <Text style={styles.columnHeader}>Hours</Text>
          <Text style={styles.columnHeader}>Role</Text>
          <Text style={styles.columnHeader}>Joining Time</Text>
          <Text style={styles.columnHeader}>Leavinig Time</Text>


        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        //   showsHorizontalScrollIndicator={true}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.dataRow,
                {backgroundColor: index % 2 == 0 ? '#efeeee' : '#cdcdd7'},
              ]}>
              <Text style={styles.dataCell}>{item.Event_Name}</Text>
              <Text style={styles.dataCell}>{item.Event_Date}</Text>
              <Text style={styles.dataCell}>{item.Location}</Text>
              <Text style={styles.dataCell}>{item.Hours}</Text>
              <Text style={styles.dataCell}>{item.Role}</Text>
              <Text style={styles.dataCell}>{item.Joining_time}</Text>
              <Text style={styles.dataCell}>{item.Leaving_time}</Text>


            </View>
          )}
        />
      </View> */}
    </ScrollView>
  );
};

export default VolunteerInfo;

const styles = StyleSheet.create({
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '50%',
  },
  buttonContainer: {
    width: '80%',

    alignItems: 'center',
    marginTop: 20,
  },
  linearGradient: {
    height: '100%',
    width: 18,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  plancard: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    width: '85%',

    alignItems: 'center',

    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    padding: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    margintop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#060B49',
    paddingVertical: 5,
    paddingHorizontal: 10,
    padding: 10,
    height: 60,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

    width: '100%',
  },
  columnHeader: {
    flex: 1,
    backgroundColor: '#060B49',
    color: 'white',
    padding: 10,
    fontSize: 13,
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    // backgroundColor: 'lightblue',
  },
  dataCell: {
    flex: 1,
    // backgroundColor: 'lightblue',

    height: 50,
    padding: 10,

    color: '#2c2c58',
  },

  from: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#efeeee',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#333',
  },
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(65),
    elevation: 0,
    paddingHorizontal: 12,
    zIndex: -60,
  },
  linearGradientStyle2: {
    alignItems: 'center',
    elevation: 0,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
  },
  selectedDateText: {
    marginLeft: 10,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.white,
  },
  DateInnerContainer: {
    flexDirection: 'row',
    height: 50,
    width: '48%',
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: color.white,
    alignItems: 'center',
  },
});
