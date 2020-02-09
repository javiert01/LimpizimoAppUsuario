import React, { Component } from "react";
import { View, Image, Text} from "react-native";
import Images from '../../assets/images';
import styles from './styles';

class ImageAssignedEmployee extends Component {
  state = {
    image: Images.assignedBorder,
    imageUrl: "https://limpizimov1.s3.amazonaws.com/NoBorrar/empleada1.jpg"
  };

  _setImgSource = () => {
    
  }

  render() {
    console.log('image employee asigned');
    return (
      <View style={styles.inputContainer}>
          <View style={styles.backgroundContainer}>
          <Image source={{ uri: this.state.imageUrl }} style={styles.imageUrl}></Image>
          </View>
          <Image source={this.state.image} style={styles.image}></Image>
      </View>
    );
  }
}


export default ImageAssignedEmployee;