// InfoModal.tsx
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import { HomeScreenNavigationProp, HomeScreenProps } from '../types/types';
// const closeIcon =

interface InfoModalProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: HomeScreenNavigationProp
}

const InfoModal: React.FC<InfoModalProps> = ({isVisible, onClose, navigation }) => {
  const handleUnderstandPress = () => {navigation.navigate('Referrel')
  };

  return (
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
                Important Notice
              </Text>
            <TouchableOpacity onPress={onClose}>
            <Image
              source={require('../public/img/closeIcon.png')}
              style={styles.iconStyle} ></Image>
              </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.modalText}>
              All interactions and transitions across the span of this flow are
              intentional, important, and mandatory to follow. All Active CTA
              "buttons" should have a short zoom-in effect when tapped on. Use
              the Preview feature on Figma to view the prototype. Best of Luck!!
            </Text>
            <TouchableOpacity
              style={{...styles.buttonStyle, ...styles.secondaryButton, alignSelf: "center", marginTop: 30}}
              onPress={handleUnderstandPress}>
              <Text style={{...styles.btnTextStyle}}>I Understand</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
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
    height: 350,
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

export default InfoModal;
