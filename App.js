/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';
import RootReducer from './reducer/RootReducer';

const store = createStore(RootReducer);
const RootNavigator = createStackNavigator({
  Main: {
    screen: ContactListScreen,
  },
  AddContact: {
    screen: AddContactScreen,
  },
});
const AppContainer = createAppContainer(RootNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
