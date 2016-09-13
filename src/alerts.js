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

export default class Alerts extends Component {
  constructor(props, context) {
    super(props, context);
  }
  //TODO: Add TouchId request alert.
  render() {
    return(
      <View style={{marginTop: 65}}>
        <TouchableOpacity style={styles.clickElement} onPress={() => AlertIOS.alert(
           'It must be an important message. No doubts.',
           'This is a sample message and it needs your attention.',
           [
             {text: 'Cancel', onPress: () => {}, style: 'cancel'},
             {text: 'Ok', onPress: () => {}},
           ],
         )}><Text>Alert with 'Cancel' and 'Ok' button</Text></TouchableOpacity>
         <TouchableOpacity style={styles.clickElement} onPress={() => AlertIOS.alert(
            'It must be an important message. No doubts.',
            'This is a sample message and it needs your attention.',
            [
              {text: 'Ok', onPress: () => {}},
            ],
          )}><Text>Alert with just 'Ok' button</Text></TouchableOpacity>
          <TouchableOpacity style={styles.clickElement} onPress={() => AlertIOS.prompt(
            'Can You Tell Us Something?',
            'This is really important',
            [
              {text: 'Cancel', onPress: () => {}, style: 'cancel'},
              {text: 'OK', onPress: () => {}},
            ],
            'secure-text'
          )}><Text>Prompt with secure text, 'Ok' and 'Cancel' button</Text></TouchableOpacity>
          <TouchableOpacity style={styles.clickElement} onPress={() => AlertIOS.prompt(
            'Could you please log in?',
            null,
            [
              {text: 'Cancel', onPress: () => {}, style: 'cancel'},
              {text: 'OK', onPress: () => {}},
            ],
            'login-password'
          )}><Text>Prompt with Login menu</Text></TouchableOpacity>
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
  }
})
