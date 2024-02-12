import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  ToastAndroid,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ActBox3 from '../../../Component/ActBox3';
import color from '../../../Assets/colors/colors';
import React, {useEffect, useState, useCallback} from 'react';
import Header from '../../../Component/Header';
import {APIS} from '../../../Apiurls/Apis';
import {useIsFocused} from '@react-navigation/native';
import {setEvents} from '../../../Redux/Actions/actions';
import ActBox2 from '../../../Component/ActBox2';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import {useSelector, useDispatch} from 'react-redux';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
const dataa = [
  {key: 'East Midlands', value: 'East Midlands'},
  {key: 'East of England', value: 'East of England'},
  {key: 'London', value: 'London'},
  {key: 'North East England', value: 'North East England'},
  {key: 'North West England', value: 'North West England'},
  {key: 'South East England', value: 'South East England'},
  {key: 'South West England', value: 'South West England'},
  {key: 'West Midlands', value: 'West Midlands'},
  {key: 'Yorkshire and the Humber', value: 'Yorkshire and the Humber'},
  {key: 'Scotland', value: 'Scotland'},
  {key: 'Wales', value: 'Wales'},
  {key: 'Northern Ireland', value: 'Northern Ireland'},
];

const dataday = [
  {key: 'Monday', value: 'Monday'},
  {key: 'Tuesday', value: 'Tuesday'},
  {key: 'Wednesday', value: 'wednesday'},
  {key: 'Thursday', value: 'Thursday'},
  {key: 'Friday', value: 'Friday'},
  {key: 'Saturday', value: 'Saturday'},
  {key: 'Sunday', value: 'Sunday'},
];

