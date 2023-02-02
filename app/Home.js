import React, {Component, useEffect,useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Card from './Card';


export default class Home extends Component{


    render(){
        const {data,goBack,confirm,finish} = this.props
        return (
            <View style={styles.container}>
                <Card>
                    <Text style={{color:'purple',fontSize:18}}>{`You have entered \n ${data.email}\n ${data.phone} \n Please confirm they are correct`}</Text>
                    <TouchableOpacity style={styles.button} onPress={goBack}>
                        <Text style={{color:'red'}}>GoBack</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={confirm}>
                        <Text style={{color:'blue'}}>Confirm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={finish}>
                        <Text style={{color:'blue'}}>Finish Later</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
})
