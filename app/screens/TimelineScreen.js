import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';
import _ from 'lodash'


const timeline = [
  {image: "http://tvmazecdn.com/uploads/images/medium_portrait/62/155508.jpg", firstName: "Mr. Robot - Se2 Ep3", lastName: "leigh", roomNumber: 30},
  {image: "http://tvmazecdn.com/uploads/images/medium_portrait/0/2432.jpg", firstName: "Suits", lastName: "piers", roomNumber: 14},
  {image: "http://tvmazecdn.com/uploads/images/medium_portrait/11/27544.jpg", firstName: "Ballers", lastName: "wanner", roomNumber: 8}
]

class TimelineScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      timelineDataSource: ds.cloneWithRows(timeline)
    }
  }

  render() {
    return (
      <ListView 
        style={{marginTop: 60}}
        dataSource={this.state.timelineDataSource} 
        renderRow={(episode) => { return this._renderEpisodeRow(episode) }}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }

  _renderEpisodeRow(episode) {
    return (
      <TouchableOpacity style={styles.episodeRow} onPress={(event) => this._navigateToEpisodeDetail(episode)}>
        <Image
          style={styles.episodeImage}
          source={{uri: episode.image}}
        />
        <Text style={styles.episodeName}>{episode.firstName}</Text>
        <View style={{flex: 1}} />
      </TouchableOpacity>
    )
  }

  _navigateToEpisodeDetail(episode) {
    this.props.navigator.push({
      ident: "EpisodeDetail",
      episode: episode
    })
  }
}

const styles = StyleSheet.create({
  episodeRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 80,
  },

  episodeName: {
    marginLeft: 10,
    marginTop: -30,
  },

  lastName: {
    marginLeft: 0,
  },

  episodeImage: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
    marginLeft: 10,
    borderRadius: 25,
  },

  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#eeeeee',
  },
});

module.exports = TimelineScreen