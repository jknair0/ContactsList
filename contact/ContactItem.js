import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactEntity from './ContactEntity';
import { removeContact } from './reducers/actions';


class ContactItem extends Component {
  render() {
    const { contact } = this.props;
    const {
      uuid, name, countryCode, phoneNumber,
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
        <Button light onPress={() => this.onDeleteClicked(uuid)}>
          <Icon name="trash" style={styles.deleteContact} />
        </Button>
      </View>
    );
  }

  onDeleteClicked(uuid) {
    const { removeContact } = this.props;
    removeContact(uuid);
  }
}


ContactItem.propTypes = {
  contact: PropTypes.instanceOf(ContactEntity),
};

ContactItem.defaultProps = {
  contact: ContactEntity('No Name', '+91', 1234567890),
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeContact,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ContactItem);
