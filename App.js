import React, { Component } from "react";
import { FlatList, StyleSheet, Text, Image, View } from "react-native";
import { StackNavigator } from 'react-navigation';
import KrutinesScr from './Screens/Krutine';
import KojosSrc from './Screens/Kojos';
import HomeScr from './Screens/Home';

 const ManoScr = StackNavigator ({

  Home : {screen: HomeScr},
  Krutine : {screen: KrutinesScr},
  Kojos : {screen: KojosSrc}
 });
export default class App extends React.Component {
  render(){
    return (
      <ManoScr/>

    )
  }
}