const PopularEvents = () => {
  const isfocused = useIsFocused();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [region, setRegion] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [day, setDay] = useState('');
  const [organizationdata, setOrganizationdata] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const [month, setMonth] = useState('');
  const months = [
    {key: 1, value: 'January'},
    {key: 2, value: 'February'},
    {key: 3, value: 'March'},
    {key: 4, value: 'April'},
    {key: 5, value: 'May'},
    {key: 6, value: 'June'},
    {key: 7, value: 'July'},
    {key: 8, value: 'August'},
    {key: 9, value: 'September'},
    {key: 10, value: 'October'},
    {key: 11, value: 'November'},
    {key: 12, value: 'December'},
  ];

  // ============= STATES FOR FILTER DATA ============

  const [organization, setOrganization] = useState('');

  const [enddate, setenddate] = useState('');
  const [startdate, setstartdate] = useState('');

  //========== open start is for Select year
  const [Yearopenend, setYearopenend] = useState(false);
  const [selectedYear, setselectedYear] = useState('');

  //========== open start is for Selected Month
  const [Monthopenend, setMonthopenend] = useState(false);
  const [selectedMonth, setselectedMonth] = useState(false);

  const [openstart, setstartOpen] = useState(false);
  const [openend, setendOpen] = useState(false);

  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const toggleSuccessModal = () => {
    setSuccessModalVisible(!isSuccessModalVisible);
  };

  const {events} = useSelector(state => state.OrganizationReducer);
  //console.log('🚀 ~ file: PopularEvents.js:75 ~ REDUCER:', events.events);

  const GetEvents = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=e8dc1269cf42c7a86d6d79aa1eddd937');
    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(APIS.SearchEvents, requestOptions)
      .then(response => response.json())
      .then(events => {
        console.log(
          '🚀 ~ file: PopularEvents.js:95 ~ GetEvents ~ DATA:',
          events,
        );

        dispatch(setEvents(events.events));
      })
      .catch(error => console.log('EVENTS ERROR', error));
  };

  const Items = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        marginTop: 10,
        marginHorizontal: 20,
        width: '95%',
      }}
      onPress={() => {
        navigation.navigate('Event', {
          title: item?.title,
          description: item?.short_description,
          date: item?.event_date,
          img: item?.Image,
          id: item?.id,
          end_time: item?.end_time,
          start_time: item?.start_time,
          latitude: item?.latitude,
          longitude: item?.longitude,
          address: item.address,
        });
      }}>
      <ActBox3
        title={item?.title}
        image={item?.Image}
        event_date={item?.event_date}
        adress={item.address}
        stylecontainer={{width: '95%'}}
        iconheart={item.fav == 0 ? 'hearto' : 'heart'}
        onPressIcon={() => {
          update(item.id);
        }}
      />
    </TouchableOpacity>
  );
  const update = eventid => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=m88me2j0ncolm1t1r4ht1g3mvf');
    var formdata = new FormData();
    formdata.append('event_id', eventid);
    formdata.append('fav', '1');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/fav-events.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.fav) {
          if (Platform.OS === 'android') {
            ToastAndroid.show('Add to Favorite', ToastAndroid.SHORT);
            GetEvents();
          } else {
            alert('Add to Favorite');
            GetEvents();
          }
        }
      })
      .catch(error => console.log('error', error));
  };
  const searchFilter = () => {
    // ==================== SEARCH FILTER API-REFERENCE ===============

    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=jvsilpit7m300k9j4uhsecav93');
    var formdata = new FormData();
    formdata.append('organization', organization);
    formdata.append('startDate', startdate);
    formdata.append('endDate', enddate);
    formdata.append('year', selectedYear);
    formdata.append('month', month);
    formdata.append('user_id', global.userid);
    console.log(
      '🚀 ~ file: PopularEvents.js:210 ~ searchFilter ~ formdata:',
      formdata,
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/search-events.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(res => {
        console.log(
          '🚀 ~ file: PopularEvents.js:227 ~ searchFilter ~ res:',
          res.events,
        );
        if (res.events) {
          dispatch(setEvents(res.events));
          toggleSuccessModal();
          console.log(events, 'Events');
        } else if (res.error) {
          if (Platform.OS === 'android') {
            ToastAndroid.show('Oops No Event Found', ToastAndroid.SHORT);
            toggleSuccessModal();
          } else {
            alert('O0ps No Event Found');
            toggleSuccessModal();
          }
        }
      })
      .catch(error => console.log('Ye ERROR', error));
  };
  const onRefresh = useCallback(() => {
    GetEvents();
  }, []);
  const getExpense = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'PHPSESSID=l9ks57bdc35d3gnn1pkqmdaupl; laravel_session=DYFO9CKHT5A49AmNz0CS6t7UrfFfbuhFo7w2yV1u',
    );

    var formdata = new FormData();
    formdata.append('id', global.org_id);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://fisdemoprojects.com/volmanNew/api/organization-dropdown.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(events => {
        let newArray = events.organizations.map(item => {
          return {key: item.id, value: item.title};
        });
        //console.log(newArray, 'NEW ARRAY');
        setOrganizationdata(newArray);
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    GetEvents();
    getExpense();
  }, [isfocused]);
  return (
    <View style={{marginBottom: 30, width: '100%', height: '100%'}}>
      <Header Text={'Popular Events'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: width,
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.titleStyle}>Popular Events</Text>
        <FontAwesom
          onPress={() => {
            toggleSuccessModal();
          }}
          name="filter"
          size={25}
          color={color.btnColor}
          style={{width: '15%'}}
        />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {Array.isArray(events) &&
          events.map(item => <Items item={item} key={item.id} />)}
      </ScrollView>

      <Modal
        transparent={true}
        isVisible={isSuccessModalVisible}
        style={styles.modalContainer1}>
        <View style={styles.modalView1}>
          <Text style={styles.modalText1}>Success</Text>
          <View style={styles.iconCont1}>
            <Icon
              name="cancel"
              style={{
                fontSize: 45,
                color: color.btnColor,
                marginTop: -15,
                marginBottom: 6,
              }}
              onPress={toggleSuccessModal}
            />
          </View>

          {/* <SelectList
            setSelected={setRegion}
            data={dataa}
            inputStyles={{color: 'black'}}
            boxStyles={{
              backgroundColor: color.white,
              width: '80%',
              alignSelf: 'center',
              borderColor: color.btnColor,
            }}
            placeholder="Select Region"
            onChangeText={n => setRegion(n)}
            dropdownStyles={{
              backgroundColor: '#fff',
              width: '80%',
              alignSelf: 'center',
            }}
            dropdownTextStyles={{color: color.btnColor}}
          /> */}

          {/* ====================== SELECT ORGANIZATION ==================== */}
          <SelectList
            setSelected={setOrganization}
            data={organizationdata}
            inputStyles={{color: 'black'}}
            boxStyles={{
              backgroundColor: color.white,
              width: '80%',
              alignSelf: 'center',
              borderColor: color.btnColor,
              marginVertical: 10,
            }}
            placeholder="Select Organization"
            onChangeText={n => {
              setOrganization(n);
            }}
            dropdownStyles={{
              backgroundColor: '#fff',
              width: '80%',
              alignSelf: 'center',
            }}
            dropdownTextStyles={{color: 'black'}}
          />

          {/* ====================== SELECT YEAR ==================== */}

          {/* <SelectList
            setSelected={setOrganization}
            data={months}
            inputStyles={{color: 'black'}}
            boxStyles={{
              backgroundColor: color.white,
              width: '80%',
              alignSelf: 'center',
              borderColor: color.btnColor,
              marginVertical: 10,
            }}
            placeholder="Select Month"
            onChangeText={n => setOrganization(n)}
            dropdownStyles={{
              backgroundColor: '#fff',
              width: '80%',
              alignSelf: 'center',
            }}
            dropdownTextStyles={{color: 'black'}}
          /> */}

          <View style={styles.SelectDatesContainer}>
            <View>
              <TouchableOpacity
                onPress={() => setYearopenend(true)}
                style={styles.SelectDatesOpacity}>
                <Text
                  style={{
                    fontSize: 13,
                    color: color.black,
                    paddingStart: 5,
                    fontWeight: '700',
                  }}>
                  Select Year
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: color.black}}>
              {selectedYear && selectedYear}
            </Text>
          </View>

          {/* ========================= MONTH ======================= */}

          <SelectList
            setSelected={setMonth}
            data={months}
            inputStyles={{color: 'black'}}
            boxStyles={{
              backgroundColor: color.white,
              width: '80%',
              alignSelf: 'center',
              borderColor: color.btnColor,
              marginVertical: 10,
            }}
            placeholder="Select Month"
            onChangeText={n => {
              console.log('====> ', n);
            }}
            dropdownStyles={{
              backgroundColor: '#fff',
              width: '80%',
              alignSelf: 'center',
            }}
            dropdownTextStyles={{color: 'black'}}
          />

          {/* <View style={styles.SelectDatesContainer}>
            <View>
              <TouchableOpacity
                onPress={() => setMonthopenend(true)}
                style={[styles.SelectDatesOpacity, {width: '58%'}]}>
                <Text
                  style={{
                    fontSize: 13,
                    color: color.black,
                    paddingStart: 5,
                    fontWeight: '700',
                  }}>
                  Select Month
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: color.black}}>
              {selectedMonth && selectedMonth}
            </Text>
          </View> */}

          {/* ====================== SELECT START DATE ==================== */}

          <View style={styles.SelectDatesContainer}>
            <View>
              <TouchableOpacity
                onPress={() => setstartOpen(true)}
                style={[styles.SelectDatesOpacity, {width: '50%'}]}>
                <Text
                  style={{
                    fontSize: 13,
                    color: color.black,
                    paddingStart: 5,
                    fontWeight: '700',
                  }}>
                  Start Date
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: color.black}}>
              {startdate && startdate}
            </Text>
          </View>

          {/* ====================== SELECT END DATE ==================== */}

          <View style={styles.SelectDatesContainer}>
            <View>
              <TouchableOpacity
                onPress={() => setendOpen(true)}
                style={{
                  width: '50%',
                  height: 40,
                  backgroundColor: color.white,
                  justifyContent: 'space-around',
                  alignItems: 'center',

                  flexDirection: 'row',
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: color.black,
                    paddingStart: 5,
                    fontWeight: '700',
                  }}>
                  End Date
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: color.black}}>
              {enddate && enddate}
            </Text>
          </View>

          {/* ==================== CONFIRM / FILTER BUTTON ================= */}
          <View style={styles.btnContainer1}>
            <TouchableOpacity
              style={styles.confirmBtn1}
              onPress={() => {
                searchFilter();
                //console.log(organization);
              }}>
              <Text style={styles.confirmText1}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <DatePicker
        modal
        mode="date"
        open={openstart}
        date={date}
        onConfirm={date => {
          setstartOpen(false);

          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0');
          var day = date.getDate().toString().padStart(2, '0');

          var formattedDate = year + '-' + month + '-' + day;

          //console.log(formattedDate);
          setstartdate(formattedDate);
        }}
        onCancel={() => {
          setstartOpen(false);
        }}
      />
      <DatePicker
        modal
        mode="date"
        open={openend}
        date={date}
        onConfirm={date => {
          setendOpen(false);

          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0');
          var day = date.getDate().toString().padStart(2, '0');

          var formattedDate = year + '-' + month + '-' + day;

          setenddate(formattedDate);
          console.log('END date ===>', formattedDate);
        }}
        onCancel={() => {
          setendOpen(false);
        }}
      />

      {/* ======================== Year Modal ===================== */}
      <DatePicker
        modal
        mode="date"
        open={Yearopenend}
        date={date}
        onConfirm={date => {
          setYearopenend(false);
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0');
          var day = date.getDate().toString().padStart(2, '0');
          //var formattedDate = year + '-' + month + '-' + day;
          var formattedDate = year;
          setselectedYear(formattedDate);
          console.log('YEAR: ==> ', formattedDate);
        }}
        onCancel={() => {
          setendOpen(false);
        }}
      />

      {/* ======================== Month Modal ===================== */}
      <DatePicker
        modal
        mode="date"
        open={Monthopenend}
        date={date}
        onConfirm={date => {
          setMonthopenend(false);
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0');
          var day = date.getDate().toString().padStart(2, '0');
          //var formattedDate = year + '-' + month + '-' + day;
          var formattedDate = month;
          setselectedMonth(formattedDate);
          console.log('MONTH: ==> ', formattedDate);
        }}
        onCancel={() => {
          setMonthopenend(false);
        }}
      />
    </View>
  );
};

