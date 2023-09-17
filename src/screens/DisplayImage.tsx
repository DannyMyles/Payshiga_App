import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { CreateShigaIDIINavigationProp} from '../types/types';

interface TestProps {
  navigation: CreateShigaIDIINavigationProp 
}

export const DisplayImage: React.FC<TestProps> = ( { navigation } ) => {
    const handleContinueOnPress = () => {
        navigation.navigate('UploadImage')
  }
    return (
      <View style={styles.container}>
        <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Set a Display Image</Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 2, opacity: 0.5  }}>Choose and image for your wallet profile</Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5  }}>You can always change this later</Text>
        <View>
          <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5  }}> Image here</Text>
        </View>
        <View style={{ flexWrap:'wrap',flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', gap: 20, marginTop: 100}}> 
          <View style={{marginBottom: 10, opacity: 0.5}} >
          <Text style={{ color: "white"}}> Or Customize</Text>
          </View>
          <View style={{ flexWrap:'wrap',flexDirection: 'row',  gap: 40, width: '100%'}}>
            <View style={{backgroundColor: '#4B92F7', width: 50, height:50, borderRadius: 30}}></View>
            <View style={{backgroundColor: '#75E6C0', width: 50, height:50, borderRadius: 30}}></View>
            <View style={{backgroundColor: '#EB5149', width: 50, height:50, borderRadius: 30}}></View>
            <View style={{backgroundColor: '#59C1E9', width: 50, height:50, borderRadius: 30}}></View>
          </View>
          <View style={{ flexWrap:'wrap',flexDirection: 'row',  gap: 40}}>
          <View style={{backgroundColor: '#E862BC', width: 50, height:50, borderRadius: 30}}></View>
            <View style={{backgroundColor: '#F4D957', width: 50, height:50, borderRadius: 30}}></View>
            <View style={{backgroundColor: '#E26F3F', width: 50, height:50, borderRadius: 30}}></View>
            <View style={{backgroundColor: '#9F40F5', width: 50, height:50, borderRadius: 30}}></View>
          </View>

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

  export default DisplayImage