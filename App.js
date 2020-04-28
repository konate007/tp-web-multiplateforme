import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text} from 'react-native';
import VoisinRow from './VoisinRow';
import Navigation from './Navigation/Navigation' ;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class App extends React.Component {

  

  render() {
    return (
      <Navigation/>
    )
  }
}