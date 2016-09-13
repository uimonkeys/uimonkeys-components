import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';

import SearchBar from 'react-native-search-bar'

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{marginTop: 65}}>
        <View>
          <SearchBar
            textFieldBackgroundColor='#EAEAEA'
            placeholder='Search'
          />
        </View>
        <View style={{marginVertical: 5}}>
          <SearchBar
            placeholder='Search'
            showsCancelButton={true}
          />
        </View>
        <View>
          <SearchBar
            barTintColor='#E8E8E8'
            placeholder='Search'
          />
        </View>
      </View>
    )
  }
}
