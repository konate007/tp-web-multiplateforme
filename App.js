import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, FlatList, AppRegistry, Image, Dimensions } from 'react-native';
//import { render } from 'react-dom';
//import data from './json/data.json';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      dataSource: [
        {
          "book_title": "Caroline", 
          "image": "https://i.pravatar.cc/100", 
         }, 
         {
          "book_title": "Jack", 
          "image": "https://i.pravatar.cc/200", 
         }, 
         {
          "book_title": "Chloé", 
          "image": "https://i.pravatar.cc/300", 
         }, 
         {
          "book_title": "Vincent", 
          "image": "https://i.pravatar.cc/400", 
         }, 
         {
          "book_title": "Elodie", 
          "image": "https://i.pravatar.cc/500", 
         }, 
         {
          "book_title": "Sylvain", 
          "image": "https://i.pravatar.cc/600", 
         }, 
         {
          "book_title": "Bauer", 
          "image": "https://i.pravatar.cc/700", 
         
         }
      ]
    }
  }

  renderItem = ({item}) =>
  {
      return(
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}>
            <Image style={{width: 100, height: 100, borderRadius: 500 }}
                source={{ uri: item.image}}/>
            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5}}>
                  <Text style={{ fontSize: 18, color: 'green', marginBottom: 15}}>
                      {item.book_title}
                  </Text>
            </View>
            <Image style={{width: 50, height: 40, borderRadius: 50 }}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUt97xgzfXBFlVyOveAjynMv0yG3MknS76UjlySBvOVnHOn2qypwTIqsmzLw&s'
                }}/>
        </View> 
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
           data={this.state.dataSource}
           renderItem={this.renderItem}
           keyExtractor={(item, index) => index.toString()}
           ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
   }

   renderSeparator = () =>
   {
     return(
       <View
           style={{height: 1, width: '100%', backgroundColor: 'black'}}>
       </View>
     )
   }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

    
 
  
