/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {Select, Option} from "react-native-chooser";
import {
  Platform,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ToastAndroid,
  TouchableOpacity,
  Picker
} from 'react-native';

import Swiper from 'react-native-swiper';

// import Login from './src/pages/Login';

export default class swiper  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // langauge: 'Java',
      // value : "+91",
      entries: '3'
    };
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#ebeef3', marginTop: 20}}>
        <View style = {{height: 300}}>
          <Swiper style={styles.wrapper} showsButtons={false} paginationStyle={{
            bottom: 10, left: null, right: 20
          }}
          dot={<View style={{backgroundColor: '#fff', width: 6, height: 6, borderRadius: 4, marginLeft: 6, marginRight: 6, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderWidth: 1, borderColor: '#000' , borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}>
            <View style={styles.slide1}>
               <Image style ={{width: 400, height: 400}}
                  source={require('./src/images/assests/layer45.png')}
                  />
          </View>
          <View style={styles.slide2}>
            <Image style ={{width: 300, height: 300}}
                  source={require('./src/images/assests/layer45.png')}
                  />
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
      <View style = {{flexDirection: 'row', flex: 1, backgroundColor: 'red', }}>

      </View>
    </View>

  );
}
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
