import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {styles} from './CustomInputStyles';
import {CustomInputProps, CustomInputRef} from './CustomInputType';
import useColors from '../../hooks/useColors';
import {Images} from '../../assets';

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(
  (
    {
      touched,
      errors,
      keyboardType,
      onChangeText,
      value,
      placeholder,
      placeholderTextColor,
      onBlur,
      autoCapitalize,
      defaultValue,
      returnKeyType,
      onSubmitEditing,
      secureTextEntry,
    },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
      secureTextEntry as boolean,
    );
    const {Colors} = useColors();
    const colorStyle = {
      color: Colors.darkBackground,
      borderColor: Colors.darkBackground,
    };
    const inputRef = useRef<TextInput>(null);
    const focusNext = () => inputRef?.current?.focus();

    const setPasswordVisible = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    useImperativeHandle(
      ref,
      () => ({
        focus: focusNext,
      }),
      [],
    );

    return (
      <>
        <View style={styles.container}>
          <TextInput
            secureTextEntry={isPasswordVisible}
            ref={inputRef}
            style={StyleSheet.flatten([styles.input, colorStyle])}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={setPasswordVisible}>
              <Image
                style={styles.eyeIcon}
                source={isPasswordVisible ? Images.openEye : Images.closedEye}
              />
            </TouchableOpacity>
          )}
        </View>
        {touched && errors && <Text style={styles.error}>{errors}</Text>}
      </>
    );
  },
);
export default CustomInput;
