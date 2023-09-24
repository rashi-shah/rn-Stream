import {useState} from 'react';
import {PERMISSIONS} from 'react-native-permissions';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {globalMetrics} from '../theme';
import {checkPermission} from '../utils';

interface CustomModalHookReturnType {
  chooseImage: () => Promise<void>;
  openCamera: () => Promise<void>;
  response: ImagePickerResponse;
  setResponse: React.Dispatch<React.SetStateAction<ImagePickerResponse>>;
}

const useAddPicture = (): CustomModalHookReturnType => {
  const [response, setResponse] = useState<ImagePickerResponse>({});

  const chooseImage = async () => {
    checkPermission(
      globalMetrics.isIos
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    );
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    setResponse(result);
  };

  const openCamera = async () => {
    checkPermission(
      globalMetrics.isIos ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
    );
    const result = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
    });
    setResponse(result);
  };

  return {chooseImage, openCamera, response, setResponse};
};

export default useAddPicture;
