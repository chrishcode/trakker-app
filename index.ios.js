import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'

class trakker extends Component {
  render() {
    return (
      <AppNavigator
        initialRoute={{ident: "Timeline"}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('trakker', () => trakker);
