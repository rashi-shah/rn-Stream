import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Images} from '../../assets';
import {APIConstants, buttons, strings} from '../../constants';
import {styles} from './CustomDrawerStyles';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerNavigationState, ParamListBase} from '@react-navigation/native';
import useDrawer, {DrawerHookReturnType} from './hooks/useDrawer';
import ChangePasswordModal from '../change-password-modal/ChangePasswordModal';
import ChangeThemeModal from '../change-theme-modal/ChangeThemeModal';
import {useColors} from '../../hooks';

export interface CustomDrawerType {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const CustomDrawerContent: FC<CustomDrawerType> = props => {
  const {Colors} = useColors();
  const logoutButtonStyles = {
    backgroundColor: Colors.lightButton,
    color: Colors.lightForeground,
  };
  const emailTextColorStyle = {color: Colors.darkForeground};
  const nameTextColorStyle = {color: Colors.lightButton};
  const {
    modalVisible,
    setModalVisible,
    modalThemeVisible,
    setModalThemeVisible,
    user,
    handleLogout,
    navigateToHome,
    navigateToProfile,
    settingsVisible,
    settingsNotVisible,
    navigateToWebViewScreen,
    isSettingsVisible,
  }: DrawerHookReturnType = useDrawer();

  return (
    <>
      <View style={styles.flex} {...props}>
        <View style={styles.flex}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={Images.drawerProfile}
              resizeMode="contain"
            />
          </View>
          <Text
            style={StyleSheet.flatten([styles.userName, nameTextColorStyle])}>
            {`${user.currentUser?.firstName} ${user.currentUser?.lastName}`}
          </Text>
          <Text
            style={StyleSheet.flatten([styles.userEmail, emailTextColorStyle])}>
            {user.currentUser?.email}
          </Text>
          <View style={styles.userDetails} />
          <View style={styles.drawerContentView}>
            <TouchableOpacity onPress={navigateToHome}>
              <Text style={styles.drawerContent}>{strings.home}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawerContentView}>
            <TouchableOpacity onPress={navigateToProfile}>
              <Text style={styles.drawerContent}>{strings.profile}</Text>
            </TouchableOpacity>
          </View>
          {isSettingsVisible ? (
            <>
              <View style={styles.drawerContentView}>
                <TouchableOpacity onPress={settingsNotVisible}>
                  <Text style={styles.drawerContent}>{strings.settings}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.settingsContentView}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.drawerContent}>
                    {strings.changePassword}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.settingsContentView}>
                <TouchableOpacity onPress={() => setModalThemeVisible(true)}>
                  <Text style={styles.drawerContent}>
                    {strings.changeTheme}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.settingsContentView}>
                <TouchableOpacity
                  onPress={() =>
                    navigateToWebViewScreen(
                      props,
                      APIConstants.termsAndConditionsURL,
                    )
                  }>
                  <Text style={styles.drawerContent}>
                    {strings.termsAndConditions}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.settingsContentView}>
                <TouchableOpacity
                  onPress={() =>
                    navigateToWebViewScreen(
                      props,
                      APIConstants.privacyPolicyURL,
                    )
                  }>
                  <Text style={styles.drawerContent}>
                    {strings.privacyPolicy}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleLogout()}>
                  <Text
                    style={StyleSheet.flatten([
                      styles.logoutButton,
                      logoutButtonStyles,
                    ])}>
                    {buttons.logout}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.drawerContentView}>
              <TouchableOpacity onPress={settingsVisible}>
                <Text style={styles.drawerContent}>{strings.settings}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <ChangePasswordModal {...{modalVisible, setModalVisible}} />
        <ChangeThemeModal {...{setModalThemeVisible, modalThemeVisible}} />
      </View>
      <View>
        <Text style={StyleSheet.flatten([styles.version, emailTextColorStyle])}>
          {strings.version}
        </Text>
      </View>
    </>
  );
};

export default CustomDrawerContent;
