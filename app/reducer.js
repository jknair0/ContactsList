import { combineReducers } from 'redux';
import ContactsReducer from './contacts/reducers/ContactsReducer';

export default combineReducers({
  contactsState: ContactsReducer,
});
