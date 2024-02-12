import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import TabNavigate from './Tabnavigate';
import Dashboard from '../OrganizationDashboard/Dashboard';
import {useIsFocused} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setUserimage} from '../Redux/Actions/actions';
import OrgDashboard from '../Home/OrgDashboard';
import OrgBottomTabNavigate from './OrgBottomTab';

const Main = () => {
  const isfocused = useIsFocused();
  const dispatch = useDispatch();
  const UserData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=c4d4rf7uds82c7qjo8jtkvmium');
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    fetch(
      `https://fisdemoprojects.com/volmanNew/api/my-profile.php?userid=${global.userid}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result, 'result userRecord');
        if (result.success === 'Users Record.') {
          global.Firstname = result.first_name;
          global.phone = result.phone;
          global.email = result.email;
          global.building_number = result.building_number;
          global.zip_code = result.zip_code;
          dispatch(setUserimage(result.image));
          global.LastName = result.last_name;
          global.district_name = result.district_name;
          global.street_name = result.street_name;
          global.city = result.city;
          global.usertype = result.user_type;
          global.countryCode = result.country_code;
          global.countryId = result.country_id;
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    UserData();
  }, [isfocused]);
  return (
    <View style={{flex: 1}}>
      {global.usertype === '0' ? <TabNavigate /> : <OrgBottomTabNavigate />}
    </View>
  );
};

export default Main;
