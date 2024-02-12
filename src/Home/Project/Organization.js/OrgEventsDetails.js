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
import Header from '../../../Component/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import normalize from 'react-native-normalize';
const OrgEventDetails = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const data = [
    {
      Name: 'Shazaib Awan',

      Gender: 'Male',
      Hours: '4',
      Role: 'Packager',
      Joining_time: '11:00AM',
      Leaving_time: '3:00PM',
    },
    {
      Name: 'Usman khan',

      Gender: 'Male',
      Hours: '3',
      Role: 'Team Leader',
      Joining_time: '9:30 AM',
      Leaving_time: '12:30 PM',
    },
    {
      Name: 'Ali Zeeshan',

      Gender: 'Male',
      Hours: '2',
      Role: 'Facilitator',
      Joining_time: '2:00 PM',
      Leaving_time: '4:00 PM',
    },
    {
      Name: 'Aiman Malik',

      Gender: 'Female',
      Hours: '5',
      Role: 'Food Distributor',
      Joining_time: '10:00 AM',
      Leaving_time: '3:00 PM',
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <Header Text="Meal Packing" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../Assets/meal.jpg')}
          resizeMode="stretch"
          style={{width: '85%', height: 170, borderRadius: 20, marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: '42%',
            left: '55%',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 8,
            }}>
            Duration: 5 Hours
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
            marginTop: 10,
            alignItems: 'flex-start',
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
              marginTop: 10,
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
      <View
        style={{
          flexDirection: 'row',
          height: 90,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#060B49', fontSize: 20}}>Start Time:</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#060B49', fontSize: 20}}>Time:</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#1d224f', fontSize: 20}}> 11:00AM</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: 'black',
              marginHorizontal: 10,
            }}
          />
          <Text style={{color: '#060B49', fontSize: 20}}>End Time:</Text>

          <Text style={{color: '#1d224f', fontSize: 20}}> 11:00PM</Text>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2e6875',
          }}>
          Signedup Volunteers
        </Text>
      </View>
      <View style={{height: 20}}></View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.columnHeader}>Name</Text>
            <Text style={styles.columnHeader}>Role</Text>
            <Text style={styles.columnHeader}>Joining Time</Text>
            <Text style={styles.columnHeader}>Leaving Time</Text>
            <Text style={styles.columnHeader}>Hours</Text>
            <Text style={styles.columnHeader}>Gender</Text>
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
                <Text style={styles.dataCell}>{item.Name}</Text>
                <Text style={styles.dataCell}>{item.Role}</Text>
                <Text style={styles.dataCell}>{item.Joining_time}</Text>
                <Text style={styles.dataCell}>{item.Leaving_time}</Text>
                <Text style={styles.dataCell}>{item.Hours}</Text>
                <Text style={styles.dataCell}>{item.Gender}</Text>
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

export default OrgEventDetails;

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
