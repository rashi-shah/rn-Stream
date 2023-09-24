import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: moderateScale(1),
    marginVertical: verticalScale(8),
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(10),
    borderColor: Colors.blue,
  },
  userItemContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: horizontalScale(70),
    height: verticalScale(70),
    margin: moderateScale(10),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(40),
  },
  userDetailsContainer: {
    margin: moderateScale(10),
  },
  userName: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
  },
  nameText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: Colors.lightButton,
  },
  emailText: {
    color: Colors.gray,
    fontSize: moderateScale(14),
  },
});

export default styles;
