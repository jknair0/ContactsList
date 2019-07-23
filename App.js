import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import RootReducer from './reducer/RootReducer';
import AddContactContainer from './src/contacts/addcontact/AddContactContainer';
import ContactListContainer from './src/contacts/contactlist/ContactListContainer';
import MainScreen from './src/circleciclient/MainScreen';


const CircleCiClientNavigator = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen,
  },
});

const RootNavigator = createStackNavigator({
  BottomTabNavigator: {
    screen: CircleCiClientNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: ContactListContainer,
  },
  AddContact: {
    screen: AddContactContainer,
  },
});

const AppContainer = createAppContainer(RootNavigator);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default App;
