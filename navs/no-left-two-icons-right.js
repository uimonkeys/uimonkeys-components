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

//Хак, чтобы в навбаре были видны элементы с отрицательным marginTop.
//Только для <Navigator.NavigationBar />
const navigationStyles = { ...Navigator.NavigationBar.StylesIOS };

navigationStyles.Stages.Left.LeftButton.overflow = 'visible';
navigationStyles.Stages.Center.LeftButton.overflow = 'visible';
navigationStyles.Stages.Right.LeftButton.overflow = 'visible';

navigationStyles.Stages.Left.RightButton.overflow = 'visible';
navigationStyles.Stages.Center.RightButton.overflow = 'visible';
navigationStyles.Stages.Right.RightButton.overflow = 'visible';

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

export default class NavNoLeftTwoIconsRight extends Component {
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
              { return ( '' ); },
             RightButton: (route, navigator, index, navState) =>
               { return (<View style={{flexDirection: 'row', alignItems: 'center', marginTop:-15}}><Icon name="ios-share-outline" size={30} color="#4F8EF7" /><Icon name="ios-list-outline" style={{marginHorizontal: 20}} size={30} color="#4F8EF7" /></View>); },
             Title: (route, navigator, index, navState) =>
               { return (<Text style={{fontWeight: '500', marginTop: -8}}>Header</Text>); },
           }}
           style={{backgroundColor: '#FAFAFA', height: 41}}
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
