import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  modalView: {
    height: verticalScale(400),
    width: '95%',
    alignSelf: 'center',
    marginTop: '30%',
    backgroundColor: Colors.lightForeground,
    padding: moderateScale(30),
    borderRadius: moderateScale(20),
  },
  header: {
    fontSize: moderateScale(22),
    fontWeight: '600',
    color: Colors.lightButton,
  },
  crossIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
    alignSelf: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    marginTop: verticalScale(10),
  },
});
