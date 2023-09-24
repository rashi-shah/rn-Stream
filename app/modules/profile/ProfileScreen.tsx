import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {strings} from '../../constants';
import {styles} from './ProfileScreenStyles';
import {RootState} from '../../redux/Store';
import {useSelector} from 'react-redux';
import {CustomerStateType} from '../../types/AppTypes';
import {EditProfile} from '../../components/edit-profile';
import useColors from '../../hooks/useColors';

const ProfileScreen: FC = () => {
  const [ifEditUser, setIfEditUser] = useState(false);
  const user: CustomerStateType = useSelector((state: RootState) => state.auth);
  const editProfile = () => setIfEditUser(true);
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};
  const textColorStyles = {color: Colors.lightButton};
  const editDetailsStyles = {color: Colors.blue};

  return (
    <View style={StyleSheet.flatten([styles.container, backgroundStyles])}>
      {!ifEditUser ? (
        <>
          <View style={styles.profileImageContainer}>
            <Image
              resizeMode="cover"
              style={styles.defaultProfileImage}
              source={{
                uri: user.currentUser?.profile,
              }}
            />
          </View>
          <Text
            onPress={editProfile}
            style={StyleSheet.flatten([styles.editDetails, editDetailsStyles])}>
            {strings.editDetails}
          </Text>
          <View>
            <Text style={styles.label}>{strings.firstName}</Text>
            <Text style={StyleSheet.flatten([styles.details, textColorStyles])}>
              {user.currentUser?.firstName}
            </Text>
            <Text style={styles.label}>{strings.lastName}</Text>
            <Text style={StyleSheet.flatten([styles.details, textColorStyles])}>
              {user.currentUser?.lastName}
            </Text>
            <Text style={styles.label}>{strings.email}</Text>
            <Text style={StyleSheet.flatten([styles.details, textColorStyles])}>
              {user.currentUser?.email}
            </Text>
            <Text style={styles.label}>{strings.phone}</Text>
            <Text style={StyleSheet.flatten([styles.details, textColorStyles])}>
              {user.currentUser?.phone}
            </Text>
          </View>
        </>
      ) : (
        <EditProfile {...{setIfEditUser}} />
      )}
    </View>
  );
};

export default ProfileScreen;
