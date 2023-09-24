import React, {FC} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {styles} from './ChangeThemeModalStyles';
import {strings} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../redux/theme/ThemeSlice';
import {RootState} from '../../redux/Store';
import {Images} from '../../assets';
import {useColors} from '../../hooks';

interface CustomModalType {
  modalThemeVisible: boolean;
  setModalThemeVisible: (val: boolean) => void;
}

const ChangeThemeModal: FC<CustomModalType> = ({
  modalThemeVisible,
  setModalThemeVisible,
}) => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme,
  );
  const theme = useColorScheme();
  const {Colors} = useColors();
  const modalBackgroundStyles = {backgroundColor: Colors.lightForeground};
  const backgroundStyles = {backgroundColor: Colors.lightBackground};
  const textColorStyles = {color: Colors.lightButton};
  const tintColorStyles = {tintColor: Colors.lightButton};

  const changeThemeToDark = () => {
    dispatch(changeTheme({currentTheme: 'dark', selectedTheme: 'dark'}));
    setModalThemeVisible(false);
  };

  const changeThemeToLight = () => {
    dispatch(changeTheme({currentTheme: 'light', selectedTheme: 'light'}));
    setModalThemeVisible(false);
  };

  const changeThemeToSystemDefault = () => {
    dispatch(changeTheme({currentTheme: theme, selectedTheme: 'default'}));
    setModalThemeVisible(false);
  };

  return (
    <Modal
      animationType="none"
      transparent
      visible={modalThemeVisible}
      onRequestClose={() => {
        setModalThemeVisible(false);
      }}>
      <Pressable
        style={styles.container}
        onPress={() => setModalThemeVisible(false)}>
        <Pressable
          style={StyleSheet.flatten([styles.modalView, modalBackgroundStyles])}>
          <TouchableOpacity
            style={StyleSheet.flatten([styles.rowFlex, backgroundStyles])}
            onPress={changeThemeToLight}>
            <Text style={StyleSheet.flatten([styles.text, textColorStyles])}>
              {strings.light}
            </Text>
            {selectedTheme === 'light' && <Image source={Images.selectIcon} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([styles.rowFlex, backgroundStyles])}
            onPress={changeThemeToDark}>
            <Text style={StyleSheet.flatten([styles.text, textColorStyles])}>
              {strings.dark}
            </Text>
            {selectedTheme === 'dark' && <Image source={Images.selectIcon} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([styles.rowFlex, backgroundStyles])}
            onPress={() => changeThemeToSystemDefault}>
            <Text style={StyleSheet.flatten([styles.text, textColorStyles])}>
              {strings.sysDefault}
            </Text>
            {selectedTheme === 'default' && (
              <Image style={tintColorStyles} source={Images.selectIcon} />
            )}
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ChangeThemeModal;
