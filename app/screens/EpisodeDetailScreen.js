import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import _ from 'lodash'

class EpisodeDetailScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <ScrollView>
          <Image
            style={styles.episodeImage}
            source={{uri: this.props.episode.image}}
          />
        </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  episodeImage: {
    alignSelf: 'stretch',
    height: 250,
    backgroundColor: 'powderblue',
  },
});

module.exports = EpisodeDetailScreen