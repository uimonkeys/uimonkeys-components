import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Caller extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{marginTop: 65, backgroundColor: '#101B27', flex: 1}}>
        <View style={styles.callNumber}>
          <Text style={{fontSize: 36, color: '#fff'}}>(650) 110-1111</Text>
          <Text style={{color: '#fff', fontSize: 24}}>calling...</Text>
        </View>
        <View style={styles.callerAvatar}></View>
        <View style={styles.numPadsContainer}>

          <View style={styles.numPadRow}>
            <View style={styles.numPadCell}>
              <Icon name='ios-mic-off' size={36} color="white" />
              <Text style={styles.description}>mute</Text>
            </View>
            <View style={styles.numPadCell}>
              <Icon name='ios-keypad' size={36} color="white" />
              <Text style={styles.description}>keypad</Text>
            </View>
            <View style={styles.numPadCell}>
              <Icon name='ios-volume-up' size={46} color="white" />
              <Text style={styles.description}>speaker</Text>
            </View>
          </View>

          <View style={styles.numPadRow}>
            <View style={styles.numPadCell}>
              <Icon name='ios-add' size={40} color="white" />
              <Text style={styles.description}>add call</Text>
            </View>
            <View style={styles.numPadCell}>
              <Image source={require('./img/ft.png')} />
              <Text style={styles.description}>facetime</Text>
            </View>
            <View style={styles.numPadCell}>
              <Icon name='ios-person' size={46} color="white" />
              <Text style={styles.description}>contacts</Text>
            </View>
          </View>

          <View style={styles.numPadRow}>
            <View style={[styles.numPadCell, {backgroundColor: '#DD3217', borderWidth: 0, marginTop: 55, transform: [{rotate: '135deg'}]}]}>
              <Icon name='ios-call' size={46} style={{marginBottom: -5, marginRight: -20, marginLeft: -20}} color="white"/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  callNumber: {
    marginLeft: 32,
    marginTop: 32
  },
  callerAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 32,
    top: 32
  },
  numPadsContainer : {
    flexDirection: 'column',
    marginTop: 35
  },
  numPadRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numPadCell : {
    borderWidth: 1,
    borderColor: 'grey',
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 14,
    marginVertical: 14
  },
  description : {
    top: 70,
    fontSize: 15,
    color: '#fff',
    backgroundColor: 'transparent',
    position: 'absolute',
    width: 70,
    textAlign: 'center'
  }
})
