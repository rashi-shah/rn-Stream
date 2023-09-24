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
    justifyContent: 'flex-end',
  },
  modalView: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.lightForeground,
    padding: moderateScale(30),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  formContainer: {
    marginTop: verticalScale(10),
  },
  text: {
    flex: 1,
    fontSize: moderateScale(20),
    color: Colors.lightButton,
    marginVertical: verticalScale(10),
    padding: moderateScale(10),
    textAlign: 'left',
  },
  rowFlex: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.lightBackground,
    margin: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
  },
});
