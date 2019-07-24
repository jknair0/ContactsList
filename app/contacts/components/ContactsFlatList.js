import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Contact from './ContactListItem';
import ContactEntity from '../ContactEntity';

class ContactsFlatList extends React.Component {
  static contactAdapter(contact, onDeleteClicked) {
    return (
      <Contact
        contact={contact}
        onDeleteClicked={clickedContact => onDeleteClicked(clickedContact)}
      />
    );
  }

  render() {
    const { contactList, onDeleteClicked } = this.props;
    // noinspection RequiredAttributes
    return (
      <FlatList
        data={contactList.map(contact => ({ key: `${contact.uuid}`, value: contact }))}
        renderItem={({ item }) => ContactsFlatList.contactAdapter(item.value, onDeleteClicked)}
      />
    );
  }
}

ContactsFlatList.propTypes = {
  contactList: PropTypes.arrayOf(ContactEntity).isRequired,
  onDeleteClicked: PropTypes.func.isRequired,
};

export default ContactsFlatList;
