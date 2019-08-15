import { ADD_CONTACT, REMOVE_CONTACT, WAITING } from '../actions/types';


const INITIAL_STATE = { contacts: [], waiting: false };

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...(state.contacts), action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.uuid !== action.payload),
      };
    case WAITING:
      return {
        ...state,
        waiting: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
