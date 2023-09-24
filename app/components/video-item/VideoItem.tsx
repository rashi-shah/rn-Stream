import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTES} from '../../constants';
import styles from './VideoItemStyles';
import {VideoDataType} from '../../modules/video/VideoScreen';
import {Images} from '../../assets';
import {useColors} from '../../hooks';

interface VideoItemPropType {
  item: VideoDataType;
}

const VideoItem: FC<VideoItemPropType> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {Colors} = useColors();
  const durationStyle = {backgroundColor: Colors.opaqueBlue};

  const navigateToVideoDisplay = (video: VideoDataType) => {
    navigation.navigate(ROUTES.VideoDisplayScreen, {
      item: video,
    });
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => navigateToVideoDisplay(item)}>
        <Image
          source={{uri: item.thumbnail}}
          style={styles.video}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.playButton}>
        <Image source={Images.playButton} style={styles.video} />
      </View>
      <Text style={StyleSheet.flatten([styles.videoDuration, durationStyle])}>
        {item.duration}
      </Text>
      <Text style={styles.videoTitle} ellipsizeMode="tail" numberOfLines={1}>
        {item.title}
      </Text>
    </View>
  );
};

export default VideoItem;
