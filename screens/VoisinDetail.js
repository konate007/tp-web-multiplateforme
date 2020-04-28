import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text, ScrollView} from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

 class VoisinDetail extends React.Component {

    constructor(props) {
      super(this.props);
      this.state = {
          voisin: undefined
      }
    }
    _displayVoisin(){
      const voisin = this.state.voisin
      if(voisin != undefined){
        return (
          <ScrollView style={styles.scrollView}>
            <Image
            style={styles.image}
            source={{uri:voisin.image_url}}>
            </Image>
            <Text>{voisin.name}</Text>
          </ScrollView>
        )
         
      }
    }

    componentDidMount() 
    {
      getVoisinDetail(this.props.navigation.state.params.id).then(data =>{
        this.setState({
          voisin: data
        })
      })  
      //this.setState({  voisin: this.props.navigation.state.params. voisin });
    }
    render() 
    {
      const id = this.props.navigation.state.params.id
        return (
          <View style={styles.container}>
            {this._displayVoisin()}
          </View>
        )
      }

}
export function getVoisinDetail(id){
    const url = "https://demo8473412.mockable.io/voisins"
    return fetch(url)
    .then(response => response.json())
    .catch((error) => console.log(error));
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    scrollView: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
  });

  export default VoisinDetail ;