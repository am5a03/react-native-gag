'use strict'

import Post from './Post';
var React = require('react-native');

var {
  ListView
} = React;

var REQUEST_URL = "http://infinigag.eu01.aws.af.cm/";

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isLoading: true
    }
  }

  componentDidMount() {
    this._fetchData();
  }

  // TODO just a testing function for list, remove later
  _fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    return(
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={(post) => <Post caption={ post.caption } image={ post.images.normal } counts={ post.votes.count }/>}/>
    );
  }
}
