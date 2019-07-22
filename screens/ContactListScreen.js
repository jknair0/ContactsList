import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {
  Container, Content, Fab, Icon,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from '../contact/ContactList';
import ContactEntity from '../contact/ContactEntity';


class ContactListScreen extends React.Component {
    static navigationOptions = {
      title: 'Contact List',
    };

    state = {
      contacts: [],
    };

    onContactAdded = (contact) => {
      const { contacts } = this.state;
      this.setState({
        contacts: [
          ...contacts, contact,
        ],
      });
    };


    render() {
      const { navigation, contacts } = this.props;
      return (
        <Container>
          <Content padder>
            <ContactList contactList={contacts} />
          </Content>
          <View style={{ flex: 1 }}>
            <Fab onPress={() => navigation.navigate('AddContact', { onContactAdded: this.onContactAdded })}>
              <Icon name="add" style={styles.fabIcon} />
            </Fab>
          </View>
        </Container>
      );
    }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactEntity),
};

ContactList.defaultProps = {
  contacts: [],
};

const styles = StyleSheet.create({
  fabIcon: { fontSize: 24, color: 'white' },
});

const mapReduxStateToProps = ({ contacts }) => ({ contacts });

export default connect(mapReduxStateToProps)(ContactListScreen);
