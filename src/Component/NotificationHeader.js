import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Dimensions,
  } from 'react-native';
  import React, {useState} from 'react';
  import Icon from 'react-native-vector-icons/AntDesign';
  import {useNavigation} from '@react-navigation/native';
  import color from '../Assets/colors/colors';
  import LinearGradient from 'react-native-linear-gradient';
  import normalize from 'react-native-normalize';
  import {DrawerActions} from '@react-navigation/native';
  import {width} from 'react-native-dimension';
  import Modal from 'react-native-modal';
  import {background} from 'native-base/lib/typescript/theme/styled-system';
  
  const NotificationHeader = props => {
    const navigation = useNavigation();
  
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return (
      <>
        <LinearGradient
          colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
          style={styles.linearGradientStyle}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrowleft" size={30} color={color.white} />
          </TouchableOpacity>
  
          <Text
            style={{
              color: 'white',
              width: '80%',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {props.Text}
          </Text>
  
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="delete"
              size={25}
              color={color.white}
              onPress={toggleModal}
            />
          </TouchableOpacity>
  
          <Modal
            transparent={true}
            isVisible={isModalVisible}
            style={styles.modalContainer}>
            <View style={{backgroundColor: 'white'}}>
              <LinearGradient
                colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
                style={styles.lineargradientmodal}>
                <Icon
                  name="close"
                  size={25}
                  style={{color: 'white'}}
                  onPress={() => {
                    toggleModal(false);
                  }}
                />
              </LinearGradient>
              <View
            style={{justifyContent:'center',alignItems:'center',marginTop:10}}
            >
            <Text
            style={{color:color.purple,fontSize:22,fontWeight:'bold'}}
            >
              Are you sure you want to</Text>
              <Text
              style={{color:color.purple,fontSize:22,fontWeight:'bold'}}
              >
                delete all notification?
              </Text>
            </View>
  <View
  style={{
  
    flexDirection:'row'
  }}
  >
  <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  toggleModal(false);
                }}>
                <Text style={styles.loginText}>Cancel</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginBtndelete}
                onPress={() => {
                  toggleModal(false);
                }}>
                <Text style={styles.loginText}>Delete</Text>
              </TouchableOpacity>
            </View>
  </View>
             
  
                     
  
                 
              <View style={{marginBottom: '5%'}} />
            </View>
          </Modal>
        </LinearGradient>
      </>
    );
  };
  
  export default NotificationHeader;
  
  const styles = StyleSheet.create({
    linearGradientStyle: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: normalize(65),
      elevation: 0,
      paddingHorizontal: 12,
      textAlign: 'center',
      zIndex: -60,
    },
    lineargradientmodal: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: normalize(45),
      elevation: 0,
      paddingHorizontal: 12,
      textAlign: 'center',
      zIndex: -60,
    },
  
    rightCont: {
      flexDirection: 'row',
    },
    notIcon: {
      marginLeft: 5,
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
      width: '50%',
    
      alignItems: 'center',
      marginTop: 20,
    },
    loginText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: color.white,
    },
  });
  