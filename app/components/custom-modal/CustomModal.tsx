import React, {FC} from 'react';
import {Image, Modal, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets';
import styles from './CustomModalStyles';

interface CustomModalType {
  modalVisible: boolean;
  setModalVisible: (val: boolean) => void;
  chooseImage: () => Promise<void>;
  openCamera: () => Promise<void>;
}

const CustomModal: FC<CustomModalType> = ({
  modalVisible,
  setModalVisible,
  chooseImage,
  openCamera,
}) => {
  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.container}>
            <View style={styles.cameraImage}>
              <TouchableOpacity onPress={openCamera}>
                <Image style={styles.image} source={Images.cameraIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.galleryImage}>
              <TouchableOpacity onPress={chooseImage}>
                <Image style={styles.image} source={Images.galleryIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomModal;
