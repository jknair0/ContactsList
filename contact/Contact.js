import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ContactEntity from './ContactEntity';


const Contact = ({ contact }) => {
  const { name, countryCode, phoneNumber } = contact;
  return (
    <View style={styles.root}>
      <Text style={styles.contactName}>{name}</Text>
      <View style={styles.contactNumber}>
        <Text style={styles.countryCode}>{countryCode}</Text>
        <Text style={styles.phNumber}>{phoneNumber}</Text>
      </View>
    </View>
  );
};

Contact.defaultProps = {
  contact: ContactEntity('No Name', '+91', 1234567890),
};

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactEntity),
};


const styles = StyleSheet.create({
  root: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 0.5,
    padding: 8,
  },
  contactName: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contactNumber: {
    flexDirection: 'row',
  },
  countryCode: {
    opacity: 0.5,
    marginRight: 4,
  },
  phNumber: {
    opacity: 0.7,
  },
});

export default Contact;
