import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: verticalScale(100),
    backgroundColor: Colors.lightForeground,
  },
  profileImageContainer: {
    borderRadius: moderateScale(90),
    marginVertical: verticalScale(24),
    alignSelf: 'center',
    width: moderateScale(180),
    height: moderateScale(180),
  },
  profileImage: {
    borderRadius: moderateScale(100),
    width: '85%',
    height: '85%',
  },
  profileEditImage: {
    width: '90%',
    height: '90%',
    tintColor: Colors.lightForeground,
  },
  flex: {
    flex: 1,
  },
  editProfileIcon: {
    position: 'absolute',
    borderRadius: moderateScale(25),
    top: '30%',
    right: '32%',
    width: moderateScale(50),
    height: moderateScale(50),
    overflow: 'hidden',
    backgroundColor: Colors.lightButton,
  },
  defaultProfileImage: {
    borderRadius: moderateScale(100),
    width: '100%',
    height: '100%',
  },
  formContainer: {
    marginVertical: verticalScale(20),
  },
});
