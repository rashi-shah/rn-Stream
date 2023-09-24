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
    paddingBottom: verticalScale(50),
    backgroundColor: Colors.lightForeground,
  },
  profileImageContainer: {
    marginTop: verticalScale(47),
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
  label: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(20),
    color: Colors.gray,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  details: {
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(20),
    color: Colors.lightButton,
    fontSize: moderateScale(20),
    fontWeight: '500',
  },
  editDetails: {
    alignSelf: 'center',
    marginLeft: horizontalScale(20),
    color: Colors.blue,
    textDecorationLine: 'underline',
    fontSize: moderateScale(15),
  },
});
