import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: moderateScale(16),
    color: Colors.lightButton,
  },
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 0,
    height: verticalScale(80),
    backgroundColor: Colors.lightBackground,
    paddingHorizontal: horizontalScale(10),
    paddingBottom: verticalScale(10),
    margin: moderateScale(10),
    borderRadius: moderateScale(50),
  },
  headerTitleStyle: {
    color: Colors.lightButton,
    fontSize: moderateScale(24),
  },
});
export default styles;
