import {StyleSheet} from 'react-native';
import {Colors, horizontalScale, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  activeIconContainer: {
    width: horizontalScale(40),
    height: verticalScale(40),
  },
  inactiveIconContainer: {
    width: horizontalScale(35),
    height: verticalScale(35),
  },
  activeIcon: {
    height: '100%',
    width: '100%',
    tintColor: Colors.lightButton,
  },
  inactiveIcon: {
    height: '100%',
    width: '100%',
    tintColor: Colors.gray,
  },
});
export default styles;
