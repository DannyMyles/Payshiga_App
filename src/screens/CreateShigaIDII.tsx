import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { CreateShigaIDIINavigationProp} from '../types/types';

interface TestProps {
  navigation: CreateShigaIDIINavigationProp 
}

export const CreateShigaIDII: React.FC<TestProps> = ( { navigation } ) => {
    const handleContinueOnPress = () => {
        navigation.navigate('DispalayImage')
  }
    return (
      <View style={styles.container}>
        <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Choose a Shiga ID</Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5  }}>Your unique name for getting paid by anyone</Text>
        <View style={{ display: "flex", width: "100%", flexDirection: "row",alignItems: "center",}}>
        <TextInput placeholder={`@`} placeholderTextColor="#454647" keyboardType="phone-pad" style={{ fontSize: 20, color: "white" }}>
        </TextInput>
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>hushpuppi </Text>
        </View>
        </View>

        <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 40}} >
          <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "#6771FF", width:300, justifyContent: 'center'}} onPress={handleContinueOnPress}>
            <Text style={{...styles.btnTextStyle, color: "white"}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: 'center',
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

  export default CreateShigaIDII