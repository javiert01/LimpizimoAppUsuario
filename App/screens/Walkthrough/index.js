import React, { useState } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import Images from '../../assets/images';
import { strings } from '../../i18n';

import styles from './styles';

const Walkthrough = props => {
  const [image, setImage] = useState(Images.walkthrough1);
  const [page, setPage] = useState();
  const [backgroundColor, setBackgroundColor] = useState('$primaryColor');
  const [title, setTitle] = useState(strings('walkthrough.page1.title'));
  const [description, setDescription] = useState(strings('walkthrough.page1.description'));
  const [pageIndicatorImage, setPageIndicatorImage] = useState(Images.walkthroughPageIndicator1);
  const [arrowImage, setArrowImage] = useState(Images.walkthroughRightArrow1);

  const _setInfo = () => {
    switch (page) {
      case 2:
        setImage(Images.walkthrough3);
        setPage(3);
        setBackgroundColor('$tertiaryColor');
        setTitle(strings('walkthrough.page3.title'));
        setDescription(strings('walkthrough.page3.description'));
        setPageIndicatorImage(Images.walkthroughPageIndicator3);
        setArrowImage(Images.walkthroughRightArrow3);
        break;
      case 3:
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home', key: 'Home' })],
        });
        props.navigation.dispatch(resetAction);
        break;
      default:
        setImage(Images.walkthrough2);
        setPage(2);
        setBackgroundColor('$secondaryColor');
        setTitle(strings('walkthrough.page2.title'));
        setDescription(strings('walkthrough.page2.description'));
        setPageIndicatorImage(Images.walkthroughPageIndicator2);
        setArrowImage(Images.walkthroughRightArrow2);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <View style={{ ...styles.infoContainer, backgroundColor: EStyleSheet.value(backgroundColor) }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.pageAndArrowContainer} onPress={() => _setInfo()}>
          <Image style={styles.pageIndicator} source={pageIndicatorImage} resizeMode="contain" />
          <Image style={styles.arrowImage} source={arrowImage} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Walkthrough;
