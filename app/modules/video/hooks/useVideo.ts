import {RouteProp, useRoute} from '@react-navigation/native';
import {VideoDataType} from '../VideoScreen';
import {videoData} from '../../../models';

export interface VideoHookReturnType {
  videos: VideoDataType[];
  data: VideoDataType;
}

const useVideo = (): VideoHookReturnType => {
  const route =
    useRoute<RouteProp<{params: {item: VideoDataType}}, 'params'>>();
  const data = route?.params?.item ?? [];
  const videos = videoData.filter(video => video.id !== data.id);

  return {videos, data};
};

export default useVideo;
