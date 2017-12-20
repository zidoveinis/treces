import React from 'react';
import {Text, View} from 'react-native';
import KrutineJs from '../src/Components/KrutineJs.js';

export default class KrutinesScr extends React.Component{
    static NavigationOptions = {
        title : 'Pratimai papams'
    };
    render () {
        return (
            <View style = {{flex:1}}>
             <KrutineJs />
                </View>
        );
    }
    }