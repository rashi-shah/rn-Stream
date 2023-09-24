import {useEffect} from 'react';
import {addNotification} from '../../../redux/notification';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants';

const useHandleNotification = (): void => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  /**
   * This function requests permission for notification
   * @returns {Promise<void>}
   */
  const requestPermission = async () => {
    await notifee.requestPermission();
  };

  /**
   * This function generates a FCM Token for the device on which notification is to be send.
   * @returns {Promise<string>}
   */
  const generateFCMToken = async () => {
    const token = await messaging().getToken();
    return token;
  };

  /**
   * This function contains the logic to create a channel and to displays notifications on the device
   * @param {FirebaseMessagingTypes.RemoteMessage} message
   * @returns {Promise<void>}
   */
  const sendNotification = async (
    message: FirebaseMessagingTypes.RemoteMessage,
  ): Promise<void> => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: message.notification?.title,
      body: message.notification?.body,
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        smallIcon: 'ic_small_icon',
      },
    });
  };

  useEffect(() => {
    generateFCMToken();
    requestPermission();
    const unsubscribe = messaging().onMessage(async message => {
      const newNotification = {
        messageId: message?.messageId,
        notification: message?.notification,
      };
      dispatch(addNotification(newNotification));
      sendNotification(message);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type}) => {
      switch (type) {
        case EventType.PRESS:
          navigation.navigate(ROUTES.Notification);
          break;
        default:
          break;
      }
    });
  }, []);
};

export default useHandleNotification;
