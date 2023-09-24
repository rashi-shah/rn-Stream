import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton, CustomInput} from '../../../components';
import {buttons, strings} from '../../../constants';
import {globalMetrics} from '../../../theme';
import {useSignup} from './hooks';
import styles from './SignupScreenStyles';
import {handleNextFocus} from '../../../utils';
import {useColors} from '../../../hooks';
import {SignupHookReturnType} from './hooks/useSignup';

const CustomSignupForm: FC = () => {
  const {
    navigateToLogin,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    inputRef,
  }: SignupHookReturnType = useSignup();
  const {Colors} = useColors();
  const textColorStyles = {color: Colors.darkBackground};
  const colorStyles = {color: Colors.blue};

  return (
    <View style={styles.textInputContainer}>
      <KeyboardAvoidingView
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        style={styles.flex}
        enabled>
        <CustomInput
          placeholder={strings.firstName}
          keyboardType="default"
          autoCapitalize="none"
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          onBlur={() => setFieldTouched('firstName')}
          placeholderTextColor={Colors.gray}
          touched={touched.firstName}
          errors={errors.firstName}
          returnKeyType="next"
          onSubmitEditing={() => handleNextFocus(inputRef.lastNameRef)}
        />
        <CustomInput
          ref={inputRef.lastNameRef}
          placeholder={strings.lastName}
          keyboardType="default"
          autoCapitalize="none"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          onBlur={() => setFieldTouched('lastName')}
          placeholderTextColor={Colors.gray}
          touched={touched.lastName}
          errors={errors.lastName}
          returnKeyType="next"
          onSubmitEditing={() => handleNextFocus(inputRef.emailRef)}
        />
        <CustomInput
          ref={inputRef.emailRef}
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
          onSubmitEditing={() => handleNextFocus(inputRef.mobileRef)}
        />
        <CustomInput
          ref={inputRef.mobileRef}
          placeholder={strings.phone}
          onChangeText={handleChange('phone')}
          onBlur={() => setFieldTouched('phone')}
          value={values.phone}
          keyboardType="phone-pad"
          autoCapitalize="none"
          placeholderTextColor={Colors.gray}
          touched={touched.phone}
          errors={errors.phone}
          returnKeyType="next"
          onSubmitEditing={() => handleNextFocus(inputRef.passwordRef)}
        />
        <CustomInput
          ref={inputRef.passwordRef}
          placeholder={strings.password}
          onChangeText={handleChange('password')}
          onBlur={() => setFieldTouched('password')}
          value={values.password}
          keyboardType="default"
          autoCapitalize="none"
          placeholderTextColor={Colors.gray}
          secureTextEntry
          touched={touched.password}
          errors={errors.password}
          returnKeyType="next"
          onSubmitEditing={() => handleNextFocus(inputRef.confirmPasswordRef)}
        />
        <CustomInput
          ref={inputRef.confirmPasswordRef}
          placeholder={strings.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          onBlur={() => setFieldTouched('confirmPassword')}
          value={values.confirmPassword}
          autoCapitalize="none"
          keyboardType="default"
          placeholderTextColor={Colors.gray}
          secureTextEntry
          touched={touched.confirmPassword}
          errors={errors.confirmPassword}
          returnKeyType="done"
        />
        <CustomButton onPress={handleSubmit} label={buttons.signUp} />
      </KeyboardAvoidingView>
      <View style={styles.rowFlex}>
        <Text style={StyleSheet.flatten([styles.text, textColorStyles])}>
          {strings.haveAccount}
        </Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={StyleSheet.flatten([styles.signupText, colorStyles])}>
            {strings.loginHeader}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSignupForm;
