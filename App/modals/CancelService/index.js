import React from 'react';
import { View, Text, Modal, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import styles from './styles';
import Images from '../../assets/images';
import { strings } from '../../i18n';

const CancelService = props => {
  const _onCloseModal = () => {
    props.onCloseModal();
  };
  const _onCancelButtonPress = () => {
    console.log('SERVICIO CANCELADO!');
    props.onCancelServicePressed();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Image source={Images.alertIcon} style={styles.image}></Image>
        <Text style={styles.textAlert}>{strings('common.alert').toUpperCase()}</Text>
        <Text style={styles.textQuestion}>{strings('cancelService.question')}</Text>
        <Text style={styles.textMessage}>{strings('cancelService.message')}</Text>
        <Touchable style={styles.messageBorder} onPress={_onCloseModal}>
          <Text style={styles.text1}>{strings('cancelService.keepService')}</Text>
        </Touchable>
        <Touchable style={styles.messageBorder} onPress={_onCancelButtonPress}>
          <Text style={styles.text2}>{strings('cancelService.cancelService')}</Text>
        </Touchable>
      </View>
    </Modal>
  );
};

export default CancelService;
