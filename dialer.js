import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Dialer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{marginTop: 65, backgroundColor: '#F3F3F3', flex: 1}}>
        <View style={styles.dialNumber}>
          <Icon name='ios-add-circle-outline' size={25} style={{marginTop: 5, marginRight: 5}} color="#157EFB"/>
          <Text style={{fontSize: 36}}>(650) 110-1111</Text>
        </View>
        <View style={styles.numPadsContainer}>
          <View style={styles.numPadRow}>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>1</Text>
              <Text></Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>2</Text>
              <Text style={styles.liter}>ABC</Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>3</Text>
              <Text style={styles.liter}>DEF</Text>
            </View>
          </View>
          <View style={styles.numPadRow}>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>4</Text>
              <Text style={styles.liter}>GHI</Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>5</Text>
              <Text style={styles.liter}>JKL</Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>6</Text>
              <Text style={styles.liter}>MNO</Text>
            </View>
          </View>
          <View style={styles.numPadRow}>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>7</Text>
              <Text style={styles.liter}>PQRS</Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>8</Text>
              <Text style={styles.liter}>TUV</Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>9</Text>
              <Text style={styles.liter}>WXYZ</Text>
            </View>
          </View>
          <View style={styles.numPadRow}>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}><Icon name='ios-medical' size={32} color='black'/></Text>
              <Text style={styles.liter}></Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}>0</Text>
              <Text style={styles.liter}>+</Text>
            </View>
            <View style={styles.numPadCell}>
              <Text style={styles.digit}><Icon name='ios-grid-outline' size={32} color='black'/></Text>
              <Text style={styles.liter}></Text>
            </View>
          </View>
          <View style={styles.numPadRow}>
            <View style={[styles.numPadCell, {backgroundColor: '#6CDD62', borderWidth: 0}]}>
              <Icon name='ios-call' size={46} style={{marginTop: 5}} color="white"/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dialNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
    marginVertical: 7
  },
  digit: {
    fontSize: 36,
    marginBottom: -7
  },
  liter: {
    fontSize: 11,
  }
})
