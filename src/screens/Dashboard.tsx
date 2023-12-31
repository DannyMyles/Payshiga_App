import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { CreateShigaIDIINavigationProp, UploadImageNavigationProp} from '../types/types';

interface TestProps {
  navigation: UploadImageNavigationProp 
}

export const Dashboard: React.FC<TestProps> = ( { navigation } ) => {
    const handleContinueOnPress = () => {
      navigation.navigate('Address')
  }
    return (
      <View style={styles.container}>
          <View style={{ width: '100%', display: 'flex',justifyContent:'flex-start', flexDirection:'row', gap:5 }}>
            <View style={{backgroundColor: '#FFC8DD', width: 30, height:30, borderRadius: 30}}>
              <Text style={{ color: "black", fontSize: 16, opacity: 0.5, textAlign:'center', fontWeight: 'bold'}}>CC</Text>
            </View>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold"}}>Home</Text>
          </View>
        <View style={{ backgroundColor: '#171819', width: '100%', borderRadius:20, display: 'flex', justifyContent: 'space-between', padding:20 }}>
          <View style={{}}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold"}}>NGN Balance</Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold"}}>₦95,800.05</Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold"}}>Home</Text>
          </View>
          <View style={{ backgroundColor: '#171819', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View>
              <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "#454647", justifyContent: 'center'}} onPress={handleContinueOnPress}>
              <Text style={{...styles.btnTextStyle, color: "white"}}>Add Money</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "#454647", justifyContent: 'center'}} onPress={handleContinueOnPress}>
              <Text style={{...styles.btnTextStyle, color: "white"}}>Transfer</Text>
            </TouchableOpacity>
            </View>
          </View>

        </View>
          <View  style={{display: 'flex', justifyContent:'space-between', flexDirection:'row', width: '100%', gap:10}}>
          <View style={{backgroundColor: '#171819', padding: 20, borderRadius: 30,}}>
                 <Text style={{ color: "white", fontSize: 20, fontWeight: "bold"}}>Bank Account</Text>
                 <Text style={{ color: "white", fontSize: 18, marginBottom: 10, opacity: 0.5  }}>Show account info</Text>
              </View>
              <View style={{backgroundColor: '#171819', padding: 20, borderRadius: 30 }}>
                 <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", borderRadius: 30}}>Pay Bills</Text>
                 <Text style={{ color: "white", fontSize: 18, marginBottom: 10, opacity: 0.5  }}>Top-Up & utilities</Text>
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
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginVertical: 10,
    },
    btnTextStyle: {
      fontSize: 16,
      textAlign: 'center',
    },
  });

  export default Dashboard