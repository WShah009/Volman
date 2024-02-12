import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Checkbox} from 'native-base';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';

const Step5 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
  };

  const handlePress2 = () => {
    setIsClicked2(!isClicked2);
  };

  const handlePress3 = () => {
    setIsClicked3(!isClicked3);
  };

  const handlePress4 = () => {
    setIsClicked4(!isClicked4);
  };

  const handlePress5 = () => {
    setIsClicked5(!isClicked5);
  };
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <Text style={styles.verificationText}>Add some intrest</Text>
          {/* <View style={styles.checkboxCont}> 
            <Checkbox
              borderColor={color.default}
              value="0"
              accessibilityLabel="This is a dummy checkbox"
            />
            <Text style={styles.sendYouCode}>Send you a code on phone</Text>
          </View>
          <View style={styles.checkboxCont}>
            <Checkbox
              borderColor={color.default}
              value="1"
              accessibilityLabel="This is a dummy checkbox"
            />
            <Text style={styles.sendYouCode}>Send you a code on Email</Text>
          </View>
          <Text style={styles.textforget1}>
            {' '}
            We have send you as SMS with a code to number/Email
          </Text> */}

<View
style={{flexDirection:'row',justifyContent:'space-between'}}
>
<TouchableOpacity
            onPress={handlePress}
            style={[
              styles.loginBtn,
              {backgroundColor: isClicked ? color.btnColor : 'white'},
            ]}>
            <Text style={{color: isClicked ? 'white' : color.btnColor,fontSize:16}}>
              Raising Funds
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress2}
            style={[
              styles.loginBtn,
              {backgroundColor: isClicked2 ? color.btnColor : 'white'},
            ]}>
            <Text style={{color: isClicked2 ? 'white' : color.btnColor,fontSize:16}}>
              Giving First Aid
            </Text>
          </TouchableOpacity>
</View>


<TouchableOpacity
            onPress={handlePress3}
            style={[
              
              {backgroundColor: isClicked3 ? color.btnColor : 'white',  marginTop: 10,
              width: '100%',
              borderRadius: 6,
             
              textAlign: 'center',
              height: normalize(55),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',},
            ]}>
            <Text style={{color: isClicked3 ? 'white' : color.btnColor,fontSize:16}}>
             Monitoring And Conserving Wildlife
            </Text>
          </TouchableOpacity>
                  
          <View
style={{flexDirection:'row',justifyContent:'space-between'}}
>
<TouchableOpacity
            onPress={handlePress4}
            style={[
              
              {backgroundColor: isClicked4 ? color.btnColor : 'white',  marginTop: 10,
              width: '35%',
              borderRadius: 6,
             
              textAlign: 'center',
              height: normalize(55),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',},
            ]}>
            <Text style={{color: isClicked4 ? 'white' : color.btnColor,fontSize:16}}>
              Driving
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress5}
            style={[
              
              {backgroundColor: isClicked5 ? color.btnColor : 'white',  marginTop: 10,
              width: '63%',
              borderRadius: 6,
           
              textAlign: 'center',
              height: normalize(55),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',},
            ]}>
            <Text style={{color: isClicked5 ? 'white' : color.btnColor,fontSize:16}}>
              Providing legal Help
            </Text>
          </TouchableOpacity>
</View>   
         

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.skipBtn}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <Text style={styles.btnText}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <Text style={styles.conText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Step5;

const styles = StyleSheet.create({
  containerc: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '85%',
    height: 45,
    marginLeft: 30,
    fontSize: 20,
  },
  forget: {
    marginBottom: 300,
  },
  verificationText: {
    color: color.btnColor,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },

  textforget1: {
    marginTop: 15,
    fontFamily: 'Segoe UI, Regular',
    color: color.default,
    fontSize: 15,
    textAlign: 'center',
  },

  sendYouCode: {
    color: color.btnColor,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginBtn: {
    marginTop: 10,
    width: '49%',
    borderRadius: 6,
    backgroundColor: color.btnColor,
    textAlign: 'center',
    height: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
 
  
  },
  continueBtn: {
    marginTop: 27,
    width: '40%',
    borderRadius: 6,
    backgroundColor: color.btnColor,
    textAlign: 'center',
    height: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  skipBtn: {
    marginTop: 27,
    width: '40%',
    borderRadius: 6,
    backgroundColor: 'white',
    textAlign: 'center',
    height: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
  },

  btnText: {
    color: color.btnColor,
    fontSize: 17,
    fontWeight: 'bold',
  },
  conText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  contentStyle: {
    marginTop: 30,
    width: '90%',
  },
  checkboxCont: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});
