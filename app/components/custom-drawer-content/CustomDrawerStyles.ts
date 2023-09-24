import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  userDetails: {
    flexDirection: 'row',
    padding: moderateScale(10),
    margin: moderateScale(20),
    borderRadius: moderateScale(40),
  },
  image: {height: '100%', width: '100%'},
  buttonContainer: {
    alignItems: 'center',
    padding: moderateScale(20),
    justifyContent: 'flex-end',
  },
  logoutButton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: moderateScale(20),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(80),
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontWeight: '600',
    overflow: 'hidden',
    backgroundColor: Colors.lightButton,
    color: Colors.lightForeground,
  },
  imageContainer: {
    height: moderateScale(100),
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.lightButton,
    alignSelf: 'center',
  },
  userEmail: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: Colors.darkForeground,
    alignSelf: 'center',
  },
  drawerContentView: {
    backgroundColor: Colors.lightForeground,
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(8),
    marginHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(6),
  },
  drawerContent: {
    fontSize: moderateScale(18),
    color: Colors.darkBackground,
    fontWeight: 'bold',
    paddingLeft: horizontalScale(10),
  },
  settingsContentView: {
    backgroundColor: Colors.lightGray,
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(8),
    marginHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(6),
  },
  version: {
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
});
