import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  ProgressViewIOS,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Toolbars extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{marginTop: 65}}>
        <View style={styles.toolbar}>
          <View style={{flex:1}}></View>
          <View style={{flex: 1}}>
            <Text>Updated Just Now</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon style={{marginRight: 10}} name='ios-create-outline' size={25} color="#4F8EF7" />
          </View>
        </View>
        <View style={{marginVertical: 5}}></View>
        <View style={styles.toolbar}>
          <View style={{position: 'absolute', flex:1, left:0, right: 0}}>
            <ProgressViewIOS
              progress={0.8}
              />
          </View>
          <View style={{flex:1}}></View>
          <View style={{flex: 1}}>
            <Text>Updated Just Now</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon style={{marginRight: 10}} name='ios-create-outline' size={25} color="#4F8EF7" />
          </View>
        </View>

        <View style={{marginVertical: 5}}></View>
        <View style={styles.toolbar}>
          <View style={styles.icons}>
            <Icon name='ios-arrow-back' size={20} color='#C4C4C4' />
          </View>
          <View style={styles.icons}>
            <Icon name='ios-arrow-forward' size={20} color='#C4C4C4' />
          </View>
          <View style={styles.icons}>
            <Icon name='ios-share-outline' size={25} color='#157EFB' />
          </View>
          <View style={styles.icons}>
            <Icon name='ios-book-outline' size={25} color='#157EFB' />
          </View>
          <View style={styles.icons}>
            <Icon name='ios-browsers-outline' size={25} color='#157EFB' />
          </View>
        </View>

        <View style={{marginVertical: 5}}></View>
        <View style={styles.toolbar}>
          <View style={styles.icons}>
            <Icon name='ios-share-outline' size={25} color='#157EFB' />
          </View>
          <View style={styles.icons}>
            <Icon name='ios-heart-outline' size={25} color='#157EFB' />
          </View>
          <View style={styles.icons}>
            <Icon name='ios-trash-outline' size={25} color='#157EFB' />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#F7F7F7',
    height: 44,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative'
  },
  icons : {
    flex: 1,
    alignItems: 'center'
  }
})
