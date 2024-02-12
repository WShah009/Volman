import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeStackwithoutsearch from '../Component/HomeStackwithoutsearch';
import {SCREEN_WIDTH} from 'react-native-normalize';
import color from '../Assets/colors/colors';
const {width, height} = Dimensions.get('window');
import DashboardCard from '../Component/DashboardCard';
import DashboardCardtwo from '../Component/Dashboardcardtwo';
import {useIsFocused} from '@react-navigation/native';
import {APIS} from '../Apiurls/Apis';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
const Dashboard = props => {
  const isfocused = useIsFocused();
  const [activeevent, setActiveEvent] = useState(0);
  const navigation = useNavigation();
  const [pastevent, setPastEvent] = useState(0);
  const [volunteerCount, setVolunteerCount] = useState(0);
  const [cancelevent, setcancelevent] = useState(0);
  const [CertificateRqttcount, setcertificateRqtcount] = useState(0);
  const [planned, setplanned] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const ApiActiveEvent = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=uv5cn9t4ibccjtpbtum9can19o');
    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/organization-active-events.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        //console.log('Result: ',result);
        if (result.success) {
          setActiveEvent(result.count);
        } else {
          setActiveEvent(0);
        }
      })
      .catch(error => console.log('error', error));
  };
  const callApi = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=326ecb06ca75cb57bef397107597abcc');
    var formdata = new FormData();
    formdata.append('organization_id', global.org_id);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(APIS.OrganizationDetail, requestOptions)
      .then(response => response.json())
      .then(result => {
        global.orgaddress = result.address;
        global.orgdepartment_name = result.department_name;
        global.orgdescription = result.description;
        global.orgemail = result.email;
        global.orgimage = result.image;
        global.orgphone = result.phone;
        global.orgshort_description = result.short_description;
        global.orgtitle = result.title;
        // global.orglongitude = result.longitude;
        // global.orglatitude = result.longitude;
        //console.log(result, 'Organization DashBoard');
      })
      .catch(error => console.log('error', error));
  };
  const PastEventCOunt = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=uv5cn9t4ibccjtpbtum9can19o');
    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/organization_complete_event.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        //console.log('Completed Events: ',result);
        if (result.success) {
          setPastEvent(result.count);
        } else {
          setPastEvent(0);
        }
      })
      .catch(error => console.log('error', error));
  };

  const CertificateRequestCount = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=uv5cn9t4ibccjtpbtum9can19o');
    var formdata = new FormData();
    formdata.append('organizer_id', global.org_id);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/organization_certifications.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        //console.log('Completed Events: ',result);
        if (result.success) {
          setcertificateRqtcount(result.count);
        } else {
          setcertificateRqtcount(0);
        }
      })
      .catch(error => console.log('error', error));
  };

  const CancelEventCOunt = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=uv5cn9t4ibccjtpbtum9can19o');
    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/organization_canceled_events.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        // console.log('Cancel Events: ',result);
        if (result.success) {
          setcancelevent(result.count);
        } else {
          setcancelevent(0);
        }
      })
      .catch(error => console.log('error', error));
  };

  const Plannedeventscount = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=uv5cn9t4ibccjtpbtum9can19o');
    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/organization-upcomming-event-count.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        // console.log("planned",result);
        if (result.success) {
          setplanned(result.count);
        } else {
          setplanned(0);
        }
      })
      .catch(error => console.log('error', error));
  };
  const countVolunteer = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=uv5cn9t4ibccjtpbtum9can19o');
    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/total-volunteer.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setVolunteerCount(result.count);
        } else {
          setVolunteerCount(0);
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    ApiActiveEvent();
    PastEventCOunt();
    countVolunteer();
    CancelEventCOunt();
    CertificateRequestCount();
    Plannedeventscount();
    callApi();
  }, [isfocused]);

  return (
    <ScrollView style={styles.MainContainer}>
      <HomeStackwithoutsearch
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          navigation.navigate('notification');
        }}
      />

      <View styles={styles.container}>
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: color.purple,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: color.white,
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: 22,
              }}>
              Events
            </Text>
          </View>

          {/* <View style={{flexDirection: 'row'}}>
            <DashboardCardtwo
              icon={'calendar-text'}
              count={activeevent}
              Heading={'In Progress'}
            />
            <View style={{width: 10}}></View>
            <DashboardCardtwo
              icon={'calendar-clock'}
              count={planned}
              Heading={'Planned'}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <DashboardCardtwo
              icon={'calendar-check'}
              count={pastevent}
              Heading={'Completed'}
            />
            <View style={{width: 10}}></View>
            <DashboardCardtwo
              icon={'calendar-remove'}
              count={cancelevent}
              Heading={'Canceled'}
            />
          </View> */}

          {/* <View>
     

      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Your Modal Content Goes Here</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View> */}
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => {
              navigation.navigate('MyProjects');
            }}>
            <DashboardCard
              icon={'calendar-text'}
              count={activeevent}
              Heading={'In Progress'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => {
              navigation.navigate('MyProjects');
            }}>
            <DashboardCard
              icon={'calendar-clock'}
              count={planned}
              Heading={'Planned'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => {
              navigation.navigate('MyProjects');
            }}>
            <DashboardCard
              icon={'calendar-check'}
              count={pastevent}
              Heading={'Completed'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => {
              navigation.navigate('MyProjects');
            }}>
            <DashboardCard
              icon={'calendar-remove'}
              count={cancelevent}
              Heading={'Cancelled'}
            />
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 2,
              width: '100%',
              marginTop: 20,
              borderColor: '#1C1A4B',
            }}></View>
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => {
              navigation.navigate('VolunteerManagment');
            }}>
            <DashboardCard
              icon={'account'}
              count={volunteerCount}
              Heading={'Volunteer'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('CertificateRequest');
            }}>
            <DashboardCard
              icon={'message-question'}
              count={CertificateRqttcount}
              Heading={'Certificate Request'}
            />
          </TouchableOpacity>

          {/* <DashboardCard
            icon={'event'}
            count={activeevent}
            Heading={'Active Events'}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    width: '100%',
    height: '100%',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'black', // Change the color as needed
    marginVertical: 10, // Adjust the vertical margin as needed
  },
});
