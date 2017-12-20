import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert,Image, Platform} from 'react-native';

export default class Papai extends Component {

constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

GetItem (flower_name) {
 
Alert.alert(flower_name);

}


componentDidMount() {

  return fetch('https://api.myjson.com/bins/mdyk7')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.Pratimai),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

ListViewItemSeparator = () => {
  return (
    <View
      style={{
        height: .5,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}


render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (

    <View style={styles.MainContainer}>

      <ListView

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>

       <View style={{flex:1, flexDirection: 'column'}}>
       <Text style={[styles.textViewContainer]}> {rowData.PratimoName} </Text> 
            <Text style={[styles.textViewContainer]}> {rowData.Priejimai} </Text> 
            <Text style={[styles.textViewContainer]}> {rowData.Aprasymas} </Text> 
         { <Image source = {{ uri: rowData.image }} style={styles.imageViewContainer} /> }
       
        

       </View>
        }
      />

    </View>
  );
}
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,

paddingTop: (Platform.OS === 'android') ? 20 : 0,

},

imageViewContainer: {
width: '100%',
height: 200 ,

borderRadius : 10

},

textViewContainer: {

 textAlignVertical:'center',
 width:'100%', 
 fontSize: 20,
 padding:10

}

});