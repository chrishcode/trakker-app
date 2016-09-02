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
//import TopBar from '../components/Topbar'

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
      <View>
      <View style={{
        backgroundColor: "#ffffff", 
        marginTop: 20, 
        height: 40, 
        justifyContent: "center", 
        alignItems: "center",
        }}>
        <Text>trakker</Text>
      </View>
      <ListView
        dataSource={this.state.timelineDataSource} 
        renderRow={(episode) => { return this._renderEpisodeRow(episode) }}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
      </View>
    );
  }

  _renderEpisodeRow(episode) {
    return (
      <TouchableOpacity style={styles.episodeRow} onPress={(event) => this._navigateToEpisodeDetail(episode)}>
        <View style={styles.episodeWrap}>
          <Image
            style={styles.episodeImage}
            source={{uri: episode.image}}
          />
          <View style={styles.episodeInfo}>
            <View style={styles.topInfo}>
              <Text style={styles.title}>{episode.firstName}</Text>
              <Text style={styles.timestamp}>45 min</Text>
            </View>

            <View>
              <Text ellipsizeMode="tail" numberOfLines={2} style={styles.description}>A video is released by fsociety; Darlene decides to act on an old desire. A video is released by fsociety; Darlene decides to act on an old desire.</Text>
            </View>
          </View>
        </View>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
  },

  episodeWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  episodeInfo: {
    flex: 1,
    flexDirection: "column",
    marginRight: 10,
  },

  topInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  title: {
    fontWeight: "bold",
    color: "#000000",
    fontFamily: "Helvetica Neue",
    fontSize: 13,
  },

  timestamp: {
    color: "#8c8c8c",
    fontFamily: "Helvetica Neue",
    fontSize: 13,
  },

  description: {
    color: "#8c8c8c",
    fontFamily: "Helvetica Neue",
    fontSize: 13,
    lineHeight: 18,
  },

  lastName: {
    marginLeft: 0,
  },

  episodeImage: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 25,
  },

  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#f5f4f4',
  },
});

module.exports = TimelineScreen