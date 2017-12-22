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
  ScrollView,
  StatusBar,
  ToastAndroid,
  TouchableOpacity,
  Picker,
  Button
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import {Icon as navigator} from 'react-native-vector-icons/FontAwesome';
import FitImage from 'react-native-fit-image';


export default class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // langauge: 'Java',
      // value : "+91",
      entries: '3',
      starCount: 3, 

    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#ebeef3', marginTop: 20, padding: 10}}>
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
          <View style={styles.slide1}>
            <Image style ={{width: 400, height: 400}}
            source={require('./src/images/assests/layer45.png')}
          />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simaple</Text>
        </View>
      </Swiper>
    </View>
    <View style = {{
      flexDirection: 'row',
      height: 120,
      backgroundColor: '#fff',
      shadowColor: 'black',
      marginTop: 20,
      shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
      shadowOffset: {width: 50, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      // elevation: 1,
      borderRadius: 5
    }}>
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style ={{width: 45, height: 45, marginTop : -10}}
      source={require('./src/images/assests/arrivals.png')}
    />
    <Text style = {styles.commanText}>New Arrivals</Text>
  </View>
    <View style = {{height : 50,
      flex: 0.1,
      borderStyle: 'solid',
      borderLeftWidth: 1,
      alignItems : 'center',
      lineHeight: 10,
      alignSelf: "center",
      justifyContent : 'center',
      borderColor: '#efefef'}}></View>
    <View style = {{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
      <Image style ={{width: 45, height: 45, marginTop : -10}}
      source={require('./src/images/assests/popular.png')}
    />
    <Text style = {styles.commanText}>Most popular</Text>
  </View>
  <View style = {{height : 50,
    flex: 0.1,
    borderStyle: 'solid',
    borderLeftWidth: 1,
    alignItems : 'center',
    lineHeight: 10,
    alignSelf: "center",
    justifyContent : 'center',
    borderColor: '#efefef'}}></View>
  <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image style ={{width: 45, height: 45, marginTop : -10}}
    source={require('./src/images/assests/delivery.png')}
  />
  <Text style = {styles.commanText}>Same Day Delivery</Text>
</View>
</View>
<View style = {{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 10
}}>
     <Text style = {{fontSize : 26, 
      color : '#000', 
      fontWeight : 'bold', 
    }}>
          Popular Gifts
     </Text> 
     <Text style = {{
       color :'#666666',
       fontSize : 16,
       marginTop: 2
     }}>
           Top picks curated just the way you want
     </Text>
</View>
<View flexDirection = 'row'>
     <View style = {{flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#fff', 
      margin: 4,
      padding: 10}}>
      <View style = {{paddingTop: 10, paddingBottom: 10}}>
     <Image
        source={require('./src/images/assests/popular-gifts-1.png')}
      /> 
      </View>
      <View style = {{flexDirection: 'row'}}>
      <View style = {{flex: 1}}>
          <Text style = {{color: '#000', fontWeight: 'bold'}}>
            Enigmatic 20 Red...
          </Text>
      </View>
      <View>
      <Text style = {{flex: 1}}>
       <Text><Icon name="rocket" size={15} color="#4F8EF7" /></Text> 
       <Text>44</Text>
      </Text>
        </View>
     </View> 
     <View style = {{flexDirection: 'row'}}>
     <View style = {{flex: 1}}>
        <Text style = {{color: '#ff9212',marginTop: 2}}>3.5</Text>
     </View>
     <View style = {{flex: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
     <StarRating
     disabled={true}
     emptyStar={'ios-star-outline'}
     fullStar={'ios-star'}
     halfStarEnabled = {true}
     halfStar={'ios-star-half'}
     iconSet={'Ionicons'}
     starColor = {'#ff9212'}
     starSize = {20}
     maxStars={5}
     rating={this.state.starCount}
     selectedStar={(rating) => this.onStarRatingPress(rating)}
   />
    </View>
     </View>
     <View style = {{flexDirection: 'row'}}>
     <View style = {{flex: 9, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text><Text style = {{color: '#42a36b'}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#42a36b" /></Text></Text>
     </View>
     </View>
     </View> 
     <View style = {{flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#fff', 
      margin: 4,
      padding: 10}}>
      <View style = {{paddingTop: 10, paddingBottom: 10}}>
     <Image
        source={require('./src/images/assests/popular-gifts-1.png')}
      /> 
      </View>
      <View style = {{flexDirection: 'row'}}>
      <View style = {{flex: 1}}>
          <Text style = {{color: '#000', fontWeight: 'bold'}}>
            Enigmatic 20 Red...
          </Text>
      </View>
      <View>
      <Text style = {{flex: 1}}>
        444
      </Text>
        </View>
     </View> 
     <View style = {{flexDirection: 'row'}}>
     <View style = {{flex: 1}}>
        <Text style = {{color: '#ff9212',marginTop: 2}}>3.5</Text>
     </View>
     <View style = {{flex: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
     <StarRating
     disabled={true}
     emptyStar={'ios-star-outline'}
     fullStar={'ios-star'}
     halfStarEnabled = {true}
     halfStar={'ios-star-half'}
     iconSet={'Ionicons'}
     starColor = {'#ff9212'}
     starSize = {20}
     maxStars={5}
     rating={this.state.starCount}
     selectedStar={(rating) => this.onStarRatingPress(rating)}
   />
    </View>
     </View>
     <View style = {{flexDirection: 'row'}}>
     <View style = {{flex: 9, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text><Text style = {{color: '#42a36b'}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#4F8EF7" /></Text></Text>
     </View>
     </View>
     </View> 
    </View>
    <View style = {{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        margin: 5

    }}>
        <View>
        <Text style = {{fontSize: 25}}>Hi,</Text>
        </View>
        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{
        }}>Set your prefence help us give you 
</Text>
<Text style = {{
        }}>best offer and sugestions.</Text>
</View>
        <View style = {{flex: 1, marginTop: 10}}>
        <TouchableOpacity style = {{flex: 1, flexDirection: 'row', backgroundColor: '#f19215', padding: 10, borderRadius: 2, paddingRight: 20, paddingLeft: 20}}>
          <Text style = {{color: '#fff', justifyContent: 'center', paddingTop:1, fontSize: 16}}>LETS GO</Text>
          <Text style = {{justifyContent: 'center', paddingLeft: 10, paddingTop: 1}}><Icon name="ios-arrow-forward" size={20} color="#fff" /></Text>

      </TouchableOpacity>

        </View>
    </View>
    </View>
</ScrollView>

);
}
}

// const star = (<Icon name="rocket" size={30} color="#900" />)
const styles = StyleSheet.create({
  wrapper: {
  },
  commanText : {
    color: '#fff',
    marginTop: 5,
    color: '#000'
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
  },
  title: {
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});
