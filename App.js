import React, { Component } from "react";
import { FlatList, StyleSheet, Text, Image, View } from "react-native";
import { StackNavigator } from 'react-navigation';
import KrutinesScr from './Screens/Krutine';
import KojuScr from './Screens/Kojos';

 const ManoScr = StackNavigator ({

  Krutine : {screen: KrutinesScr},
  Kojos : {screen: KojuScr}
 });
export default class App extends React.Component {
  render(){
    return (
      <ManoScr/>

    )
  }
}