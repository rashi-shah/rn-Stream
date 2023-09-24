import {StyleSheet} from 'react-native';
import {Colors, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    paddingBottom: verticalScale(100),
    backgroundColor: Colors.lightForeground,
  },
  container: {
    flex: 1,
  },
});
