import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../../assets';
import {styles} from './HeaderLeftComponentStyles';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useColors} from '../../hooks';

const HeaderLeftComponent = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const {Colors} = useColors();
  const tintColorStyles = {tintColor: Colors.lightButton};

  const _openDrawer = () => {
    Keyboard.dismiss();
    navigation.openDrawer();
  };

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={_openDrawer}>
        <Image
          style={StyleSheet.flatten([styles.image, tintColorStyles])}
          source={Images.menuIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeftComponent;
