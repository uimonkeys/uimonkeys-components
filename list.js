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
import ListElements from './lists/list-elements'

export default class Lists extends Component {
  constructor(props, context) {
    super(props, context);
  }

  goToListElements = () => {
    this.props.navigator.push({
      title: 'Lists',
      component : ListElements,
      passProps: {
        title: 'Lists'
      }
    });
  }

  render() {
    return (
      <View style={{marginTop: 65}}>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToListElements()}><Text>List Elements</Text></TouchableOpacity>
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
