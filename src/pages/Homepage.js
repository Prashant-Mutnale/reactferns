import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
export default class Login extends Component<{}> {
  render(){
    return(
      <View style = {styles.container}>
        {/* <Logo/> */}
        <Form />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
