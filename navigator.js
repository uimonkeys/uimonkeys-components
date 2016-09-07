import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AlertIOS,
  Image,
  TouchableOpacity
} from 'react-native';
import NavCustomRightIconText from './navs/custom-right-text-icon'
import NavNoLeftTwoIconsRight from './navs/no-left-two-icons-right'


export default class Navs extends Component {
  constructor(props, context) {
    super(props, context);
  }

  goToCustomRightTextIcon = () => {
    this.props.navigator.push({
      title: 'Navs',
      component : NavCustomRightIconText,
      passProps: {
        title: 'Navs'
      }
    });
  }

  goToNoLeftTwoIconsRight = () => {
    this.props.navigator.push({
      title: 'Navs',
      component : NavNoLeftTwoIconsRight,
      passProps: {
        title: 'Navs'
      }
    });
  }

  render() {
    return (
      <View style={{marginTop: 65}}>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToCustomRightTextIcon()}><Text>Custom right text + icon</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToNoLeftTwoIconsRight()}><Text>No left text and 2 right icons</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  clickElement: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#05a5d1',
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  text: {
    padding: 10
  }
})
