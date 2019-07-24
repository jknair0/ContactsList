import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import MainScreen from './circleciclient/MainScreen';
import ContactListContainer from './contacts/contactlist/ContactListContainer';
import AddContactContainer from './contacts/addcontact/AddContactContainer';

const CircleCiClientNavigator = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen,
  },
});

const RootNavigator = createStackNavigator({
  Main: {
    screen: ContactListContainer,
  },
  AddContact: {
    screen: AddContactContainer,
  },
  BottomTabNavigator: {
    screen: CircleCiClientNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(RootNavigator);
