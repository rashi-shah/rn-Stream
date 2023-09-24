import React, {FC} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomInput} from '../custom-input';
import {buttons, strings} from '../../constants';
import useChangePassword, {
  ChangePasswordHookReturnType,
} from './hooks/useChangePassword';
import {handleNextFocus} from '../../utils';
import {CustomButton} from '../custom-button';
import {Images} from '../../assets';
import {styles} from './ChangePasswordModalStyles';
import {useColors} from '../../hooks';

interface CustomModalType {
  modalVisible: boolean;
  setModalVisible: (val: boolean) => void;
}

const ChangePasswordModal: FC<CustomModalType> = ({
  modalVisible,
  setModalVisible,
}) => {
  const {
    handleSubmit,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    inputRef,
    closeModal,
  }: ChangePasswordHookReturnType = useChangePassword(setModalVisible);
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};
  const colorStyles = {color: Colors.lightButton};
  const tintColorStyles = {tintColor: Colors.lightButton};

  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={StyleSheet.flatten([styles.modalView, backgroundStyles])}>
        <View style={styles.headerContainer}>
          <Text style={StyleSheet.flatten([styles.header, colorStyles])}>
            {strings.changePassword}
          </Text>
          <TouchableOpacity style={styles.crossIcon} onPress={closeModal}>
            <Image
              style={StyleSheet.flatten([styles.image, tintColorStyles])}
              source={Images.crossIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <CustomInput
            placeholder={strings.oldPassword}
            keyboardType="default"
            autoCapitalize="none"
            value={values.oldPassword}
            onChangeText={handleChange('oldPassword')}
            onBlur={() => setFieldTouched('oldPassword')}
            placeholderTextColor={Colors.gray}
            touched={touched.oldPassword}
            errors={errors.oldPassword}
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={() => handleNextFocus(inputRef.newPasswordRef)}
          />
          <CustomInput
            ref={inputRef.newPasswordRef}
            placeholder={strings.newPassword}
            keyboardType="default"
            autoCapitalize="none"
            value={values.newPassword}
            onChangeText={handleChange('newPassword')}
            onBlur={() => setFieldTouched('newPassword')}
            placeholderTextColor={Colors.gray}
            touched={touched.newPassword}
            secureTextEntry
            errors={errors.newPassword}
            returnKeyType="next"
            onSubmitEditing={() => handleNextFocus(inputRef.confirmPasswordRef)}
          />
          <CustomInput
            ref={inputRef.confirmPasswordRef}
            placeholder={strings.confirmPassword}
            keyboardType="default"
            autoCapitalize="none"
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={() => setFieldTouched('confirmPassword')}
            placeholderTextColor={Colors.gray}
            secureTextEntry
            touched={touched.confirmPassword}
            errors={errors.confirmPassword}
            returnKeyType="next"
          />
          <CustomButton onPress={handleSubmit} label={buttons.changePassword} />
        </View>
      </View>
    </Modal>
  );
};

export default ChangePasswordModal;
