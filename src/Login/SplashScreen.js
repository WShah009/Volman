import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';
import React, {useEffect} from 'react';
import color from '../Assets/colors/colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../Assets/Mask.png')} resizeMode="cover" style={styles.backgroundImg}>
        <Image
          source={require("./../Assets/Final.png")}
          style={{width: '60%', resizeMode: 'contain', }}
        />
        <View
        style={{alignItems:'center'}}
        >
          <Text
          style={{color:color.purple,fontSize:20,marginTop:-25}}
          >
            "A Partner is Facilitating Services"
          </Text>
        </View>

      </ImageBackground>
    </View>

    
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  // fadingContainer: {
  //   paddingVertical: 5,
  //   paddingHorizontal: 25,
  //   backgroundColor: 'lightseagreen',
  // },
  backgroundImg: {
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
});

