import {darkThemeColors, lightThemeColors} from '../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import {useColorScheme} from 'react-native';

const useColors = () => {
  const theme = useSelector((state: RootState) => state.theme.selectedTheme);
  const sysTheme = useColorScheme();
  let Colors;
  if (theme === 'default') {
    if (sysTheme === 'light') {
      Colors = lightThemeColors;
    } else {
      Colors = darkThemeColors;
    }
  } else if (theme === 'light') {
    Colors = lightThemeColors;
  } else {
    Colors = darkThemeColors;
  }
  return {Colors};
};

export default useColors;
