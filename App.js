import React, { Component } from "react";
import { FlatList, StyleSheet, Text, Image, View } from "react-native";

export default class App extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://api.myjson.com/bins/74wa3");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              {`${item.name.first} ${item.password}`}
            </Text>
            
           // <Image source = {item.picture.large} />
            
            }
             
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
