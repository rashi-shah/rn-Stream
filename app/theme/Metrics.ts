import {Dimensions, Platform} from 'react-native';

type FunctionType = (size: number, factor?: number) => number;

const {height, width} = Dimensions.get('window');
const guidelineBaseWidth: number = width > height ? 812 : 375;
const guidelineBaseHeight: number = width > height ? 375 : 812;

const horizontalScale: FunctionType = size =>
  (width / guidelineBaseWidth) * size;

const verticalScale: FunctionType = size =>
  (height / guidelineBaseHeight) * size;

const moderateScale: FunctionType = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTV: Platform.isTV,
};

export {
  globalMetrics,
  horizontalScale,
  verticalScale,
  moderateScale,
  height,
  width,
};
