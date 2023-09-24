import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: verticalScale(15),
    marginHorizontal: horizontalScale(18),
    width: '90%',
    height: verticalScale(200),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    height: verticalScale(40),
    width: horizontalScale(40),
    position: 'absolute',
    top: '40%',
    left: '44%',
  },
  videoDuration: {
    position: 'absolute',
    color: Colors.lightForeground,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    top: '80%',
    right: '2%',
    width: '12%',
    backgroundColor: Colors.transparentBlack,
    paddingHorizontal: horizontalScale(1),
  },
  videoTitle: {
    position: 'absolute',
    color: Colors.lightForeground,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    top: '80%',
    left: '8%',
    width: '60%',
  },
});
export default styles;
