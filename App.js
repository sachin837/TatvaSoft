/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from 'app/navigation';
import { UserProvider } from 'app/Utils/UserContext';
import { SafeAreaView } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <UserProvider>
        <Navigator/>
      </UserProvider>
    </SafeAreaView>
  );
};


export default App;
