import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from '../drawer-navigation';
import {ROUTES, strings} from '../../constants';
import {
  LoginScreen,
  SignupScreen,
  SplashScreen,
  VideoDisplayScreen,
} from '../../modules';
import WebViewScreen from '../../modules/settings/WebViewScreen';
import NotificationScreen from '../../modules/notifications/NotificationScreen';
import useNotification from './hooks/useNotification';
import UserDetailsScreen from '../../modules/user-details/UserDetailsScreen';
import useColors from '../../hooks/useColors';

const Stack = createStackNavigator();

const StackNavigation: FC = () => {
  useNotification();
  const {Colors} = useColors();
  const headerStyles = {
    backgroundColor: Colors.lightForeground,
  };
  const headerTitleStyles = {
    color: Colors.lightButton,
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'float',
        headerStyle: headerStyles,
        headerTintColor: Colors.lightButton,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.SplashScreen}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.Signup}
        component={SignupScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.DrawerNavigation}
        component={DrawerNavigator}
      />
      <Stack.Screen
        options={{
          headerTitle: strings.videoDetails,
          headerTitleStyle: headerTitleStyles,
        }}
        name={ROUTES.VideoDisplayScreen}
        component={VideoDisplayScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: strings.UserDetails,
          headerTitleStyle: headerTitleStyles,
        }}
        name={ROUTES.UserDetailsScreen}
        component={UserDetailsScreen}
      />
      <Stack.Screen
        options={{headerTitle: strings.termsAndConditions}}
        name={ROUTES.WebViewScreen}
        component={WebViewScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: strings.notification,
          headerTitleStyle: headerTitleStyles,
        }}
        name={ROUTES.Notification}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