export default PopularEvents;
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.black,
    marginVertical: 15,
    alignSelf: 'flex-start',
  },
  modalContainer1: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  confirmBtn1: {
    backgroundColor: color.btnColor,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '45%',
    marginVertical: 20,
  },
  confirmText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
  crossIcon1: {
    color: color.red,
    fontSize: 50,
  },
  modalText1: {
    color: color.red,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    width: '62%',
    alignSelf: 'flex-end',
  },
  iconCont1: {
    width: '20%',
    alignSelf: 'flex-end',
  },
  modalText1: {
    color: color.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    width: '62%',
    alignSelf: 'flex-end',
  },
  pendAppr1: {
    fontWeight: 'bold',
    fontSize: 17,
    color: color.red,
    paddingVertical: 5,
  },
  anEmail1: {
    color: color.red,
    marginBottom: 12,
    fontWeight: '700',
    lineHeight: 21,
  },
  modalView1: {
    borderRadius: 12,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: color.white,
  },
  btnContainer1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  SelectDatesContainer: {
    flexDirection: 'row',
    width: '80%',
    borderRadius: 8,
    height: 50,
    marginTop: 8,
    backgroundColor: color.white,
    alignItems: 'center',
    borderWidth: 1,
    alignSelf: 'center',
  },

  SelectDatesOpacity: {
    width: '55%',
    height: 40,
    backgroundColor: color.white,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
  },
});
