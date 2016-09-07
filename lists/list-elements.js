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
  Slider,
  Picker,
  ProgressViewIOS,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import SimpleStepper from 'react-native-simple-stepper'

export default class ListElements extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      switchTurnedOn: false,
      stepperValue: 0,
      sliderValue: 10
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
          <View style={[{flexDirection: 'row', alignItems: 'flex-end', marginRight: 10}]}>
            <Text style={{color: 'grey'}}>Off</Text><Icon style={{marginHorizontal: 8}} name='ios-arrow-forward' size={14} color='grey' />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#BDF06C'}]}></View>
          <Text style={styles.fieldDescription}>List 4</Text>
          <View style={[{flexDirection: 'row', alignItems: 'flex-end', marginRight: 10}]}>
            <Text style={{color: 'grey'}}>On</Text><Icon style={{marginHorizontal: 8}} name='ios-arrow-forward' size={14} color='grey' />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#FFFEA4'}]}></View>
          <Text style={styles.fieldDescription}>List 5</Text>
          <View style={[{flexDirection: 'row', alignItems: 'flex-end', marginRight: 10}]}>
            <Icon style={{marginHorizontal: 8}} name='ios-arrow-forward' size={14} color='grey' />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#FFFEA4'}]}></View>
          <Text style={styles.fieldDescription}>List 6</Text>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#FFFEA4'}]}></View>
          <Text style={styles.fieldDescription}>List 7</Text>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#FFFEA4'}]}></View>
          <Text style={styles.fieldDescription}>Stepper value: {this.state.stepperValue}</Text>
          <View style={styles.switch}>
            <SimpleStepper
            tintColor="#3D92F3"
            underlayColor="rgba(0,0,0,.1)"
            valueChanged={(value) => this.setState({stepperValue: value})} />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#31D8C1'}]}></View>
          <Text style={styles.fieldDescription}>Slider value: {(this.state.sliderValue).toFixed(0)}</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
            <Icon name='ios-volume-down' size={25} color='black' />
            <Slider
              minimumValue={0}
              maximumValue={20}
              value={this.state.sliderValue}
              onValueChange={(value) => this.setState({sliderValue: value})}
              style={{flex: 1, marginHorizontal: 10}}
            />
            <Icon name='ios-volume-up' size={25} color='black' />
          </View>
        </View>
        { divider }
        <View style={styles.innerContainer}>
          <View style={[styles.coloredBlock, {backgroundColor: '#31D8C1'}]}></View>
          <Text style={styles.fieldDescription}>Slider</Text>
          <Slider
            minimumValue={0}
            maximumValue={7}
            value={0}
            step={1}
            trackImage={require('../img/slider-background.png')}
            // onValueChange={(value) => this.setState({sliderValue: value})}
            style={{flex: 1, marginHorizontal: 10}}
          />
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
