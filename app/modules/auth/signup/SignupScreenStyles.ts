import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  topView: {
    flex: 0,
    backgroundColor: Colors.lightBackground,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.lightForeground,
  },
  flex: {
    flex: 1,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  logo: {
    width: horizontalScale(150),
    height: verticalScale(80),
  },
  base: {
    flex: 1,
  },
  baseTop: {
    borderBottomWidth: horizontalScale(125),
    borderBottomColor: Colors.lightForeground,
    borderLeftWidth: horizontalScale(190),
    borderLeftColor: 'transparent',
    borderRightWidth: horizontalScale(190),
    borderRightColor: 'transparent',
    flex: 0.1,
  },
  baseBottom: {
    backgroundColor: Colors.lightForeground,
    flex: 0.9,
    width: '100%',
  },
  loginHeader: {
    textAlign: 'center',
    color: Colors.darkBackground,
    fontSize: moderateScale(35),
    paddingBottom: verticalScale(20),
    fontWeight: 'bold',
  },
  headerView: {
    position: 'absolute',
    bottom: '100%',
    left: '38%',
  },
  textInputContainer: {
    paddingTop: verticalScale(30),
  },
  signupText: {
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: Colors.blue,
  },
  text: {
    fontSize: moderateScale(16),
    color: Colors.darkBackground,
    marginBottom: verticalScale(150),
  },
});
export default styles;
