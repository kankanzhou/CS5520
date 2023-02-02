import React, {Component, useEffect,useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Home from './Home';
import Login from './Login';
import Card from './Card';
import {LinearGradient} from 'expo-linear-gradient';


export default class App extends Component{
    state={
        user:null,
        type:0
    }
    constructor(props) {
        super(props);
        this.startAgain = this.startAgain.bind(this)
        this.renderContent = this.renderContent.bind(this)
    }

    startAgain(){
        global.user = null
        this.setState({
            user:null,
            type:0
        })
    }

    renderContent(){
        if(this.state.type === 0){
            return (
                <Home data={this.state.user}
                      goBack={()=>{
                          this.setState({
                              user:null,
                              type:0
                          })
                      }}
                      confirm={()=>{
                          this.setState({
                              type:1
                          })
                      }}
                      finish={()=>{
                          this.setState({
                              type:2
                          })
                      }}
                />
            )
        }

        if(this.state.type === 1){
            const str = this.state.user.phone.toString()
            const imgSrc = str.charAt(str.length - 1) == '4' ? require('./image/avatar.jpg') : require('./image/computer.jpg')
            return (
                <View style={{flex:1,paddingTop:100,alignItems:'center'}}>
                    <Card style={{alignItems:'center'}}>
                        <Text style={{color:'purple'}}>Thank you for signing up.Here's picture for you (based on the last digit of your phone number)</Text>
                        <Image source={imgSrc} style={{width:80,height:80}}/>
                    </Card>
                    <Text style={{color:'blue'}} onPress={this.startAgain}>Start Again</Text>
                </View>

            )
        }

        if(this.state.type === 2){
            return (
                <View style={{flex:1,paddingTop:100,alignItems:'center'}}>
                    <Card style={{alignItems:'center'}}>
                        <Text style={'purple'}>Sorry to see you</Text>
                        <Image source={require('./image/sorry.jpg')} style={{width:80,height:80}}/>
                    </Card>
                    <Text style={{color:'blue'}} onPress={this.startAgain}>Start Again</Text>
                </View>
            )
        }
    }

    render(){
        return (

            <LinearGradient style={styles.container} colors={['#5ecaf1','#6872ab']}>
                {
                    this.state.user ? this.renderContent() :(
                        <Login
                            onSign={(data)=>{
                                console.log('onsign',data);
                                global.user = data
                                this.setState({
                                    user:data
                                })
                            }}/>
                    )
                }

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

})
