import { combineReducers } from 'redux';
import ContactsReducer from '../app/contacts/reducers/ContactsReducer';

export default combineReducers({
  contacts: ContactsReducer,
});
