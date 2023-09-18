import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useState } from 'react'
import { DashboardScreenRouteProp, TestAssessmentScreenProps } from '../types/types';
import AddressModal, { ItemData } from '../components/AdressModal';

interface AdressProps {
  navigation: DashboardScreenRouteProp 
}
export const Address: React.FC<TestAssessmentScreenProps> = ( { navigation} ) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [countryCode, setCountryCode] = useState<string>('+254')
  const [inputChange, setInputChange] = useState<string>()

  const openCountriesModal= () => {
    setShowModal(true)
  }

  const handleModalClose = (item: ItemData | undefined) => {
    if(item) setCountryCode(item.adress)
    setShowModal(false)
  }

    const handleContinueOnPress = () => {navigation.navigate('PhoneCode')
  }
    return (
      <>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Add your primary address </Text>
          <View style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
            <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', gap: 5}}>
            <Image
              source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAZlBMVEX///8AAAD8/Pz29vbz8/O6urrr6+vi4uKQkJArKyv5+fnOzs5eXl5BQUGEhIQxMTGKioqlpaXBwcEVFRWurq5paWmamprb29vIyMh6eno4ODhWVlZ0dHRPT08mJibV1dUeHh4MDAy4xBtkAAADKUlEQVRoge2a17aqMBCGITSloyLY9f1fcuM+SSYFRJcT9rmY7zLJ4jdlSiZ6HkEQBEEQBEEQBEEMsHCA/YVykERlfikGLnkZJcGi4klZ+BpFmSwmHl38ES7RIuJ9NSb+pOqdi8fnKfEn59itejY5db4AmUv13WvxJzt36itNaNvWzW7X1O1Wa967Ut8rIsWqS0V72q0K9/rKyq+jUO8Lo7Xj9b/B91cjTi5QduaGr57excevE1+/XcWIezo+4gsOctcn/XsoT8ABW/02rz5sgNRHXn6W8+9WL/1aLLxSjhuGMzGtGa/27rgPOb1r08I3nDDVO/7R4+yRTo98aIcoL+akh/SkafO8bfREI3Lg+8SU1DZWin0utXMmFgpPPXnYM0qU0FupC8BX6oGXfYkFVaw51gK/ao7CQ+DlXtydr5Wm1tdolS4efFZo8rmlkfkGmTU6R5O/Wlt/MOUVL883/4omzyU2VosC9G2sFmx5ZsuD8bmShzQ+tuXh7PfOZ/8nix9ZLaPyEbY8dzGKJZemegl9/ORXaPLcxyhBtDPllQBne4kvEZashBbD8BWzZ7aX+BKxm+DamIzrvxxT+GX4Pj/eWnP02AnUT2rErf+1bREvuyKD1QJ7w2PLutHG8qEFnrrX+GP7Gfd129Z9PDpU/03fkYhLbDg3MuAjt6i1HlHTOM8NLN8d+BHSzl+aE5M2gproejD917fn/uFk8sPuSyt7Ub7qhLqPXuWD6/vkugayxICX50nk7XXqUAfSEWLavCCR9YVi1KGBG7w7KbCKLMb3L2PXZ0i9HRU3pVWNJdGQATir7UJtqzS7Gtm1SF1x72kbAD/MwaEHIMvQlngjm9GLSjq5FFIOGJT88G5W46RQPpXmBVn/fPXjW1hl6scP0XBd4EknNtxPKJ9WcGP8FJksoOfDbFN5Gh7u31K8Z1CHc96qzm6ZpyQ1qfDLegl3YwI+TuLsEcOG2Xc87PRmBqO0hFpDnYcx7RXVvbsxUS9569n0Hx9wP4gFzA+Qea3Tl8tpNosbvM6v+8G8S37Izkp7lqVc2N0YsGX/tEEQBEEQBEEQBEH8x/wASfocaAv94/8AAAAASUVORK5CYII="}}
              style={styles.iconStyle} ></Image>
            <TextInput placeholder={'Tap the Search bar'} placeholderTextColor="#454647" inputMode='text' style={{ fontSize: 20, color: "white" }} onChangeText={setInputChange}></TextInput>
            </View>
          </View>
        </View>

        <View style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 40 }}>
          { inputChange && <TouchableOpacity style={{ ...styles.buttonStyle, borderColor: "transparent", backgroundColor: "#6771FF", width: 300, justifyContent: 'center' }} onPress={handleContinueOnPress}>
            <Text style={{ ...styles.btnTextStyle, color: "white" }}>OK</Text>
          </TouchableOpacity>}
        </View>
      </View><AddressModal isVisible={showModal} navigation={navigation} onClose={(item) => handleModalClose(item)} />
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
  iconStyle: {height: 25, width: 25, backgroundColor: 'white', opacity: 0.5,borderRadius: 20 },
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

  export default Address