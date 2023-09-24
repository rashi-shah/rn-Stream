import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import styles from './CustomButtonStyles';
import useColors from '../../hooks/useColors';

interface CustomButtonType {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: FC<CustomButtonType> = ({label, onPress, disabled}) => {
  const {Colors} = useColors();
  const colorStyles = {
    backgroundColor: Colors.lightButton,
    color: Colors.lightForeground,
    borderColor: Colors.lightButton,
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={StyleSheet.flatten([styles.button, colorStyles])}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
