import { removeContact, removingContact } from './actions';

function removeContactAsync(contact) {
  return (dispatch) => {
    dispatch(removingContact(true));
    setTimeout(() => {
      dispatch(removeContact(contact));
      dispatch(removingContact(false));
    }, 1000);
  };
}

export {
  removeContactAsync,
};
