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

class EmptyPage extends Component {
  render() {
    return (
      <View style={{marginTop: 65}}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default class NavCustomRightIconText extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableOpacity onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableOpacity>
        }
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              { return (<Text style={{color: '#3D92F3', marginLeft: 10, flex: 1}}>Store</Text>); },
             RightButton: (route, navigator, index, navState) =>
               { return (<View><Text style={{color: '#F1395C', marginRight: 25, position: 'relative'}}>Now Play...</Text><Icon style={{position: 'absolute', top: -5, right: 10}} name="ios-arrow-forward" size={30} color="#F1395C" /></View>); },
             Title: (route, navigator, index, navState) =>
               { return (<Text style={{fontWeight: '500', flex: 1}}>Artists</Text>); },
           }}
           style={{backgroundColor: '#FAFAFA', height: 58, flex: 1, justifyContent: 'space-around', flexDirection: 'row'}}
         />
        }
        style={{marginTop: 75}}
      />
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
  text: {
    padding: 10
  }
})
