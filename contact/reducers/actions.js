const ADD_CONTACT = 'ADD_CONTACT';
const REMOVE_CONTACT = 'REMOVE_CONTACT';

function addContact(contact) {
  return {
    type: ADD_CONTACT,
    value: contact,
  };
}

function removeContact(uuid) {
  return {
    type: REMOVE_CONTACT,
    value: uuid,
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
