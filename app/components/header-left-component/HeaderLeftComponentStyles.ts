import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale} from '../../theme';

export const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: horizontalScale(10),
    width: moderateScale(30),
    height: moderateScale(30),
  },
  image: {width: '100%', height: '100%'},
});
