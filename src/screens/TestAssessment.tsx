import { StyleSheet, Text, View, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { ChangeEvent, Component, useState } from 'react'
import { ReferrelScreenNavigationProp, TestAssessmentScreenProps } from '../types/types';
import CountriesModal, { ItemData } from '../components/CountryModal';

export const TestAssessment: React.FC<TestAssessmentScreenProps> = ( { navigation} ) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [countryCode, setCountryCode] = useState<string>('+254')
  const [inputChange, setInputChange] = useState<string>()

  const handleSkipOnPress = () => {

  }

  const openCountriesModal= () => {
    setShowModal(true)
  }

  const handleModalClose = (item: ItemData | undefined) => {
    if(item) setCountryCode(item.code)
    setShowModal(false)
  }

  const handleInputChange = (e: ChangeEvent<TextInputChangeEventData>) => {
    console.log("e", e.target)
  }

    const handleContinueOnPress = () => {navigation.navigate('PhoneCode')
  }
    return (
      <>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Test Assessment</Text>
          <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5 }}>We will send you a verification code confirm this is your number</Text>
          <View style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
            <TouchableOpacity onPress={openCountriesModal}>
              <TextInput value={countryCode} editable={false} style={{ fontSize: 20, color: "white", marginHorizontal: 10 }}></TextInput>
            </TouchableOpacity>
            <TextInput placeholder={`123456789`} placeholderTextColor="#454647" keyboardType="phone-pad" style={{ fontSize: 20, color: "white" }} onChangeText={setInputChange}></TextInput>
          </View>
        </View>

        <View style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 40 }}>
          { inputChange && <TouchableOpacity style={{ ...styles.buttonStyle, borderColor: "transparent", backgroundColor: "#6771FF", width: 300, justifyContent: 'center' }} onPress={handleContinueOnPress}>
            <Text style={{ ...styles.btnTextStyle, color: "white" }}>Continue</Text>
          </TouchableOpacity>}
        </View>
      </View><CountriesModal isVisible={showModal} navigation={navigation} onClose={(item) => handleModalClose(item)} />
      </>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
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

  export default TestAssessment