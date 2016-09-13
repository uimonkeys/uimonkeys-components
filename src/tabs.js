import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TabBarIOS
} from 'react-native';

export default class Tabs extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <View style={{marginTop: 115}}>
        <TabBarIOS
          unselectedTintColor="#A5A5A5"
          tintColor="#368EF4"
          barTintColor="#000000">
          <TabBarIOS.Item
            title="Music"
            icon={require('./img/music-inactive.png')}
            selected={true}>
            <Text>Music</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Films"
            icon={require('./img/movie-inactive.png')}
            selected={false}>
            <Text>Films</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Search"
            icon={require('./img/search-inactive.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Tones"
            icon={require('./img/ring-inactive.png')}
            selected={false}>
            <Text>Tones</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="More"
            icon={require('./img/more-inactive.png')}
            selected={false}>
            <Text>More</Text>
          </TabBarIOS.Item>
        </TabBarIOS>

        <TabBarIOS
          unselectedTintColor="#A5A5A5"
          tintColor="#368EF4"
          barTintColor="#F7F7F7"
          style={{marginTop: 55}}>
          <TabBarIOS.Item
            title="Favirites"
            icon={require('./img/favorites-inactive.png')}
            selected={false}>
            <Text>Featured</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Top Charts'
            icon={require('./img/charts-inactive.png')}
            selected={false}>
            <Text>Top Charts</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Explore"
            icon={require('./img/explore-inactive.png')}
            selected={true}>
            <Text>Explore</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Search'
            icon={require('./img/search-inactive.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Updates'
            icon={require('./img/updates-inactive.png')}
            selected={false}>
            <Text>Updates</Text>
          </TabBarIOS.Item>
        </TabBarIOS>

        <View style={{height: 44, overflow: 'hidden'}}>
          <TabBarIOS
            unselectedTintColor="#A5A5A5"
            tintColor="#368EF4"
            barTintColor="#F7F7F7"
            style={{marginTop: 55}}>
            <TabBarIOS.Item
              icon={require('./img/favorites-inactive.png')}
              selected={false}>
              <Text>Featured</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={require('./img/charts-inactive.png')}
              selected={false}>
              <Text>Top Charts</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={require('./img/explore-inactive.png')}
              selected={false}>
              <Text>Explore</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={require('./img/search-inactive.png')}
              selected={false}>
              <Text>Search</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={require('./img/updates-inactive.png')}
              selected={true}>
              <Text>Updates</Text>
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>

        <View style={{height: 44, overflow: 'hidden'}}>
          <TabBarIOS
            unselectedTintColor="#A5A5A5"
            tintColor="#368EF4"
            barTintColor="#F7F7F7"
            style={{marginTop: 55}}>
            <TabBarIOS.Item
              icon={require('./img/music-inactive.png')}
              selected={true}>
              <Text>Music</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={require('./img/movie-inactive.png')}
              selected={false}>
              <Text>Films</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={require('./img/search-inactive.png')}
              selected={false}>
              <Text>Search</Text>
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>

        <TabBarIOS
          unselectedTintColor="#A5A5A5"
          tintColor="#368EF4"
          barTintColor="#F7F7F7"
          style={{marginTop: 55}}>
          <TabBarIOS.Item
            title="First"
            icon={require('./img/dashed-rectangle.png')}
            selected={true}>
            <Text>Music</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Second"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Films</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Third"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Fourth"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Fifth"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
        </TabBarIOS>

        <TabBarIOS
          unselectedTintColor="#A5A5A5"
          tintColor="#368EF4"
          barTintColor="#F7F7F7"
          style={{marginTop: 55}}>
          <TabBarIOS.Item
            title="First"
            icon={require('./img/dashed-rectangle.png')}
            selected={true}>
            <Text>Music</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Second"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Films</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Third"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Fourth"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
        </TabBarIOS>

        <TabBarIOS
          unselectedTintColor="#A5A5A5"
          tintColor="#368EF4"
          barTintColor="#F7F7F7"
          style={{marginTop: 55}}>
          <TabBarIOS.Item
            title="First"
            icon={require('./img/dashed-rectangle.png')}
            selected={true}>
            <Text>Music</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Second"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Films</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Third"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Search</Text>
          </TabBarIOS.Item>
        </TabBarIOS>

        <TabBarIOS
          unselectedTintColor="#A5A5A5"
          tintColor="#368EF4"
          barTintColor="#F7F7F7"
          style={{marginTop: 55}}>
          <TabBarIOS.Item
            title="First"
            icon={require('./img/dashed-rectangle.png')}
            selected={true}>
            <Text>Music</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Second"
            icon={require('./img/dashed-rectangle.png')}
            selected={false}>
            <Text>Films</Text>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    )
  }
}
