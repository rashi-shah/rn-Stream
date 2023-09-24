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
    backgroundColor: Colors.lightForeground,
  },
  profileImageContainer: {
    borderRadius: moderateScale(90),
    alignSelf: 'center',
    width: moderateScale(180),
    height: moderateScale(180),
  },
  profileImage: {
    marginVertical: verticalScale(25),
    marginLeft: horizontalScale(25),
    borderRadius: moderateScale(100),
    width: '80%',
    height: '80%',
  },
  defaultProfileImage: {
    borderRadius: moderateScale(100),
    width: '110%',
    height: '110%',
  },
  profileEditImage: {
    width: '90%',
    height: '90%',
    tintColor: Colors.lightForeground,
  },
  editProfileIcon: {
    position: 'absolute',
    borderRadius: moderateScale(25),
    top: '22%',
    right: '34%',
    width: moderateScale(50),
    height: moderateScale(50),
    overflow: 'hidden',
    backgroundColor: Colors.lightButton,
  },
  formContainer: {
    flex: 1,
    marginVertical: verticalScale(20),
  },
  text: {
    marginTop: verticalScale(17),
    marginLeft: horizontalScale(20),
    color: Colors.lightButton,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  backIconContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(10),
  },
  backIconImage: {
    height: '100%',
    width: '100%',
  },
});
