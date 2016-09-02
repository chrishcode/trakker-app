import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class TopBar extends Component {
	render() {
		return (
			<View style={styles.topbar}>
        		<Text>trakker</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  topbar: {
  	backgroundColor: "#ffffff", 
  	marginTop: 20, 
  	height: 40, 
  	justifyContent: "center", 
  	alignItems: "center",
  },
})

module.exports = TopBar