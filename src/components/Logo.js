import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';


export default class Login extends Component<{}>{
  render(){
    return(
      <View style = {styles.container}>
      <Image
        style={{width: 40, height: 70}}
        source={require('../images/logo.png')}
      />
      <Text style = {styles.logoText}>Welcome to my app</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize : 18,
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 0.7)'
  }
})
