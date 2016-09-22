import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Animated,
  Image,
  Easing,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var TIMES = 400;

export default class Animation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      _animatedValue : new Animated.Value(0),
      _angle: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.timing(
      this.state._animatedValue,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
    this._animate()
  }

  _animate() {
    this.state._angle.setValue(0);
    this._anim = Animated.timing(this.state._angle, {
      toValue: 360*TIMES,
      duration: 800*TIMES,
      easing: Easing.linear
    }).start(this._animate);
  }

  toggleOpacity = () => {
    if ( this.state._animatedValue._value === 1 ) {
      Animated.timing(
        this.state._animatedValue,
        {
          toValue: 0,
          duration: 500
        }
      ).start()
    } else {
      Animated.timing(
        this.state._animatedValue,
        {
          toValue: 1,
          duration: 500,
        },
      ).start()
    }
  }

  render() {
    return (
      <View style={{marginTop: 65}}>
          <TouchableOpacity onPress={this.toggleOpacity}>
            <Text style={{color: '#157EFB'}}>Toggle Block Visibility</Text>
          </TouchableOpacity>
          <Animated.View style={{opacity: this.state._animatedValue, flex: 1, borderWidth: 1, padding: 10, margin: 5}}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </Animated.View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Animated.Image source={require('./img/refresh.png')} style={{width: 20, height: 20, justifyContent: 'center', backgroundColor: 'transparent', transform: [{rotate: this.state._angle.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg']
                  })}]}} / >
          </View>
      </View>
    )
  }
}
