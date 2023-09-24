import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {logout} from '../../../redux/auth';
import {ROUTES} from '../../../constants';
import {CustomerStateType} from '../../../types/AppTypes';
import {CustomDrawerType} from '../CustomDrawerContent';
import {resetUserList} from '../../../redux/user';
import {Keyboard} from 'react-native';

export interface DrawerHookReturnType {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalThemeVisible: boolean;
  setModalThemeVisible: React.Dispatch<React.SetStateAction<boolean>>;
  user: CustomerStateType;
  handleLogout: () => void;
  navigateToHome: () => void;
  navigateToProfile: () => void;
  settingsVisible: () => void;
  settingsNotVisible: () => void;
  navigateToWebViewScreen: (props: CustomDrawerType, url: string) => void;
  isSettingsVisible: boolean;
}

export const useDrawer = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalThemeVisible, setModalThemeVisible] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: ROUTES.Login}],
    });
    dispatch(resetUserList());
  };

  const navigateToHome = () => {
    navigation.navigate(ROUTES.HomeScreen);
  };

  const navigateToProfile = () => {
    navigation.navigate(ROUTES.ProfileScreen);
  };

  const settingsVisible = () => {
    setIsSettingsVisible(true);
  };

  const settingsNotVisible = () => {
    setIsSettingsVisible(false);
  };

  const navigateToWebViewScreen = (props: CustomDrawerType, url: string) => {
    Keyboard.dismiss();
    props.navigation.closeDrawer();
    navigation.push(ROUTES.WebViewScreen, {url: url});
  };

  return {
    modalVisible,
    setModalVisible,
    modalThemeVisible,
    setModalThemeVisible,
    user,
    handleLogout,
    navigateToHome,
    navigateToProfile,
    settingsVisible,
    settingsNotVisible,
    navigateToWebViewScreen,
    isSettingsVisible,
  };
};

export default useDrawer;
