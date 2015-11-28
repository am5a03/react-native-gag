'use strict'

var React = require('react-native');
var {
  View,
  Image,
  Text,
  StyleSheet
} = React;

export default class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{ this.props.caption }</Text>
        <Image
          source={{ uri: this.props.image }}
          style={ styles.thumbnail }/>
        <Text>{ this.props.count } points</Text>
      </View>
    )
  }

  handleUpvote() {
    // Do sth
  }

  handleDownvote() {
    // Do sth
  }
}

var styles = StyleSheet.create({
  container: {

  },
  thumbnail: {
    width: 300,
    height: 300,
  }
})
