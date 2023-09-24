import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
  },
  tagLine: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    color: Colors.lightButton,
    marginBottom: verticalScale(90),
  },
});
export default styles;
