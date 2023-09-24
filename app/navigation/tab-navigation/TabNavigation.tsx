import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {ROUTES, strings} from '../../constants';
import {CreateScreen, HomeScreen, VideoScreen} from '../../modules';
import styles from './TabNavigationStyle';
import CustomAppIcon from '../../components/custom-app-icon/CustomAppIcon';
import {ProfileScreen} from '../../modules/profile';
import {Images} from '../../assets';
import {HeaderLeftComponent, HeaderRightComponent} from '../../components';
import useColors from '../../hooks/useColors';
import {StyleSheet} from 'react-native';

const MyTabs = createBottomTabNavigator();

const TabNavigation: FC = () => {
  const route = useRoute();
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightBackground};
  const colorStyles = {color: Colors.lightButton};

  return (
    <MyTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: StyleSheet.flatten([
          styles.tabBarLabelStyle,
          colorStyles,
        ]),
        tabBarStyle: StyleSheet.flatten([styles.tabBarStyle, backgroundStyles]),
        tabBarActiveTintColor: Colors.lightButton,
        headerStyle: backgroundStyles,
        headerTitleAlign: 'center',
        headerLeft: () => <HeaderLeftComponent />,
        headerRight: () => <HeaderRightComponent />,
      }}>
      <MyTabs.Screen
        initialParams={route.params}
        options={{
          headerTitle: strings.home,
          headerTitleStyle: StyleSheet.flatten([
            styles.headerTitleStyle,
            colorStyles,
          ]),
          tabBarLabel: strings.home,
          tabBarIcon: ({focused}) => (
            <CustomAppIcon image={Images.homeTabIcon} {...{focused}} />
          ),
        }}
        name={ROUTES.HomeScreen}
        component={HomeScreen}
      />
      <MyTabs.Screen
        initialParams={route.params}
        options={{
          headerTitle: strings.create,
          headerTitleStyle: StyleSheet.flatten([
            styles.headerTitleStyle,
            colorStyles,
          ]),
          tabBarLabel: strings.create,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <CustomAppIcon image={Images.createTabIcon} {...{focused}} />
          ),
        }}
        name={ROUTES.CreateScreen}
        component={CreateScreen}
      />
      <MyTabs.Screen
        initialParams={route.params}
        options={{
          headerTitle: strings.video,
          headerTitleStyle: StyleSheet.flatten([
            styles.headerTitleStyle,
            colorStyles,
          ]),
          tabBarLabel: strings.video,
          tabBarIcon: ({focused}) => (
            <CustomAppIcon image={Images.videoTabIcon} {...{focused}} />
          ),
        }}
        name={ROUTES.VideoScreen}
        component={VideoScreen}
      />
      <MyTabs.Screen
        initialParams={route.params}
        options={{
          headerTitle: strings.profile,
          headerTitleStyle: StyleSheet.flatten([
            styles.headerTitleStyle,
            colorStyles,
          ]),
          tabBarLabel: strings.profile,
          tabBarIcon: ({focused}) => (
            <CustomAppIcon image={Images.profileTabIcon} {...{focused}} />
          ),
        }}
        name={ROUTES.ProfileScreen}
        component={ProfileScreen}
      />
    </MyTabs.Navigator>
  );
};
export default TabNavigation;
