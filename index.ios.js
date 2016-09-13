import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import UICollection from './src/ui-collection'

class uimonkeyscomponents extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: UICollection,
          title: 'UI Components',
          passProps: {title: 'UIMonkeys'}
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('uimonkeyscomponents', () => uimonkeyscomponents);
