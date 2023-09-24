import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import styles from './VideoScreenStyles';
import Video from 'react-native-video';
import VideoDescription from '../../components/video-description/VideoDescription';
import useVideo, {VideoHookReturnType} from './hooks/useVideo';
import VideoItem from '../../components/video-item/VideoItem';
import {useColors} from '../../hooks';

const VideoDisplayScreen = () => {
  const {videos, data}: VideoHookReturnType = useVideo();
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};

  return (
    <SafeAreaView style={StyleSheet.flatten([styles.flex, backgroundStyles])}>
      <View style={styles.videoContainer}>
        <Video
          controls
          repeat
          resizeMode="contain"
          source={{
            uri: data.videoLink,
          }}
          style={styles.video}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={videos}
        ListHeaderComponent={() => <VideoDescription {...{data}} />}
        renderItem={({item}) => <VideoItem {...{item}} />}
      />
    </SafeAreaView>
  );
};

export default VideoDisplayScreen;
