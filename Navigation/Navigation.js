
import {createStackNavigator, StackNavigation, createAppContainer} from '@react-navigation/native';
import Ap from '../screens/Ap';
import VoisinDetail from '../screens/VoisinDetail' ;

const SearchNavigator = StackNavigation({
  Ap: {
        screen: Ap,
        navigationOptions: {
            title: "Search"
        }

    },
    VoisinDetail: {
      screen: VoisinDetail,
      navigationOptions: {
          title: "Search"
      }
    }
})
export default createAppContainer(SearchNavigator)
