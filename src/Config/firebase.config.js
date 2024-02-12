// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDz8a8MFmd6WKEaikWi6CgLwhri48d6I2c',
  authDomain: 'voleman-35fb1.firebaseapp.com',
  projectId: 'voleman-35fb1',
  storageBucket: 'voleman-35fb1.appspot.com',
  messagingSenderId: '755141002500',
  appId: '1:755141002500:web:afe3b3c281a1de6b333c51',
  measurementId: 'G-1H2CBBQ78Y',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
