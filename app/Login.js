import React, {Component, useEffect,useState} from 'react';
import {View,StyleSheet,Button,Text,TextInput,TouchableOpacity} from 'react-native';
import Card from './Card';


export default class Login extends Component{

    state={
        email:'',
        phone:'',
        showTip1:false,
        showTip2:false
    }

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this)
        this.reset = this.reset.bind(this)

    }
    componentDidMount() {
        if(global.user){
            const {email,phone} = global.user
            this.setState({
                email,
                phone
            })
        }
    }

    signUp(){
        const {email,phone} = this.state
        if(email && phone){
            this.props.onSign({email,phone})
        }else{
            if(!email){
                this.setState({
                    showTip1:true
                })
            }
            if(!phone){
                this.setState({
                    showTip2:true
                })
            }
        }

    }

    reset(){
        this.setState({
            phone:'',
            email:'',
            showTip1:false,
            showTip2:false
        })
        global.user = null
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.topTitle}>Sign up</Text>
                <Card>
                    <Text style={styles.title}>Email address</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={text=>{
                            this.setState({
                                email:text,
                                showTip1:false
                            })
                        }}

                    />
                    <Text>{this.state.showTip1 ? 'Please enter a valid Email' : ''}</Text>

                    <View style={{height:30}}/>
                    <Text style={styles.title}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.phone}
                        onChangeText={text=>{
                            this.setState({
                                phone:text,
                                showTip2:false
                            })
                        }}
                    />
                    <Text>{this.state.showTip2 ? 'Please enter a valid phone number' : ''}</Text>

                    <View style={styles.buttonWrap}>
                        <TouchableOpacity style={styles.button} onPress={this.reset}>
                            <Text style={{color:'red'}}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.signUp}>
                            <Text style={{color:'blue'}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:100
    },
    topTitle:{
        color:'blue',
        borderWidth:0.5,
        padding:10,
        borderColor:'blue',
        marginBottom:20
    },
    buttonWrap:{
        flexDirection:'row',
        marginVertical:20
    },
    button:{
        flex:1,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        color:'purple',
        fontSize:18
    },
    input:{
        height:40,
        padding:0,
        textAlign:'center',
        color:'purple',
        borderBottomColor:'purple',
        borderBottomWidth:1
    }

})
