import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text, TouchableOpacity} from 'react-native';
import VoisinRow from '../VoisinRow';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

 export default class Ap extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      voisins: []
    }
  }

  componentDidMount(){
    fetch("https://demo8473412.mockable.io/voisins")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log('We are here');
      this.setState({
        voisins: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }

  _displayDetailForVoisin  = (id) =>{
      this.props.navigation.navigate("VoisinDetail", {id: id})
  }


  render() {
    const {displayDetailForVoisin} = this.props
    return (
      <TouchableOpacity style={styles.container}
      onPress={()=> displayDetailForVoisin(item.id)}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.voisins}
          renderItem={
            ({item}) => <VoisinRow
            name={item.name}
            image_url={item.image_url}
          />
          }
          displayDetailForVoisin={this._displayDetailForVoisin}
          />
       
      </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  },

  list: {
    
  }
});