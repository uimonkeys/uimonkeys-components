import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

export default class Checkbox extends Component {
  static propTypes = {
    isChecked: PropTypes.bool.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isChecked: this.props.isChecked
    }
  }

  renderCheckbox = () => {
    if (!this.state.isChecked) {
      return <TouchableWithoutFeedback onPress={() =>
        this.refs.view.zoomOut(150).then((endState) => {
          if (endState.finished) {
            this.setState({isChecked: !this.state.isChecked}),
            this.refs.view.zoomIn(150)
          }
        })
        }>
        <View style={styles.emptyCircle}></View>
      </TouchableWithoutFeedback>
    }
    else {
      return <TouchableWithoutFeedback
        onPress={() =>
          this.refs.view.zoomOut(150).then((endState) => {
            if (endState.finished) {
              this.setState({isChecked: !this.state.isChecked}),
              this.refs.view.zoomIn(150)
            }
          })
        }>
        <Animatable.View style={styles.checkedCircle}>
          <Icon name='ios-checkmark-circle' size={27} color='#157DFB' style={styles.icon}/>
        </Animatable.View>
      </TouchableWithoutFeedback>
    }
  }

  render() {
    return (
      <Animatable.View style={styles.checkbox} ref='view'>
        {this.renderCheckbox()}
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  emptyCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderColor: '#929292',
    borderWidth: 1
  },
  checkbox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon : {
    marginTop: 2
  }
})
