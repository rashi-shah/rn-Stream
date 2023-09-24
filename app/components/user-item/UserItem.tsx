import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {UserType} from '../../types/AppTypes';
import styles from './UserItemStyles';
import {ROUTES} from '../../constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import useColors from '../../hooks/useColors';

interface UserItemType {
  item: UserType;
}

const UserItem: FC<UserItemType> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {Colors} = useColors();
  const backgroundColorStyles = {
    backgroundColor: Colors.lightForeground,
    borderColor: Colors.blue,
  };
  const textColorStyles = {color: Colors.lightButton};
  const colorStyles = {color: Colors.darkForeground};
  const navigateToUserDetails = (user: UserType) => {
    navigation.navigate(ROUTES.UserDetailsScreen, {
      item: user,
    });
  };

  return (
    <View style={StyleSheet.flatten([styles.container, backgroundColorStyles])}>
      <TouchableOpacity
        style={styles.userItemContainer}
        onPress={() => navigateToUserDetails(item)}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: item?.avatar}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.userDetailsContainer}>
          <View style={styles.userName}>
            <Text
              style={StyleSheet.flatten([
                styles.nameText,
                textColorStyles,
              ])}>{`${item?.first_name} ${item?.last_name}`}</Text>
          </View>
          <Text style={StyleSheet.flatten([styles.emailText, colorStyles])}>
            {item?.email}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
