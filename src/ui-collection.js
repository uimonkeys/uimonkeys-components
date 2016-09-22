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
import Toolbars from './toolbars'
import ListElements from './lists/list-elements'
import Search from './search'
import Mail from './mail'
import Dialer from './dialer'
import Caller from './caller'
import Animation from './animation'

export default class UICollection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  goTo = (title, component) => {
    this.props.navigator.push({
      title: title,
      component : component,
      passProps: {
        title: title
      }
    });
  }

  render() {
    return(
      <View style={{marginTop: 65}}>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Alerts', Alerts)}><Text>Alerts</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Tabs', Tabs)}><Text>Tabs</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Navs', Navs)}><Text>Navs</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Lists', ListElements)}><Text>Lists</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Toolbars', Toolbars)}><Text>Toolbars</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Search', Search)}><Text>Search</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Mailbox', Mail)}><Text>Mailbox</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Dialer', Dialer)}><Text>Dialer</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Caller', Caller)}><Text>Caller</Text></TouchableOpacity>
        <TouchableOpacity style={styles.clickElement} onPress={() => this.goTo('Animation', Animation)}><Text>Animation</Text></TouchableOpacity>
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
