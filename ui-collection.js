import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  AlertIOS,
  TouchableOpacity
} from 'react-native';
import Alerts from './alerts'
import Tabs from './tabs'
import Navs from './navigator'
import Lists from './list'

export default class UICollection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  goToAlerts = () => {
    this.props.navigator.push({
      title: 'Alerts',
      component : Alerts,
      passProps: {
        title: 'Alerts'
      }
    });
  }

  goToTabs = () => {
    this.props.navigator.push({
      title: 'Tabs',
      component : Tabs,
      passProps: {
        title: 'Tabs'
      }
    });
  }

  goToNavs = () => {
    this.props.navigator.push({
      title: 'Navs',
      component : Navs,
      passProps: {
        title: 'Navs'
      }
    });
  }

  goToLists = () => {
    this.props.navigator.push({
      title: 'Lists',
      component : Lists,
      passProps: {
        title: 'Lists'
      }
    });
  }

  render() {
    return(
      <View style={{marginTop: 65}}>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToAlerts()}><Text>Alerts</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToTabs()}><Text>Tabs</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToNavs()}><Text>Navs</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goToLists()}><Text>Lists</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  clickElement: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#05a5d1',
    padding: 3,
    margin: 3,
  }
})