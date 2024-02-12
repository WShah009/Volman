import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
//import {auth} from '../firebase.config';
export const _signInWithGoogle = async () => {
  try {
    // Configure Google Sign-In
    GoogleSignin.configure({
      // offlineAccess: false,
      webClientId:
        '755141002500-4siq0du1c73o4kvkoftjbusp9o50vi5n.apps.googleusercontent.com',
      //scopes: ['profile', 'email'],
    });
    // Check if Play Services are available
    await GoogleSignin.hasPlayServices();

    // Sign in with Google
    const userInfo = await GoogleSignin.signIn();
    const {idToken} = userInfo;

    // Get Google credentials
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

    // Sign in with Firebase
    await auth().signInWithCredential(googleCredentials);

    return userInfo;
  } catch (error) {
    console.log('Google Sign In Error:', error);
    return null;
  }
};

// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// //import auth from '@react-native-firebase/auth';
// import { auth } from '../firebase.config';

// export const _signInwithGoogle = async () => {
//   try {
//     GoogleSignin.configure({
//       offlineAccess: false,
//       webClientId: '755141002500-4siq0du1c73o4kvkoftjbusp9o50vi5n.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//     });
//     await GoogleSignin.hasPlayServices();
//     const userInfo=await GoogleSignin.signIn();
//     const {idToken}=await GoogleSignin.signIn();
//     const googleCredentials=auth.GoogleAuthProvider.credential(idToken);
//     await  auth().signInWithCredential(googleCredentials);
//     return userInfo;

//   } catch (error) {
//     console.log('=>Google Sign In',error)
//     return null
//   }
// };
