import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  videoTitleContainer: {
    backgroundColor: Colors.opaqueBlue,
    marginTop: verticalScale(4),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(5),
  },
  videoDescriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoDescription: {
    backgroundColor: Colors.opaqueBlue,
  },
  title: {
    fontSize: moderateScale(14),
    color: Colors.lightButton,
    fontWeight: '500',
    width: '80%',
  },
  views: {
    fontSize: moderateScale(12),
    color: Colors.lightButton,
    fontWeight: '500',
  },
  downArrow: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  creatorDetailsContainer: {
    backgroundColor: Colors.opaqueBlue,
    marginVertical: verticalScale(4),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(5),
  },
  rowFlex: {
    flexDirection: 'row',
  },
  creatorBitmoji: {
    height: moderateScale(60),
    width: moderateScale(60),
  },
  creatorName: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  creatorNameText: {
    fontSize: moderateScale(18),
    color: Colors.lightButton,
    fontWeight: 'bold',
  },
  subscribers: {
    fontSize: moderateScale(14),
    color: Colors.lightButton,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: moderateScale(14),
    paddingHorizontal: horizontalScale(8),
    textAlign: 'left',
    paddingBottom: verticalScale(10),
    color: Colors.lightButton,
  },
});
export default styles;
