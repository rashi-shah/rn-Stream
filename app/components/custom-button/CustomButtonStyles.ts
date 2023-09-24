import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(30),
  },
  button: {
    fontSize: moderateScale(20),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    color: Colors.lightForeground,
    backgroundColor: Colors.lightButton,
    padding: moderateScale(10),
    textAlign: 'center',
    overflow: 'hidden',
  },
});
export default styles;
