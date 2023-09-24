import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {
  clearAllNotification,
  deleteNotification,
} from '../../../redux/notification';

export interface NotificationHookReturnType {
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

const useNotification = (): NotificationHookReturnType => {
  const notificationList = useSelector(
    (state: RootState) => state.notification.notificationList,
  );
  const dispatch = useDispatch();
  const removeNotification = (id: string) => {
    const index = notificationList.findIndex(notiee => notiee.messageId === id);
    if (index >= 0) {
      const newNotificationList = JSON.parse(JSON.stringify(notificationList));
      newNotificationList.splice(index, 1);
      dispatch(deleteNotification(newNotificationList));
    }
  };
  const clearNotifications = () => {
    dispatch(clearAllNotification());
  };
  return {removeNotification, clearNotifications};
};

export default useNotification;
