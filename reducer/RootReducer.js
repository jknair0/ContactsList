import { combineReducers } from 'redux';
import ContactsReducer from '../src/contacts/reducers/ContactsReducer';

export default combineReducers({
  contacts: ContactsReducer,
});
