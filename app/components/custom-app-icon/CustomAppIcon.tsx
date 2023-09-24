import {View, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import styles from './CustomAppIconStyles';
import useColors from '../../hooks/useColors';

interface AppIconType {
  focused: boolean;
  image: ImageSourcePropType;
}
const CustomAppIcon: FC<AppIconType> = ({focused, image}) => {
  const {Colors} = useColors();
  const tintColorStyles = {tintColor: Colors.lightButton};
  if (focused) {
    return (
      <View style={styles.activeIconContainer}>
        <Image
          style={StyleSheet.flatten([styles.activeIcon, tintColorStyles])}
          source={image}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View style={styles.inactiveIconContainer}>
      <Image style={styles.inactiveIcon} source={image} resizeMode="contain" />
    </View>
  );
};

export default CustomAppIcon;
