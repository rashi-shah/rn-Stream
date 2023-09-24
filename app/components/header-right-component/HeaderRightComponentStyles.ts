import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale} from '../../theme';

export const styles = StyleSheet.create({
  iconContainer: {
    marginRight: horizontalScale(10),
    width: moderateScale(32),
    height: moderateScale(35),
  },
  image: {width: '100%', height: '100%'},
});
