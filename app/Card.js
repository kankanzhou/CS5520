import React, {Component, useEffect,useState} from 'react';
import {View,StyleSheet,Button} from 'react-native';



export default class Card extends Component{


    render(){
        return (
            <View style={[styles.container,this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#a9a7a3',
        borderRadius:8,
        padding:10,
        width:'80%'
    }
})
