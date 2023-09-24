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
    paddingBottom: verticalScale(100),
    backgroundColor: Colors.opaqueBlue,
  },
  profileImageContainer: {
    marginTop: verticalScale(47),
    borderRadius: moderateScale(90),
    alignSelf: 'center',
    width: moderateScale(180),
    height: moderateScale(180),
    borderWidth: moderateScale(2),
  },
  defaultProfileImage: {
    borderRadius: moderateScale(100),
    width: '100%',
    height: '100%',
  },
  name: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    color: Colors.lightButton,
    fontSize: moderateScale(30),
    fontWeight: '500',
  },
  email: {
    marginTop: verticalScale(5),
    alignSelf: 'center',
    color: Colors.lightButton,
    fontSize: moderateScale(25),
    fontWeight: '500',
  },
  about: {
    marginTop: verticalScale(20),
    marginStart: horizontalScale(15),
    color: Colors.blue,
    fontSize: moderateScale(25),
    fontWeight: '500',
  },
  bio: {
    marginTop: verticalScale(5),
    marginHorizontal: horizontalScale(18),
    color: Colors.gray,
    textAlign: 'justify',
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
  flexDirection: {
    flexDirection: 'row',
  },
});
