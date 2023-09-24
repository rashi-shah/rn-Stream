import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../assets';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {styles} from './HeaderRightComponentStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTES} from '../../constants';
import {useColors} from '../../hooks';

const HeaderRightComponent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {Colors} = useColors();
  const tintColorStyles = {tintColor: Colors.lightButton};

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.Notification)}>
        <Image
          style={StyleSheet.flatten([styles.image, tintColorStyles])}
          source={Images.notificationIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRightComponent;
