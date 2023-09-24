import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {buttons, strings} from '../../constants';
import {CustomButton, CustomInput, CustomModal} from '../../components';
import {globalMetrics} from '../../theme';
import {Images} from '../../assets';
import {styles} from './EditProfileStyles';
import useEditUser, {ProfileCustomHookReturnType} from './hooks/useEditUser';
import {handleNextFocus} from '../../utils';
import {useColors} from '../../hooks';

interface EditProfilePropTypes {
  setIfEditUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfile: FC<EditProfilePropTypes> = ({setIfEditUser}) => {
  const {
    user,
    setModalVisible,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    inputRef,
    handleSubmit,
    chooseImage,
    modalVisible,
    openCamera,
    response,
  }: ProfileCustomHookReturnType = useEditUser(setIfEditUser);

  const {Colors} = useColors();
  const tintColorStyles = {tintColor: Colors.lightForeground};
  const imageBackgroundStyles = {backgroundColor: Colors.lightButton};
  const colorStyles = {color: Colors.gray};
  const backIconStyle = {tintColor: Colors.lightButton};
  const backgroundStyles = {backgroundColor: Colors.lightForeground};

  return (
    <>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => setIfEditUser(false)}>
        <Image
          style={StyleSheet.flatten([styles.backIconImage, backIconStyle])}
          source={Images.backIcon}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        style={StyleSheet.flatten([styles.container, backgroundStyles])}>
        <ScrollView>
          <View style={styles.profileImageContainer}>
            <Image
              resizeMode="cover"
              style={styles.profileImage}
              source={{
                uri: response?.assets?.[0]?.uri ?? user?.currentUser?.profile,
              }}
            />
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
            <Text style={StyleSheet.flatten([styles.text, colorStyles])}>
              {strings.firstName}
            </Text>
            <CustomInput
              keyboardType="default"
              autoCapitalize="none"
              defaultValue={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={() => setFieldTouched('firstName')}
              touched={touched.firstName}
              errors={errors.firstName}
              returnKeyType="next"
              onSubmitEditing={() => handleNextFocus(inputRef.lastNameRef)}
            />
            <Text style={StyleSheet.flatten([styles.text, colorStyles])}>
              {strings.lastName}
            </Text>
            <CustomInput
              ref={inputRef.lastNameRef}
              keyboardType="default"
              autoCapitalize="none"
              defaultValue={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={() => setFieldTouched('lastName')}
              touched={touched.lastName}
              errors={errors.lastName}
              returnKeyType="next"
              onSubmitEditing={() => handleNextFocus(inputRef.emailRef)}
            />
            <Text style={StyleSheet.flatten([styles.text, colorStyles])}>
              {strings.email}
            </Text>
            <CustomInput
              ref={inputRef.emailRef}
              keyboardType="email-address"
              autoCapitalize="none"
              defaultValue={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              touched={touched.email}
              errors={errors.email}
              onSubmitEditing={() => handleNextFocus(inputRef.phoneRef)}
              returnKeyType="next"
            />
            <Text style={StyleSheet.flatten([styles.text, colorStyles])}>
              {strings.phone}
            </Text>
            <CustomInput
              ref={inputRef.phoneRef}
              keyboardType="number-pad"
              autoCapitalize="none"
              defaultValue={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              touched={touched.phone}
              errors={errors.phone}
              returnKeyType="next"
            />
          </View>
          <CustomButton onPress={handleSubmit} label={buttons.editUser} />
        </ScrollView>
      </KeyboardAvoidingView>
      <CustomModal
        {...{chooseImage, modalVisible, openCamera, setModalVisible}}
      />
    </>
  );
};

export default EditProfile;
