import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, ListItem } from "react-native";

export default class App extends Component {
  state = {
    placeName: "",
    places: [] 
  };


  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
    <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button style={styles.placeButton}
          title="Add" onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%" 
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});

