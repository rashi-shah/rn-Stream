/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async () => {});

AppRegistry.registerComponent(appName, () => App);
