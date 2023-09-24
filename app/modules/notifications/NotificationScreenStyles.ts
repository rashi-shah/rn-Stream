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
    backgroundColor: Colors.lightForeground,
  },
  notificationContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    backgroundColor: Colors.opaqueBlue,
    borderRadius: moderateScale(8),
  },
  notificationTitle: {
    color: Colors.lightButton,
    fontWeight: '600',
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(10),
  },
  notificationBody: {
    color: Colors.gray,
    fontSize: moderateScale(15),
    marginLeft: horizontalScale(10),
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crossIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
