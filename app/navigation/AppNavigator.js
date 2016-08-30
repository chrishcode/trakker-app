import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text
} from 'react-native'
import TimelineScreen from '../screens/TimelineScreen'
import EpisodeDetailScreen from '../screens/EpisodeDetailScreen'

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "Timeline":
        return (
          <TimelineScreen
            {...globalNavigatorProps} />
        )

      case "EpisodeDetail":
      return (
        <EpisodeDetailScreen
          {...globalNavigatorProps} 
          episode = {route.episode}
          />
      )

      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})

module.exports = AppNavigator