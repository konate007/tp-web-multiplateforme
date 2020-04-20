import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity, ToolbarAndroid } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Ap(){
  return (
    <View style={styles.container}>
        
        <Image 
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.pravatar.cc/150?u=838433638',
          }}
          />

        
        <TextInput
          style={styles.simpleInput}
          placeholder="Emma"/>

          
        <TextInput 
          style={styles.simpleInput}
          placeholder="Phone number"/>

        
        <TextInput
          style={styles.simpleInput}
          placeholder="Address"/>

       
          <TextInput style={styles.textAreaInput}
          placeholder="About me"
          multiline= {true}
          numberOfLines = {4} />

        
        <TouchableOpacity
           style={styles.buttonSave}>
           <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#FF80AB', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#FF80AB',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  }
});
