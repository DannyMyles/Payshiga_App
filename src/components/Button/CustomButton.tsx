import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, variant }) => {
  const buttonStyle = variant === 'primary' ? styles.primaryButton : variant === 'secondary' ? styles.secondaryButton : styles.buttonStyle;
  const textStyle = variant === 'primary' ? { color: 'white' }  : { color: 'black' };

  return (
    <View >
    <TouchableOpacity style={{...styles.buttonStyle, ...buttonStyle}} onPress={onPress}>
      <Text style={{...styles.btnTextStyle, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
    marginTop: 50,
    backgroundColor: 'red'
    },
  buttonStyle: {
    borderRadius: 30,
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: 'transparent',
  },
  secondaryButton: {
    backgroundColor: 'white',
  },
  btnTextStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
