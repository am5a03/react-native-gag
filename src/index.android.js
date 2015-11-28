/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import PostList from './common/components/post/PostList'
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Image
} = React;

var REQUEST_URL = "http://infinigag.eu01.aws.af.cm/";

var ReactNativeGag = React.createClass({
  getInitialState: function() {
    return {
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2,
      // }),
      loaded: false,
    }
  },
  componentDidMount: function() {
    // this.fetchData();
  },
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true,
        });
      })
      .done();
  },
  renderPost: function(post) {
    return(
      <View>
        <Text>{ post.caption }</Text>
        <Image
          source={{ uri: post.images.normal }}
          style={ styles.thumbnail }/>
        <Text>{ post.votes.count} points</Text>
      </View>
    )
  },
  render: function() {
    return (
      <PostList

      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    height: 300,
    width: 300
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('ReactNativeGag', () => ReactNativeGag);
