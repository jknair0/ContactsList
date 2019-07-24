import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
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
