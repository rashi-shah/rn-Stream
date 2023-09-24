import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: verticalScale(15),
    width: '90%',
  },
  input: {
    flex: 1,
    alignSelf: 'center',
    color: Colors.darkBackground,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.darkBackground,
    borderRadius: moderateScale(5),
    padding: moderateScale(7),
    marginBottom: verticalScale(10),
    fontSize: moderateScale(18),
  },
  error: {
    marginHorizontal: horizontalScale(10),
    marginBottom: verticalScale(5),
    color: Colors.red,
    fontSize: moderateScale(13),
  },
  eyeIcon: {height: moderateScale(25), width: moderateScale(25)},
});
