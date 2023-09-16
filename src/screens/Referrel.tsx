import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { HomeScreenNavigationProp } from '../types/types';


interface ReffProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: HomeScreenNavigationProp
}
const Rereferal: React.FC<ReffProps> = ({navigation}) =>{
  const handleSkipOnPress = () => {

  }

  const handleContinueOnPress = () => {navigation.navigate('Test')
};
    return (
      <View style={styles.container}>
        <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Enter Referral Code</Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5  }}>"Skip" if you don't have any code</Text>
        <TextInput placeholder='CODE' placeholderTextColor="#454647" inputMode='text' style={{ fontSize: 20, color: "white" }}></TextInput>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5 }}>TAP to find how they find their code?</Text>
        </View>

        <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 40}} >
          <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "#1F2021" }} onPress={handleSkipOnPress}>
            <Text style={{...styles.btnTextStyle, color: "white"}}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "#6771FF"}} onPress={handleContinueOnPress}>
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
export default Rereferal