import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { ReferrelScreenNavigationProp } from '../types/types';


interface TestProps {
  navigation: ReferrelScreenNavigationProp 
}
export const SelectCountryCode: React.FC<TestProps> = ( { navigation} ) => {
  const countryCode = '+234'
  const handleSkipOnPress = () => {

  }


    const handleContinueOnPress = () => {navigation.navigate('Codesent')
  }
    return (
      <View style={styles.container}>
        <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>SelectCountryCode </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5  }}>We will send you a verification code confirm this is your number</Text>
        <TextInput placeholder={`${countryCode} 123456789`} placeholderTextColor="#454647" keyboardType="phone-pad" style={{ fontSize: 20, color: "white" }}></TextInput>
        </View>

        <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 40}} >
          <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "#6771FF", width:300, justifyContent: 'flex-end'}} onPress={handleContinueOnPress}>
            <Text style={{...styles.btnTextStyle, color: "white"}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      backgroundColor: 'black',
      paddingHorizontal: 20,
      paddingTop: 20
    },
    buttonStyle: {
      borderRadius: 30,
      width: 150,
      borderWidth: 1,
      borderColor: 'white',
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginVertical: 10,
    },
    btnTextStyle: {
      fontSize: 16,
      textAlign: 'center',
    },
  });

  export default SelectCountryCode