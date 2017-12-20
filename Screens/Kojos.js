import React from 'react';
import {Text, View} from 'react-native';
import KojosJs from "../src/Components/KojosJs.js";
import KrutineJs from '../src/Components/KrutineJs.js';


export default class KojosSrc extends React.Component{
    static NavigationOptions = {
        title : 'Pratimai kojoms'
    };
    render () {
        return (
            <View style = {{flex:1}}>
             <KojosJs />
                </View>
        );
    }
    }