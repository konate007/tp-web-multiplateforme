
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';

export default (VoisinRow = props => (
  <View style={styles.row}>
    <Image style={styles.picture} source={{ uri: props.image_url }} />
    <View style={{width: 250}} >
      <Text style={styles.primaryText}>
        {props.name}
      </Text>
    </View>
    <View style={styles.icon}>
      <Icon 
        name='delete'
        type='material'
        color='#FF80AB'/>
    </View>
  </View>
))


const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 ,
    borderBottomWidth:1,
    borderBottomColor:'grey'  
  },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },

  icon: {
    borderBottomWidth:1,
    borderBottomColor:'grey',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})
