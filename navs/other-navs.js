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
import Icon from 'react-native-vector-icons/Ionicons';

export default class AllNavs extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{marginTop: 65}}>
        <View style={styles.navbar}>
          <View style={[styles.cell, {alignItems: 'flex-start', marginLeft: 10}]}>
            <Icon name='ios-add' size={30} color='#157EFB' />
          </View>
          <View style={styles.cell}>
            <Text style={{fontWeight: '500'}}>Header</Text>
          </View>
          <View style={[styles.cell, {alignItems: 'flex-end', marginRight: 10}]}>
            <Text style={{color: '#157EFB'}}>Edit</Text>
          </View>
        </View>

        <View style={{marginVertical:5}}></View>

        <View style={styles.navbar}>
          <View style={[styles.cell, {alignItems: 'flex-start', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5}]}>
            <Icon name='ios-arrow-back' size={30} color='#157EFB' />
            <Text style={{color: '#157EFB', marginTop: 6, marginLeft: 5}}>Back</Text>
          </View>
          <View style={styles.cell}>
            <Text style={{fontWeight: '500'}}>Header</Text>
          </View>
          <View style={[styles.cell, {alignItems: 'flex-end', marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end'}]}>
            <Icon style={{marginRight: 15}} name='ios-search-outline' size={25} color='#157EFB' />
            <Icon name='ios-add' size={30} color='#157EFB' />
          </View>
        </View>

        <View style={{marginVertical:5}}></View>

        <View style={styles.navbar}>
          <View style={[styles.cell, {alignItems: 'flex-start', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5}]}>
            <Icon name='ios-arrow-back' size={30} color='#157EFB' />
            <Text style={{color: '#157EFB', marginTop: 6, marginLeft: 5}}>Settings</Text>
          </View>
          <View style={styles.cell}>
            <Text style={{fontWeight: '500'}}>Notifications</Text>
          </View>
          <View style={[styles.cell, {alignItems: 'flex-end', marginRight: 10}]}>
            <Text style={{color: '#157EFB'}}>Edit</Text>
          </View>
        </View>

        <View style={{marginVertical:5}}></View>

        <View style={styles.navbar}>
          <View style={[styles.cell, {alignItems: 'flex-start', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5}]}>
            <Icon name='ios-arrow-back' size={30} color='#157EFB' />
            <Text style={{color: '#157EFB', marginTop: 6, marginLeft: 5}}>Years</Text>
          </View>
          <View style={styles.cell}>
            <Text style={{fontWeight: '500'}}>Collections</Text>
          </View>
          <View style={[styles.cell, {alignItems: 'flex-end', marginRight: 10}]}>
            <Icon name='ios-search-outline' size={25} color='#157EFB' />
          </View>
        </View>

        <View style={{marginVertical:5}}></View>

        <View style={styles.navbar}>
          <View style={[styles.cell, {alignItems: 'flex-start', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5}]}>
            <Icon name='ios-menu' size={25} color='#157EFB' />
          </View>
          <View style={styles.cell}>
            <Text style={{fontWeight: '500'}}>Hamburger</Text>
          </View>
          <View style={[styles.cell, {alignItems: 'flex-end', marginRight: 10}]}>
            <Text style={{color: '#157EFB'}}>Edit</Text>
          </View>
        </View>

        <View style={{marginVertical:5}}></View>

        <View style={styles.navbar}>
          <View style={[styles.cell, {alignItems: 'flex-start', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5}]}>
            <Icon name='ios-arrow-back' size={30} color='#157EFB' />
            <Text style={{color: '#157EFB', marginTop: 6, marginLeft: 5}}>Back</Text>
          </View>
          <View style={styles.cell}>
            <Text style={{fontWeight: '500'}}>1 of 16</Text>
          </View>
          <View style={[styles.cell, {alignItems: 'flex-end', marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 5}]}>
            <Text style={{color: '#157EFB', width: 50, textAlign: 'right', fontSize: 11, marginRight: 5, lineHeight: 11, position: 'relative', top: -5}}>Bring it on</Text>
            <Icon name='ios-arrow-forward' size={30} color='#157EFB' />
          </View>
        </View>
      </View>
    );
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
  navbar : {
    backgroundColor: '#F7F7F7',
    height: 44,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative'
  },
  cell : {
    flex: 1,
    alignItems: 'center'
  },
})
