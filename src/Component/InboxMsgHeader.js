import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Button,
  } from 'react-native';
  import React, {useState} from 'react';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Iconss from 'react-native-vector-icons/AntDesign';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  
  import color from '../Assets/colors/colors';
  import LinearGradient from 'react-native-linear-gradient';
  import normalize from 'react-native-normalize';
  import CertificateRequest from '../OrganizationDashboard/CertificateRequest';
  import {useNavigation} from '@react-navigation/native';
  
  import Modal from 'react-native-modal';
  //import DateTimePicker  from '@react-native-community/datetimepicker';
  import DatePicker from 'react-native-date-picker';
  
  const Inboxmsgheader = props => {
    const navigation = useNavigation();
  
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
  
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    console.log(props);
    return (
      <View>
        <LinearGradient
          colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
          style={styles.linearGradientStyle}>
            <View
            
            >
            <TouchableOpacity
         
         onPress={() => {
           navigation.goBack();
         }}>
         <Iconss name="arrowleft" size={30} color={color.white} />
       </TouchableOpacity>
            </View>
       
          <View>

          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Nouman
          </Text>
          </View>
         
  
          <Iconss name="arrowleft" size={0} color={color.white} />
        </LinearGradient>
        
      </View>
    );
  };
  
  export default Inboxmsgheader;
  
  const styles = StyleSheet.create({
    selectedDateText: {
      marginLeft: 10,
    },
  
    datePickerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#333',
    },
    container: {
      flex: 1,
  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 120,
    },
    from: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#efeeee',
    },
  
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    linearGradientStyle: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      flexDirection: 'row',
      justifyContent:'space-between',
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
    searchContainer: {
      flexDirection: 'row',
      height: 50,
      width: '91%',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 5,
    },
  
    rightCont: {
      flexDirection: 'row',
    },
    notIcon: {
      marginLeft: 1,
    },
    loginBtn: {
      paddingHorizontal: 20,
      backgroundColor: color.purple,
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      width: '50%',
    },
    loginBtndelete: {
      paddingHorizontal: 20,
      backgroundColor: color.red,
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
    inputContainer: {
      flexDirection: 'row',
      borderColor: 'black',
      borderRadius: 200 / 8,
      borderWidth: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    containertwo: {
      flexDirection: 'row',
      borderColor: 'black',
      borderRadius: 200 / 8,
      borderWidth: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    textInput: {
      color: 'black',
      fontSize: 13,
  
      height: 50,
  
      padding: 15,
    },
    calendarIcontwo: {
      paddingRight: 3,
    },
    calendarIcon: {
      padding: 3,
    },
  });
  