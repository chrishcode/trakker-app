/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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


const people = [
  {image: "http://tvmazecdn.com/uploads/images/medium_portrait/62/155508.jpg", firstName: "Mr. Robot - S02 E03", lastName: "leigh", roomNumber: 30},
  {image: "http://tvmazecdn.com/uploads/images/medium_portrait/0/2432.jpg", firstName: "Suits", lastName: "piers", roomNumber: 14},
  {image: "http://tvmazecdn.com/uploads/images/medium_portrait/11/27544.jpg", firstName: "Ballers", lastName: "wanner", roomNumber: 8}
]

class trakker extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ListView 
        style={{marginTop: 60}}
        dataSource={this.state.peopleDataSource} 
        renderRow={(person) => { return this._renderPersonRow(person) }}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>*/
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow}>
        <Image
          style={styles.personImage}
          source={{uri: person.image}}
        />
        <Text style={styles.personName}>{person.firstName}</Text>
        <View style={{flex: 1}} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 80,
  },

  personName: {
    marginLeft: 10,
    marginTop: -30,
  },

  lastName: {
    marginLeft: 0,
  },

  personImage: {
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

AppRegistry.registerComponent('trakker', () => trakker);
