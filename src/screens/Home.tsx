import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import InfoModal from '../components/InfoModal';
import { HomeScreenProps } from '../types/types';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLoginPress = () => {};

  const handleCreateAccountPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="Login"
        onPress={handleLoginPress}
        variant="primary"
      />
      <CustomButton
        title="Create an Account"
        onPress={handleCreateAccountPress}
        variant="secondary"
      />
      <InfoModal isVisible={isModalVisible} onClose={handleCloseModal} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10120F',
    paddingTop: 300,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 500,
    height: 500,
    color: 'white',
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'ShigaSans',
    fontWeight: '500',
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Home;
