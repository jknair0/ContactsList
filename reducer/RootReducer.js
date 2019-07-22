import { combineReducers } from 'redux';
import ContactsReducer from '../contact/reducers/ContactsReducer';

export default combineReducers({
  contacts: ContactsReducer,
});
