import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseConfigProvider} from 'native-base/lib/typescript/core/NativeBaseContext';
// import {NativeBaseProvider} from "native-base";
// import {SplashScreen} from '../Login/SplashScreen';
import SplashScreen from '../Login/SplashScreen';
import LoginScreen from '../Login/loginScreen';
import Home from '../Home/Home';
import ForgotPassword from '../Login/Forgot';
import EditProfile from '../Home/SettingNavigation/EditProfile';
import ForgotPhone from '../Login/ForgotPhone';
import ForgotEmail from '../Login/ForgotEmail';
import DigitCode from '../Login/DigitCode';
import ChangePassword from '../Home/SettingNavigation/ChangePassword';
import ResetPassword from '../Login/ResetPassword';
import Signup from '../Signup/Signup';
import Step1 from '../CreateAccount/Step1';
import Step2 from '../CreateAccount/Step2';
import Step3 from '../CreateAccount/Step3';
import Step4 from '../CreateAccount/Step4';
import Step5 from '../CreateAccount/Step5';
import Test from '../Login/Test';
import MainSeeorg from '../Home/SeeOrganization/MainSeeorg';
import Event from '../Home/OrganizationEvent/Event';
import EventDetials from '../Home/OrganizationEvent/EventDetials';
import Volenter from '../Home/OrganizationEvent/Volenter';
import Parent from '../Navigation/Parent';
import Privacypolicy from '../Home/DrawerTab/Privacypolicy';
import MyProjects from '../Home/DrawerTab/MyProjects';
import TermsConditions from '../Home/DrawerTab/TermsConditions';
import Settings from '../Home/DrawerTab/Settings';
import Myorganization from '../Home/DrawerTab/Myorganization';
import Notification from '../Home/Notifications.js/Notification';
// import icons from '../Assets/app_icon/icons';
import color from '../Assets/colors/colors';
// import DrawerNavigatorRoutes from './DrawerNavigator';
import SafeAreaView from 'react-native-safe-area-view';
import {NativeBaseProvider} from 'native-base';
import Option from '../CreateAccount/Option';
import VolunteerManagment from '../Home/DrawerTab/DrawerNavigation/VolunteerManagment';
import Support_Hours from '../Home/DrawerTab/DrawerNavigation/Support_Hours';
import Certification from '../Home/DrawerTab/DrawerNavigation/Certification';
import AddOrgnaization from '../Home/DrawerTab/DrawerNavigation/AddOrgnaization';
import AddEvent from '../Home/DrawerTab/DrawerNavigation/AddEvent';
import Map from '../Home/OrganizationEvent/Map';
import Dashboard from '../OrganizationDashboard/Dashboard';
import PopularEvents from '../Home/DrawerTab/DrawerNavigation/PopularEvents';
import DynamicInputStates from '../DynamicStateManagement';
const Stack = createNativeStackNavigator();
import OrgDashboard from '../Home/OrgDashboard';
import CertificateRequest from '../OrganizationDashboard/CertificateRequest';
import Inbox from '../OrganizationDashboard/Inbox';
import OrgCancel from '../Home/Project/Organization.js/OegCanceled';
import Inboxmsg from '../OrganizationDashboard/Inboxmsg';
import VolunteerInfo from '../Home/Project/volunteer/VolunteerInfo';
import GenerateCertificate from '../Home/Project/volunteer/GenerateCertificate';
import OrgEventDetails from '../Home/Project/Organization.js/OrgEventsDetails';
import VolunteerHome from '../Home/BottomTab/Home';
import ConatactSupport from '../Home/DrawerTab/ConatactSupport';
import VolCancel from '../Home/Project/volunteer/volcancel';
import VolPast from '../Home/Project/volunteer/Volcomplete';
import Volupcoming from '../Home/Project/volunteer/Volupcoming';
import VolInprogress from '../Home/Project/volunteer/Volinprogress';
import VolEventDetails from '../Home/Project/volunteer/Voleventdetail';
import VolonclickEveDetails from '../Home/Project/volunteer/volonclickevedetails';
import OrganizationDetailScreen from '../Home/Project/volunteer/organizationDetailScreen';
import OrgActiveCardScreen from '../Home/Project/volunteer/orgActiveCardScreen';

