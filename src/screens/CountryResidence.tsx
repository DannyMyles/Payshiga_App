// CountryResidence.tsx
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Button,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { CountryResidenceNavigationProp, HomeScreenNavigationProp, HomeScreenProps, ReferrelScreenNavigationProp, TestAssessmentScreenNavigationProp } from '../types/types';

import allCountryCodes from '../utils/allCountryCodes';

export type ItemData = {
  name: string;
  code: string;
  flag: string
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
};

interface CountryResidenceProps {
  navigation: CountryResidenceNavigationProp
}

const CountryResidence: React.FC<CountryResidenceProps> = ({navigation }) => {
  const DATA = allCountryCodes
  const handleItemClick = (item: ItemData) => {
    console.log("awaiting implementation")
    // onClose(item)
  }

  const Item = ({item, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={{marginVertical: 6, padding: 10}}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <View style={{ borderRadius: 50, display: "flex", justifyContent: "center", alignItems: "center", padding: 10, borderColor: "#fff5", borderWidth: 2, marginRight: 15 }}>
          <Text style={{ fontSize: 25}}>{item.flag}</Text>
        </View>
        <Text style={{color: "white", fontWeight: "bold", fontSize: 18, marginRight: 15}}>{item.name}</Text>
        <Text style={{color: "white", opacity: 0.5, fontSize: 18}}>{item.code}</Text>
      </View>
    </TouchableOpacity>
  );

    const renderItem = ({item}: {item: ItemData}) => {
      return (
        <Item
          item={item}
          onPress={() => handleItemClick(item)}
        />
      );
    };

    const handleContinueOnPress = () => {
        navigation.navigate('CreateShigaID')
    }

  return (
        <View style={styles.container}>
        <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Country Of Residence</Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, opacity: 0.5  }}>Terms & service applied to you will depend on your resident country</Text>
        </View>
        <FlatList data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.name}/>
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
  modalContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#10120F',
    padding: 25,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 650,
  },
  modalText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'ShigaSans',
    fontWeight: '500',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  iconStyle: {height: 25, width: 25, backgroundColor: 'white'},
  buttonStyle: {
    borderRadius: 30,
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  secondaryButton: {
    backgroundColor: '#F6BE2C',
  },
  btnTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default CountryResidence;
