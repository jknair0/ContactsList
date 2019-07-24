import { ADD_CONTACT, REMOVE_CONTACT } from './types';

function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
}

function removeContact(contact) {
  return {
    type: REMOVE_CONTACT,
    payload: contact.uuid,
  };
}

export {
  addContact,
  removeContact,
};
