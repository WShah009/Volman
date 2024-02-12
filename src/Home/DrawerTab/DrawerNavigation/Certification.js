import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../Component/Header';
import C_TextInput from '../../../Component/input/input';
import {SelectList} from 'react-native-dropdown-select-list';
import Entypo from 'react-native-vector-icons/Entypo';
import {useEffect} from 'react';
import color from '../../../Assets/colors/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {APIS} from '../../../Apiurls/Apis';
import {useIsFocused} from '@react-navigation/native';
const Certification = () => {
  const [title, setTitle] = useState();
  const [selected, setSelected] = React.useState('');
  const [userData, setData] = React.useState('');
  const [attachment, setAttachment] = useState('');
  const navigation = useNavigation();
  async function getUsers() {
    var formdata = new FormData();
    formdata.append('user_id', global.userid);

    var requestOptions = {
      method: 'POST',

      body: formdata,
    };

    fetch(APIS.GetUsers, requestOptions)
      .then(response => response.json())
      .then(({users}) => {
        let newArray = users.map(item => {
          return {
            key: item.user_id,
            value: item.first_name + ' ' + item.last_name,
          };
        });

        setData(newArray);
      })
      .catch(error => console.log('error', error));
  }

  const onGallery = async () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const result = await launchImageLibrary(options);
    console.log(result);

    if (result.didCancel) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('You cancel the Gallery', ToastAndroid.SHORT);
      } else {
        alert('You cancel the Gallery');
      }
    } else if (result.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (result.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      console.log(result.assets[0]);
      setAttachment(result.assets[0]);
    }
  };
  const PostCertificate = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=5ffcce4baf67b2070a0f9bc5bdc13121');

    var formdata = new FormData();
    formdata.append('user_id', global.userid);
    formdata.append('organizer_id', selected);
    formdata.append('image', {
      uri: attachment.uri,
      type: attachment.type,
      name: attachment.fileName,
    });
    formdata.append('Title', title);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(APIS.certification, requestOptions)
      .then(response => response.json())
      .then(({success}) => {
        if (success === 'Record Inserted Successfully.') {
          if (Platform.OS === 'android') {
            ToastAndroid.show('Successfully Saved', ToastAndroid.SHORT);
            navigation.goBack();
          } else {
            alert('Successfully Saved');
            navigation.goBack();
          }
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Header Text="Certification" />
      <View style={{alignSelf: 'center', width: '90%', marginTop: '5%'}}>
        <C_TextInput
          placeholder="Title"
          placeholderTextColor="#444444"
          onChangeText={e => setTitle(e)}
        />
        <SelectList
          setSelected={setSelected}
          data={userData}
          inputStyles={{color: color.black}}
          boxStyles={{
            backgroundColor: color.white,
            borderColor: color.white,
            height: 51,
          }}
          placeholder="Select Volunteer"
          onChangeText={n => {
            setSelected(n);
            console.log(n);
          }}
          dropdownStyles={{
            backgroundColor: color.white,
            width: '100%',
            color: 'red',
            marginTop: 0,
          }}
          dropdownTextStyles={{color: color.btnColor}}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '40%',
            paddingHorizontal: 5,
          }}
          onPress={() => {
            onGallery();
          }}>
          <Text style={styles.Common_Text_Size_white}>Attachment</Text>
          <Entypo name="attachment" size={20} color={color.btnColor} />
        </TouchableOpacity>
        {attachment ? (
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity onPress={() => setAttachment(null)}>
              <Entypo
                name={attachment ? 'cross' : null}
                size={20}
                color={color.btnColor}
              />
            </TouchableOpacity>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                marginLeft: 10,
              }}
              source={{uri: attachment.uri}}
            />
          </View>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={PostCertificate}>
          <Text style={styles.loginText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Certification;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  Common_Text_Size_white: {
    color: color.btnColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
});
