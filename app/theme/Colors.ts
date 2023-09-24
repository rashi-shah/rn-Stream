type ColorsValue =
  | 'lightBackground'
  | 'lightForeground'
  | 'lightButton'
  | 'darkBackground'
  | 'darkForeground'
  | 'darkButton'
  | 'gray'
  | 'red'
  | 'blue'
  | 'opaqueBlue'
  | 'lightGray';

const Colors: Record<ColorsValue, string> = {
  lightBackground: '#BFDBFE',
  lightForeground: '#FFFFFF',
  lightButton: '#060742',
  darkBackground: '#1E293B',
  darkForeground: '#000113',
  darkButton: '#334155',
  gray: '#808080',
  red: '#FF0000',
  blue: '#000066',
  opaqueBlue: '#bfdbfe66',
  lightGray: '#ffffff66',
};

const lightThemeColors: Record<ColorsValue, string> = {
  lightBackground: '#BFDBFE',
  lightForeground: '#FFFFFF',
  lightButton: '#060742',
  darkBackground: '#1E293B',
  darkForeground: '#000113',
  darkButton: '#334155',
  gray: '#808080',
  red: '#FF0000',
  opaqueBlue: '#bfdbfe66',
  blue: '#000066',
  lightGray: '#ffffff66',
};

const darkThemeColors: Record<ColorsValue, string> = {
  lightBackground: '#000113',
  lightForeground: '#1E293B',
  lightButton: '#BFDBFE',
  darkBackground: '#BFDBFE',
  darkForeground: '#FFFFFF',
  darkButton: '#060742',
  gray: '#808080',
  opaqueBlue: '#00000066',
  red: '#FF0000',
  blue: '#FFFFFF',
  lightGray: '#ffffff66',
};
export {Colors, darkThemeColors, lightThemeColors};
