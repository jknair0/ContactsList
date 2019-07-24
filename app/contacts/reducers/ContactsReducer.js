import { ADD_CONTACT, REMOVE_CONTACT } from '../actions/types';


const INITIAL_STATE = [];

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(contact => contact.uuid !== action.payload);
    default:
      return state;
  }
};

export default contactsReducer;
