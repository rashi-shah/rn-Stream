import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {ROUTES} from '../../../constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {addNotification} from '../../../redux/notification';

const useNotification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(message => {
        if (message) {
          navigation.navigate(ROUTES.Notification);
          dispatch(addNotification(message));
        }
      });

    messaging().onNotificationOpenedApp(message => {
      if (message) {
        navigation.navigate(ROUTES.Notification);
        dispatch(addNotification(message));
      }
    });
  }, []);
};

export default useNotification;
