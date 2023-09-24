import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useColors} from '../../hooks';
import {appStyles} from '../../theme';

const ListEmptyComponent = ({text}: {text: string}) => {
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};
  const colorStyles = {color: Colors.lightButton};

  return (
    <View style={StyleSheet.flatten([appStyles.container, backgroundStyles])}>
      <Text style={StyleSheet.flatten([appStyles.listEmptyText, colorStyles])}>
        {text}
      </Text>
    </View>
  );
};

export default ListEmptyComponent;
