import { ADD_CONTACT, REMOVE_CONTACT } from './actions';
import ContactEntity from '../ContactEntity';

const INITIAL_STATE = [
  new ContactEntity('jk', '+1', 99887766553),
];

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.value];
    case REMOVE_CONTACT:
      return state.filter(contact => contact.uuid !== action.value);
    default:
      return state;
  }
};

export default contactsReducer;
