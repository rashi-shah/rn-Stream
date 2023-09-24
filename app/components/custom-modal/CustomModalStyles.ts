import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '35%',
    height: '20%',
    backgroundColor: Colors.lightButton,
    marginTop: '55%',
    marginLeft: '32%',
    borderColor: Colors.lightForeground,
    borderRadius: moderateScale(20),
  },
  cameraImage: {
    marginLeft: horizontalScale(10),
    width: horizontalScale(45),
    height: verticalScale(45),
    marginVertical: verticalScale(18),
  },
  galleryImage: {
    marginLeft: horizontalScale(20),
    width: horizontalScale(45),
    height: verticalScale(45),
    marginVertical: verticalScale(18),
  },
  image: {
    width: '100%',
    height: '100%',
    tintColor: Colors.lightForeground,
  },
});

export default styles;
