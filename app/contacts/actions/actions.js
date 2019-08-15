import { ADD_CONTACT, REMOVE_CONTACT, WAITING } from './types';

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

function removingContact(isRemoving){
  return {
    type: WAITING,
    payload: isRemoving,
  };
}

export {
  addContact,
  removeContact,
  removingContact,
};
