import React from 'react';
import { View, Text, Modal, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import styles from './styles';
import Images from '../../assets/images';
import { strings } from '../../i18n';

const KeepWaitingService = props => {
  const _onCloseModal = () => {
    props.onCloseModal();
  };
  const _onRequestServiceAgainButtonPress = () => {
    props.onRequestServiceAgainPressed();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Image source={Images.waitingService} style={styles.image} resizeMode="contain"></Image>
        <Text style={styles.textQuestion}>{strings('keepWaitingService.message')}</Text>
        <Text style={styles.textMessage}>{strings('keepWaitingService.question')}</Text>
        <Touchable style={styles.messageBorder} onPress={_onRequestServiceAgainButtonPress}>
          <Text style={styles.text1}>{strings('keepWaitingService.requestAgain')}</Text>
        </Touchable>
        <Touchable style={styles.messageBorder} onPress={_onCloseModal}>
          <Text style={styles.text2}>{strings('keepWaitingService.keepWaiting')}</Text>
        </Touchable>
      </View>
    </Modal>
  );
};

export default KeepWaitingService;
