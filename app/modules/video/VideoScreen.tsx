import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import styles from './VideoScreenStyles';
import {videoData} from '../../models';
import VideoItem from '../../components/video-item/VideoItem';
import {useColors} from '../../hooks';

export interface VideoDataType {
  videoLink: string;
  id: number;
  title: string;
  views: number;
  duration: string;
  creatorName: string;
  subscribers: string;
  thumbnail: string;
}

const VideoScreen = () => {
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};

  return (
    <View style={StyleSheet.flatten([styles.container, backgroundStyles])}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={videoData}
        renderItem={({item}) => <VideoItem {...{item}} />}
      />
    </View>
  );
};

export default VideoScreen;
