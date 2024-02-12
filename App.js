import React from 'react';
import {View, Text} from 'react-native';
import MainNavigationHub from './src/Navigation/MainNavigationHub';
import SafeAreaView from 'react-native-safe-area-view';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store/store';
import Step5 from './src/CreateAccount/Step5';
global.imagePath =
  'https://fisdemoprojects.com/volmanNew/public//Backend/images/';
function App() {
  return (
    <Provider store={Store}>
      <PaperProvider>
        
        <MainNavigationHub />
      </PaperProvider>
    </Provider>
  );
}
export default App;
