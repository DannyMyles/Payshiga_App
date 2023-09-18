// CountriesModal.tsx
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
import { TestAssessmentScreenNavigationProp } from '../types/types';

import allAdresses from '../utils/allAdresses';

export type ItemData = {
  adress: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
};

interface CountriesModalProps {
  isVisible: boolean;
  onClose: (item?: ItemData) => void;
  navigation: TestAssessmentScreenNavigationProp
}

const AddressModal: React.FC<CountriesModalProps> = ({isVisible, onClose, navigation }) => {
  const DATA = allAdresses
  const handleUnderstandPress = () => {navigation.navigate('Referrel')
  };

  const showAddress = () => {

  }

  const handleItemClick = (item: ItemData) => {
    onClose(item)
  }

  const Item = ({item, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={{marginVertical: 6, padding: 10}}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize: 18, marginRight: 15}}>{item.adress}</Text>
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

  return (
    <SafeAreaView>
      <Modal
        presentationStyle="fullScreen"
        visible={isVisible}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '900'}}>
                  Select Country
                </Text>
                <TouchableOpacity onPress={() => onClose()}>
                  <Image
                    source={require('../public/img/closeIcon.png')}
                    style={styles.iconStyle} ></Image>
              </TouchableOpacity>
            </View>
            <View>
            
            <TouchableWithoutFeedback onPress={showAddress}>
              <TextInput placeholder={`Tap the Search bar`} placeholderTextColor="#454647" inputMode='text' style={{ fontSize: 20, color: "white" }}></TextInput>
            </TouchableWithoutFeedback>
              <FlatList data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.adress}/>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  iconStyle: {height: 25, width: 25, backgroundColor: 'white', opacity: 1,borderRadius: 20 },
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

export default AddressModal;
