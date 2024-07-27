import React from 'react';
import {Animated, TextInput, View, Easing, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

export default class Animation extends React.Component {

    state = {verticalVal: new Animated.Value(0)}
    
    componentDidMount() {
        
        Animated.timing(this.state.verticalVal, {toValue: 25, duration: 3000, useNativeDriver: false, easing: Easing.inOut(Easing.quad)}).start();
        this.state.verticalVal.addListener(({value}) => {
            if (value == 25) {
                Animated.timing(this.state.verticalVal, {toValue: 0, duration: 3000,useNativeDriver: false, easing: Easing.inOut(Easing.quad)}).start();
            }
            else if (value == 0) {
                Animated.timing(this.state.verticalVal, {toValue: 25, duration: 3000,useNativeDriver: false, easing: Easing.inOut(Easing.quad)}).start();
            };
        })
    };

    
    render() {
        return(
            <Animated.View style = {{borderRadius: 100 / 2,opacity:0.6, backgroundColor: "#f7ce45", height: 100, width: 100,transform: [{translateY: this.state.verticalVal}]}}></Animated.View>
        );
    };
    
};