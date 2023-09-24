import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Images} from '../../../assets';
import {strings} from '../../../constants';
import styles from './SignupScreenStyles';
import CustomSignupForm from './CustomSignupForm';
import {useColors} from '../../../hooks/';

const SignupScreen: FC = () => {
  const insets = useSafeAreaInsets();
  const viewStyle = StyleSheet.flatten([
    styles.containerStyle,
    {paddingBottom: insets.bottom},
  ]);
  const {Colors} = useColors();
  const textColorStyles = {color: Colors.darkBackground};
  const foregroundStyles = {backgroundColor: Colors.lightForeground};
  const backgroundStyles = {backgroundColor: Colors.lightBackground};
  const baseTopStyles = {borderBottomColor: Colors.lightForeground};
  const tintColorStyles = {tintColor: Colors.lightButton};

  return (
    <>
      <SafeAreaView
        style={StyleSheet.flatten([styles.topView, backgroundStyles])}
      />
      <SafeAreaView style={viewStyle}>
        <View style={StyleSheet.flatten([styles.container, backgroundStyles])}>
          <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
            <View style={styles.logoContainer}>
              <Image
                style={StyleSheet.flatten([styles.logo, tintColorStyles])}
                source={Images.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.base}>
              <View
                style={StyleSheet.flatten([styles.baseTop, baseTopStyles])}
              />
              <View
                style={StyleSheet.flatten([
                  styles.baseBottom,
                  foregroundStyles,
                ])}>
                <View style={styles.headerView}>
                  <Text
                    style={StyleSheet.flatten([
                      styles.loginHeader,
                      textColorStyles,
                    ])}>
                    {strings.signupHeader}
                  </Text>
                </View>
                <CustomSignupForm />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
export default SignupScreen;
