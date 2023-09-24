import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './UserDetailScreenStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {UserType} from '../../types/AppTypes';
import {strings} from '../../constants';
import {useColors} from '../../hooks';

const UserDetailsScreen = () => {
  const route = useRoute<RouteProp<{params: {item: UserType}}, 'params'>>();
  const user = route.params.item;
  const {Colors} = useColors();
  const colorStyles = {color: Colors.lightButton};
  const backgroundStyles = {backgroundColor: Colors.lightForeground};
  const headerStyles = {color: Colors.blue};
  return (
    <View style={StyleSheet.flatten([styles.container, backgroundStyles])}>
      <View style={styles.profileImageContainer}>
        <Image
          resizeMode="cover"
          style={styles.defaultProfileImage}
          source={{
            uri: user?.avatar,
          }}
        />
      </View>
      <View>
        <Text
          style={StyleSheet.flatten([
            styles.name,
            colorStyles,
          ])}>{`${user?.first_name} ${user?.last_name}`}</Text>
        <Text style={StyleSheet.flatten([styles.email, colorStyles])}>
          {user?.email}
        </Text>
      </View>
      <Text style={StyleSheet.flatten([styles.about, headerStyles])}>
        {strings.about}
      </Text>
      <Text style={styles.bio}>{strings.userBio}</Text>
    </View>
  );
};

export default UserDetailsScreen;
