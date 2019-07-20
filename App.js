/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';

const RootNavigator = createStackNavigator({
  Main: {
    screen: ContactListScreen,
  },
  AddContact: {
    screen: AddContactScreen,
  },
});

const App = createAppContainer(RootNavigator);

export default App;
