import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Picker
} from 'react-native';


export default class Form_login extends Component<{}>{
  constructor(props){
    super(props)
    this.state = {
      language: 0
    }
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style={styles.inputName}>
          <TextInput style = {styles.inputBox} underlineColorAndroid= 'rgba(0, 0, 0, 0)' placeholder = "*Name" placeholderTextColor = "#fff"/>
        </View>
        <View style={styles.mainHolder}>
          <View style = {styles.inputSelect}>
            <Picker  style = {styles.inputSelect}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style = {styles.inputNumber}>
            <TextInput style = {styles.mobileNumber} underlineColorAndroid= 'rgba(0, 0, 0, 0)' placeholder = "*Name" placeholderTextColor = "#fff"/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mainHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  inputName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
  },
  inputSelect: {
    flex: 1,
    height: 50,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  inputNumber: {
    marginLeft: 10,
    flex: 1,
  },
  inputBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 50
  },
  mobileNumber: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)'
  }
})
