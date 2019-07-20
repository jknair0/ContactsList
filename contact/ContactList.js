import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Contact from './Contact';
import ContactEntity from './ContactEntity';

const ContactList = ({ contactList = [] }) => (
  <FlatList
    data={contactList.map((contact, index) => ({ key: `${index}`, value: contact }))}
    renderItem={({ item }) => contactAdapter(item.value)}
  />
);

function contactAdapter(contact) {
  return (<Contact contact={contact} />);
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(ContactEntity),
};

ContactList.defaultProps = {
  contactList: [],
};

export default ContactList;
