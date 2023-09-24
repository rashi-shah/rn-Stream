import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './VideoDescriptionStyles';
import {strings} from '../../constants';
import {Images} from '../../assets';
import {useColors} from '../../hooks';

interface VideoDescriptionPropType {
  data: {
    videoLink: string;
    id: number;
    title: string;
    views: number;
    duration: string;
    creatorName: string;
    subscribers: string;
    thumbnail: string;
  };
}

const VideoDescription: FC<VideoDescriptionPropType> = ({data}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const setDescriptionVisible = () => {
    isDescriptionVisible
      ? setIsDescriptionVisible(false)
      : setIsDescriptionVisible(true);
  };
  const {Colors} = useColors();
  const colorStyle = {color: Colors.lightButton};
  const backgroundStyles = {backgroundColor: Colors.opaqueBlue};
  const tintColorStyles = {tintColor: Colors.lightButton};

  return (
    <View>
      <View
        style={StyleSheet.flatten([
          styles.videoTitleContainer,
          backgroundStyles,
        ])}>
        <View style={styles.videoDescriptionContainer}>
          <Text
            style={StyleSheet.flatten([styles.title, colorStyle])}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {data?.title?.toUpperCase()}
          </Text>
          <TouchableOpacity onPress={setDescriptionVisible}>
            <Image
              source={isDescriptionVisible ? Images.upArrow : Images.downArrow}
              style={StyleSheet.flatten([styles.downArrow, tintColorStyles])}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        <Text style={StyleSheet.flatten([styles.views, colorStyle])}>
          {data.views} {strings.views}
        </Text>
      </View>
      {isDescriptionVisible && (
        <View
          style={StyleSheet.flatten([
            styles.videoDescription,
            backgroundStyles,
          ])}>
          <Text
            style={StyleSheet.flatten([styles.descriptionText, colorStyle])}>
            {strings.videoDescription}
          </Text>
        </View>
      )}
      <View style={styles.creatorDetailsContainer}>
        <View style={styles.rowFlex}>
          <Image
            source={Images.creatorBitmoji}
            style={styles.creatorBitmoji}
            resizeMode="stretch"
          />
          <View style={styles.creatorName}>
            <Text style={styles.creatorNameText}>{data.creatorName}</Text>
            <Text style={styles.subscribers}>
              {data.subscribers} {strings.subscribers}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoDescription;
