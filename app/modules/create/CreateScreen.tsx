import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React, {FC} from 'react';
import {buttons, strings} from '../../constants';
import {styles} from './CreateScreenStyles';
import {CustomButton, CustomInput, CustomModal} from '../../components';
import {globalMetrics} from '../../theme';
import {Images} from '../../assets';
import {handleNextFocus} from '../../utils';
import {useAddUser} from './hooks';
import {CreateCustomHookReturnType} from './hooks/useAddUser';
import useColors from '../../hooks/useColors';

const CreateScreen: FC = () => {
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};
  const tintColorStyles = {tintColor: Colors.lightForeground};
  const imageBackgroundStyles = {backgroundColor: Colors.lightButton};
  const {
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    lastNameRef,
    emailRef,
    modalVisible,
    setModalVisible,
    chooseImage,
    openCamera,
    response,
  }: CreateCustomHookReturnType = useAddUser();

  return (
    <SafeAreaView
      style={StyleSheet.flatten([styles.container, backgroundStyles])}>
      <KeyboardAvoidingView
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        style={styles.flex}>
        <ScrollView>
          <View style={styles.profileImageContainer}>
            {response?.assets?.[0]?.uri ? (
              <Image
                resizeMode="cover"
                style={styles.profileImage}
                source={{uri: response?.assets?.[0]?.uri}}
              />
            ) : (
              <Image
                resizeMode="stretch"
                style={styles.defaultProfileImage}
                source={Images.profileImage}
              />
            )}
          </View>
          <View
            style={StyleSheet.flatten([
              styles.editProfileIcon,
              imageBackgroundStyles,
            ])}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                resizeMode="cover"
                style={StyleSheet.flatten([
                  styles.profileEditImage,
                  tintColorStyles,
                ])}
                source={Images.editIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
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
              onSubmitEditing={() => handleNextFocus(lastNameRef)}
            />
            <CustomInput
              ref={lastNameRef}
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
              onSubmitEditing={() => handleNextFocus(emailRef)}
            />
            <CustomInput
              ref={emailRef}
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
            />
          </View>
          <CustomButton onPress={handleSubmit} label={buttons.addUser} />
        </ScrollView>
      </KeyboardAvoidingView>
      <CustomModal
        {...{modalVisible, setModalVisible, chooseImage, openCamera}}
      />
    </SafeAreaView>
  );
};

export default CreateScreen;
