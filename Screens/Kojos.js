import React from 'react';
import {Text, View} from 'react-native';
import KrutineJs from '../src/Components/KrutineJs.js';


export default class KojuScr extends React.Component{
    static NavigationOptions = {
        title : 'Pratimai kojoms'
    };
    render () {
        return (
            <View style = {{flex:1}}>
             <KrutineJs />
                </View>
        );
    }
    }