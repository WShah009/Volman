import React from "react";
import { StyleSheet} from 'react-native'
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider,AspectRatio,Image, Text, Box } from "native-base";

export default function Box1() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={0.8} bg="#fff"  alignItems="center" justifyContent="center" style={styles.textforgets2}>
      <AspectRatio  w="40%" h= "100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>

        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  
  textforgets2: {
     
      marginBottom: 30, 

  
    },
 
})