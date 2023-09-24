import {
  TextInputProps,
  KeyboardTypeOptions,
  ColorValue,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
} from 'react-native';

export interface CustomInputProps extends Partial<TextInputProps> {
  touched?: boolean;
  errors?: string;
  keyboardType: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  autoCapitalize?: 'none';
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  secureTextEntry?: boolean;
}
export interface CustomInputRef {
  focus: () => void;
}
