import React, {FC} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Images} from '../../../assets';
import {CustomButton, CustomInput} from '../../../components';
import {buttons, strings} from '../../../constants';
import styles from './authStyles';
import {handleNextFocus} from '../../../utils';
import {globalMetrics} from '../../../theme';
import {useLogin} from './hooks';
import {useColors} from '../../../hooks';
import {LoginHookReturnType} from './hooks/useLogin';

const LoginPage: FC = () => {
  const {
    navigateToSignup,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    passwordRef,
  }: LoginHookReturnType = useLogin();
  const insets = useSafeAreaInsets();
  const viewStyle = StyleSheet.flatten([
    styles.containerStyle,
    {paddingBottom: insets.bottom},
  ]);

  const {Colors} = useColors();
  const textColorStyles = {color: Colors.darkBackground};
  const colorStyles = {color: Colors.blue};
  const foregroundStyles = {backgroundColor: Colors.lightForeground};
  const backgroundStyles = {backgroundColor: Colors.lightBackground};
  const baseBottomStyles = {borderBottomColor: Colors.lightForeground};
  const tintColorStyles = {tintColor: Colors.lightButton};

  return (
    <>
      <SafeAreaView
        style={StyleSheet.flatten([styles.topView, backgroundStyles])}
      />
      <SafeAreaView style={viewStyle}>
        <View style={StyleSheet.flatten([styles.container, backgroundStyles])}>
          <View style={styles.logoContainer}>
            <Image
              style={StyleSheet.flatten([styles.logo, tintColorStyles])}
              source={Images.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.flex}>
            <View
              style={StyleSheet.flatten([styles.baseTop, baseBottomStyles])}
            />
            <View
              style={StyleSheet.flatten([styles.baseBottom, foregroundStyles])}>
              <View style={styles.headerView}>
                <Text
                  style={StyleSheet.flatten([
                    styles.loginHeader,
                    textColorStyles,
                  ])}>
                  {strings.loginHeader}
                </Text>
              </View>
              <View style={styles.textInputContainer}>
                <KeyboardAvoidingView
                  behavior={globalMetrics.isIos ? 'padding' : 'height'}>
                  <ScrollView>
                    <CustomInput
                      placeholder={strings.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      placeholderTextColor={Colors.gray}
                      touched={touched.email}
                      errors={errors.email}
                      returnKeyType="next"
                      onSubmitEditing={() => handleNextFocus(passwordRef)}
                    />
                    <CustomInput
                      ref={passwordRef}
                      placeholder={strings.password}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                      value={values.password}
                      keyboardType="default"
                      placeholderTextColor={Colors.gray}
                      touched={touched.password}
                      secureTextEntry
                      errors={errors.password}
                      returnKeyType="done"
                    />
                    <CustomButton
                      onPress={handleSubmit}
                      label={buttons.login}
                    />
                  </ScrollView>
                </KeyboardAvoidingView>
                <View style={styles.rowFlex}>
                  <Text
                    style={StyleSheet.flatten([styles.text, textColorStyles])}>
                    {strings.noAccount}
                  </Text>
                  <TouchableOpacity onPress={() => navigateToSignup()}>
                    <Text
                      style={StyleSheet.flatten([
                        styles.signupText,
                        colorStyles,
                      ])}>
                      {strings.signUp}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default LoginPage;
