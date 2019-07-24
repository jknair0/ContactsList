const ADD_CONTACT = 'ADD_CONTACT';
const REMOVE_CONTACT = 'REMOVE_CONTACT';

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
  ADD_CONTACT,
  REMOVE_CONTACT,
};

export {
  addContact,
  removeContact,
};
