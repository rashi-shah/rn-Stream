import {StyleSheet} from 'react-native';
import {moderateScale} from './Metrics';
import {Colors} from './Colors';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listEmptyText: {
    color: Colors.lightButton,
    alignSelf: 'center',
    fontSize: moderateScale(30),
  },
});
export default appStyles;
