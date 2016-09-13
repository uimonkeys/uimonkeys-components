import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Checkbox from './components/checkbox'

export default class Mail extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <View style={{marginTop: 65}}>
        <SwipeRow
          disableRightSwipe={true}
          disableLeftSwipe={false}
          rightOpenValue={-180}
          style={{flex: 1}}
        >
            <View style={styles.hiddenElements}>
                <View style={[styles.hiddenBlock, {backgroundColor: '#C2C2C2'}]}><Text style={styles.hiddenText}>More</Text></View>
                <View style={[styles.hiddenBlock,{ backgroundColor: '#E69B28'}]}><Text style={styles.hiddenText}>Flag</Text></View>
                <View style={[styles.hiddenBlock, {backgroundColor: '#2C6B9E'}]}><Text style={styles.hiddenText}>Archive</Text></View>
            </View>
            <View style={styles.mailContainer}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 5}}>
                  <View style={styles.newMailPin}></View>
                  <View style={styles.mailHasAttachment}>
                    <Icon name="ios-attach" color='black' size={18} />
                  </View>
                </View>
                <View style={{flex: 10}}>
                  <View>
                    <Text style={styles.mailHeader}>Your Best Friend!</Text>
                    <View style={styles.mailTime}>
                      <Text style={{color: '#929292'}}>6:20 AM</Text><Icon style={{marginTop: 1, marginLeft: 5}} name="ios-arrow-forward" color='#929292' size={15} />
                    </View>
                    <Text style={styles.mailTheme}>UIMonkeys Rocks</Text>
                    <Text style={styles.mailBody}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                  </View>
                </View>
            </View>
        </SwipeRow>
        <View>
          <View style={styles.inboxRow}>
            <Checkbox isChecked={false} />
            <View style={styles.inboxRowContent}>
              <Icon style={{marginLeft: 15}} name='ios-filing-outline' size={25} color='#157DFB' />
              <Text style={styles.inboxContentText}>All inboxes</Text>
              <Icon name="ios-menu" color='#929292' size={25} style={{position: 'absolute', right: 10, top: 12}}/>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.inboxRow}>
            <Checkbox isChecked={false} />
            <View style={styles.inboxRowContent}>
              <Icon style={{marginLeft: 15}} name='ios-filing-outline' size={25} color='#157DFB' />
              <Text style={styles.inboxContentText}>Gmail</Text>
              <Icon name="ios-menu" color='#929292' size={25} style={{position: 'absolute', right: 10, top: 12}}/>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.inboxRow}>
            <Checkbox isChecked={false} />
            <View style={styles.inboxRowContent}>
              <Icon style={{marginLeft: 15}} name='ios-filing-outline' size={25} color='#157DFB' />
              <Text style={styles.inboxContentText}>Yandex</Text>
              <Icon name="ios-menu" color='#929292' size={25} style={{position: 'absolute', right: 10, top: 12}}/>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.inboxRow}>
            <Checkbox isChecked={true} />
            <View style={[styles.inboxRowContent, {borderBottomWidth: 0}]}>
              <Text style={styles.inboxContentText}>iCloud</Text>
              <Icon name="ios-menu" color='#929292' size={25} style={{position: 'absolute', right: 10, top: 12}}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inboxRow : {
    flex: 1,
    flexDirection: 'row',
    height: 45
  },
  inboxContentText: {
    color: 'black',
    fontSize: 17,
    marginLeft: 15
  },
  inboxRowContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  emptyCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderColor: '#929292',
    borderWidth: 1
  },
  inboxCheckbox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hiddenElements : {
    flexDirection: 'row',
    width: 180,
    flex: 1,
    alignSelf: 'flex-end'
  },
  hiddenBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  hiddenText : {
    color: '#fff'
  },
  mailContainer : {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff'
  },
  newMailPin: {
    backgroundColor: '#157DFB',
    height: 12,
    width: 12,
    borderRadius: 6,
    marginVertical: 3
  },
  mailHasAttachment : {
    height: 12,
    width: 12,
    alignItems: 'center'
  },
  mailHeader: {
    fontWeight: '700',
    fontSize: 17
  },
  mailTheme : {
    color: 'black',
    marginLeft: 5,
    fontSize: 15
  },
  mailBody: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 5,
    marginRight: 30
  },
  mailTime: {
    right: 20,
    top: 5,
    position:'absolute',
    flex: 1,
    height: 20,
    flexDirection: 'row'
  }
})