const MainNavigationHub = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DynamicStateManagement">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="DynamicInputStates"
            component={DynamicInputStates}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="VolEventDetails"
            component={VolEventDetails}
            options={{header: () => null}}
          />

          <Stack.Screen
            name="VolonclickEveDetails"
            component={VolonclickEveDetails}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="ForgotPhone"
            component={ForgotPhone}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="notification"
            component={Notification}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="CertificateRequest"
            component={CertificateRequest}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="Inboxmsg"
            component={Inboxmsg}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="editProfile"
            component={EditProfile}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="changepassword"
            component={ChangePassword}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="myproject"
            component={MyProjects}
            options={{
              headerShown: false,
              title: 'My Projects',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="myorganization"
            component={Myorganization}
            options={{
              headerShown: false,
              title: 'My Organization',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="settings"
            component={Settings}
            options={{
              headerShown: false,
              title: 'My Organization',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="volunteermanagment"
            component={VolunteerManagment}
            options={{
              headerShown: false,
              title: 'Volunteer Management',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="VolunteerInfo"
            component={VolunteerInfo}
            options={{
              headerShown: false,
              title: 'VolunteerInfot',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="GenerateCertificate"
            component={GenerateCertificate}
            options={{
              headerShown: false,
              title: 'GenerateCertificate',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="OrgEventDetails"
            component={OrgEventDetails}
            options={{
              headerShown: false,
              title: 'OrgEventDetails',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="Inbox"
            component={Inbox}
            options={{
              headerShown: false,
              title: 'Inbox',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="ConatactSupport"
            component={ConatactSupport}
            options={{
              headerShown: false,
              title: 'ConatactSupport',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="Certificate"
            component={Certification}
            options={{
              headerShown: false,
              title: 'Certificate',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="addorganization"
            component={AddOrgnaization}
            options={{
              headerShown: false,
              title: 'addorganization',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="VolunteerHome"
            component={VolunteerHome}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="supporthours"
            component={Support_Hours}
            options={{
              headerShown: false,
              title: 'Support Hours',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="popularevents"
            component={PopularEvents}
            options={{
              headerShown: false,
              title: 'Support Hours',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="VolCancel"
            component={VolCancel}
            options={{
              headerShown: false,
              title: 'Support Hours',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="VolInprogress"
            component={VolInprogress}
            options={{
              headerShown: false,
              title: 'Support Hours',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="VolPast"
            component={VolPast}
            options={{
              headerShown: false,
              title: 'Support Hours',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="Volupcoming"
            component={Volupcoming}
            options={{
              headerShown: false,
              title: 'Support Hours',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="privacypolicy"
            component={Privacypolicy}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="addevents"
            component={AddEvent}
            options={{
              headerShown: false,
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="termsandcondtion"
            component={TermsConditions}
            options={{
              headerShown: false,
              title: 'Terms & Condition',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />

          <Stack.Screen
            name="ForgotEmail"
            component={ForgotEmail}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="DigitCode"
            component={DigitCode}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="parentscreen"
            component={Parent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Step1"
            component={Step1}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },

              headerTransparent: true,
              headerTitleAlign: 'right',
              headerRight: () => (
                <View style={{justifyContent: 'space-between', width: '100%'}}>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: color.btnColor,
                    }}>
                    Step 1/5
                  </Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Step2"
            component={Step2}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
              headerRight: () => (
                <View style={{justifyContent: 'space-between', width: '100%'}}>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: color.btnColor,
                    }}>
                    Step 2/5
                  </Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Step3"
            component={Step3}
            options={{
              title: 'Step 3/5',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
              headerRight: () => (
                <View style={{justifyContent: 'space-between', width: '100%'}}>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: color.btnColor,
                    }}>
                    Step 3/5
                  </Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Step4"
            component={Step4}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
              headerRight: () => (
                <View style={{justifyContent: 'space-between', width: '100%'}}>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: color.btnColor,
                    }}>
                    Step 4/5
                  </Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Option"
            component={Option}
            options={{
              title: '',
              headerTitleStyle: {
                color: color.btnColor,
                fontSize: 15,
              },
              // headerRight: () => (
              //   <View style={{justifyContent: 'space-between', width: '100%'}}>
              //     <Text
              //       style={{
              //         alignSelf: 'flex-end',
              //         fontSize: 15,
              //         fontWeight: 'bold',
              //         color: color.btnColor,
              //       }}>
              //       Step 4/5
              //     </Text>
              //   </View>
              // ),
            }}
          />

          <Stack.Screen name="Step5" component={Step5} />

          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen
            name="Hope Farm"
            component={MainSeeorg}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Event"
            component={Event}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Primo Center"
            component={EventDetials}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrgDashboard"
            component={OrgDashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MapScreen"
            component={Map}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Volenter"
            component={Volenter}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="OrganizationDetailScreen"
            component={OrganizationDetailScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="OrganizationActiveCardScreen"
            component={OrgActiveCardScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <Stack.Navigator>
          <Stack.Screen
            name="DrawerNavigatorRoutes"
            component={DrawerNavigatorRoutes}
            options={{headerShown: false}}
          />

          
        </Stack.Navigator> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default MainNavigationHub;
