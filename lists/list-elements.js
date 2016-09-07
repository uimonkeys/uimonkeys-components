import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AlertIOS,
  Image,
  Switch,
  Picker,
  TouchableOpacity
} from 'react-native';

export default class ListElements extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      switchTurnedOn: false
    }
  }

  switchHandler(value) {
    this.setState({switchTurnedOn: value})
  }

  render() {
    divider = <View style={styles.divider}></View>

    return (
      <View style={{marginTop: 65}}>
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#2F2A34'}]}></View>
          <Text style={styles.fieldDescription}>List 1</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.switchHandler(value)}
              value={true} />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#12A3A6'}]}></View>
          <Text style={styles.fieldDescription}>List 2</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.switchHandler(value)}
              value={this.state.switchTurnedOn} />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#31D8C1'}]}></View>
          <Text style={styles.fieldDescription}>List 3</Text>
          <View style={styles.switch}>

          </View>
        </View>
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
  },
  fieldDescription: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500'
  },
  switch: {
    flex: 1,
    right: 10,
    alignItems: 'flex-end'
  },
  innerContainer: {
    paddingLeft: 20,
    flex: 1,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center'
  },
  divider: {
    height: 1,
    backgroundColor: '#dfdfe4',
    position: 'relative',
    left: 35
  },
  coloredBlock: {
    height: 29,
    width: 29,
    marginLeft: -15,
    borderRadius: 7,
    marginRight: 5
  }
})
