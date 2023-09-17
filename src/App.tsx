import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Rereferal from './screens/Referrel';
import TestAssessment from './screens/TestAssessment'
import PhoneCodeSent from './screens/PhoneCodeSent';
import ConfrimCodeReceived from './screens/ConfrimCodeReceived';
import CountryResidence from './screens/CountryResidence';
import CreateShigaID from './screens/CreateShigaID';
import CreateShigaIDII from './screens/CreateShigaIDII';
import DisplayImage from './screens/DisplayImage';
import UploadImage from './screens/UploadImage';
import Dashboard from './screens/Dashboard';
const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Referrel' component={Rereferal} />
        <Stack.Screen name='Test' component={TestAssessment} />
        <Stack.Screen name='PhoneCode' component={PhoneCodeSent} />
        <Stack.Screen name='CodeConfirmation' component={ConfrimCodeReceived} />
        <Stack.Screen name='CountryResidence' component={CountryResidence} />
        <Stack.Screen name='CreateShigaID' component={CreateShigaID} />
        <Stack.Screen name='CreateShigaIDII' component={CreateShigaIDII} />
        <Stack.Screen name='DispalayImage' component={DisplayImage} />
        <Stack.Screen name='UploadImage' component={UploadImage} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10120F',
    paddingTop: 300,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 500,
    height: 500,
    color: 'white',
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'ShigaSans',
    fontWeight: '500',
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default App;
