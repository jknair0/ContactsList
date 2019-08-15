import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Button, Container, Content, Fab, Icon, Text, } from 'native-base';
import PropTypes from 'prop-types';
import ContactsFlatList from '../components/ContactsFlatList';
import ContactEntity from '../ContactEntity';

const CIRCLECI_CLIENT_SCREEN = 'navigateCircleciScreen';

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Contact List',
    headerRight: (
      <Button transparent onPress={navigation.getParam(CIRCLECI_CLIENT_SCREEN)}>
        <Text>CI client</Text>
      </Button>
    ),
  });

  componentDidMount(): void {
    const { navigation } = this.props;
    navigation.setParams({
      [CIRCLECI_CLIENT_SCREEN]: () => navigation.navigate('MainScreen'),
    });
  }

  render() {
    const { navigation, contactsState, removeContact } = this.props;
    const { contacts, waiting } = contactsState;
    return (
      <Container>
        <Content padder>
          <ContactsFlatList
            contactList={contacts}
            onDeleteClicked={contact => removeContact(contact)}
          />
        </Content>
        <Fab onPress={() => navigation.navigate('AddContact',
          { onContactAdded: this.onContactAdded })}
        >
          <Icon name="add" style={styles.fabIcon}/>
        </Fab>
        {waiting && (
          <View style={{ flex: 1 }}>
            <ActivityIndicator/>
          </View>
        )}
      </Container>
    );
  }
}

ContactListScreen.propTypes = {
  contactsState: PropTypes.objectOf({
    contacts: PropTypes.arrayOf(ContactEntity),
    waiting: PropTypes.bool,
  }),
  removeContact: PropTypes.func,
};

ContactListScreen.defaultProps = {
  contactsState: {
    contacts: [],
    waiting: false,
  },
  removeContact: () => {
  },
};

const styles = StyleSheet.create({
  fabIcon: { fontSize: 24, color: 'white' },
});
