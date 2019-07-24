import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist/es/persistReducer';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist/es/persistStore';
import RootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {
  store,
  persistor,
};
