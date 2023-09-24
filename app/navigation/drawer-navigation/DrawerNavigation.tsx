import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES} from '../../constants';
import {TabNavigation} from '../tab-navigation';
import {styles} from './drawerStyles';
import CustomDrawerContent from '../../components/custom-drawer-content/CustomDrawerContent';
import useHandleNotification from './hooks/useHandleNotification';
import {useColors} from '../../hooks';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  useHandleNotification();
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightBackground};

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: StyleSheet.flatten([styles.drawerStyle, backgroundStyles]),
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={ROUTES.Dashboard} component={TabNavigation} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
