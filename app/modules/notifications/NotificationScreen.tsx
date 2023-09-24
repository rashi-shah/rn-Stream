import React, {FC} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {styles} from './NotificationScreenStyles';
import {CustomButton} from '../../components';
import {Images} from '../../assets';
import useNotification, {
  NotificationHookReturnType,
} from './hooks/useNotification';
import {strings} from '../../constants';
import ListEmptyComponent from '../../components/list-empty-component/ListEmptyComponent';
import {useColors} from '../../hooks';

interface NotificationItemType {
  item: FirebaseMessagingTypes.RemoteMessage;
  removeNotification: (id: string) => void;
}

const NotificationItem: FC<NotificationItemType> = ({
  item,
  removeNotification,
}) => {
  const {Colors} = useColors();
  const colorStyles = {color: Colors.lightButton};
  const notificationBackgroundStyles = {backgroundColor: Colors.opaqueBlue};
  const tintColorStyles = {tintColor: Colors.lightButton};

  return (
    <View
      style={StyleSheet.flatten([
        styles.notificationContainer,
        notificationBackgroundStyles,
      ])}>
      <View style={styles.flexDirection}>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={StyleSheet.flatten([styles.notificationTitle, colorStyles])}>
            {item?.notification?.title}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.notificationBody}>
            {item?.notification?.body}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.crossIcon}
          onPress={() => removeNotification(item?.messageId as string)}>
          <Image
            style={StyleSheet.flatten([styles.image, tintColorStyles])}
            source={Images.crossIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationScreen = () => {
  const notificationList: FirebaseMessagingTypes.RemoteMessage[] = useSelector(
    (state: RootState) => state.notification.notificationList,
  );
  const {clearNotifications, removeNotification}: NotificationHookReturnType =
    useNotification();
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};

  return (
    <View style={StyleSheet.flatten([styles.container, backgroundStyles])}>
      <FlatList
        data={notificationList}
        ListEmptyComponent={() => (
          <ListEmptyComponent text={strings.noNotification} />
        )}
        keyExtractor={item => item.messageId as string}
        renderItem={({item}) => (
          <NotificationItem {...{item, removeNotification}} />
        )}
      />
      {notificationList.length > 0 && (
        <CustomButton onPress={clearNotifications} label={strings.clear} />
      )}
    </View>
  );
};

export default NotificationScreen;
