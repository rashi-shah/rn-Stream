import {Text, SafeAreaView, Image} from 'react-native';
import React, {FC, useEffect} from 'react';
import styles from './splashScreenStyles';
import {Images} from '../../assets';
import {ROUTES, strings} from '../../constants';
import {CustomerStateType} from '../../types/AppTypes';
import {useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootState} from '../../redux/Store';

const SplashScreen: FC = () => {
  const user: CustomerStateType = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    if (user.currentUser) {
      navigation.reset({index: 0, routes: [{name: ROUTES.DrawerNavigation}]});
      return;
    }
    navigation.reset({index: 0, routes: [{name: ROUTES.Login}]});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={Images.logo} resizeMode="contain" />
      <Text style={styles.tagLine}>{strings.tagLine}</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
