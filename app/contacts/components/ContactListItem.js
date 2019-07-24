import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import PropTypes from 'prop-types';
import ContactEntity from '../ContactEntity';


export default class ContactListItem extends Component {
  render() {
    const { contact, onDeleteClicked } = this.props;
    const {
      name, countryCode, phoneNumber,
    } = contact;
    return (
      <View style={styles.root}>
        <View style={styles.contactContent}>
          <Text style={styles.contactName}>{name}</Text>
          <View style={styles.contactNumber}>
            <Text style={styles.countryCode}>{countryCode}</Text>
            <Text style={styles.phNumber}>{phoneNumber}</Text>
          </View>
        </View>
        <Button light onPress={() => onDeleteClicked(contact)}>
          <Icon name="trash" style={styles.deleteContact}/>
        </Button>
      </View>
    );
  }
}


ContactListItem.propTypes = {
  contact: PropTypes.instanceOf(ContactEntity).isRequired,
  onDeleteClicked: PropTypes.func,
};

ContactListItem.defaultProps = {
  onDeleteClicked: () => {
  },
};

const styles = StyleSheet.create({
  root: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 0.5,
    padding: 8,
    flexDirection: 'row',
  },
  contactContent: {
    flex: 1,
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
  deleteContact: {
    color: 'red',
  },
});
