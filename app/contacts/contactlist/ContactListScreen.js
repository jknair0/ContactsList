import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button, Container, Content, Fab, Icon, Text,
} from 'native-base';
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
    const { navigation, contacts, removeContact } = this.props;
    return (
      <Container>
        <Content padder>
          <ContactsFlatList
            contactList={contacts}
            onDeleteClicked={contact => removeContact(contact)}
          />
        </Content>
        <View style={{ flex: 1 }}>
          <Fab onPress={() => navigation.navigate('AddContact',
            { onContactAdded: this.onContactAdded })}
          >
            <Icon name="add" style={styles.fabIcon} />
          </Fab>
        </View>
      </Container>
    );
  }
}

ContactListScreen.propTypes = {
  contacts: PropTypes.arrayOf(ContactEntity).isRequired,
  removeContact: PropTypes.func,
};

ContactListScreen.defaultProps = {
  removeContact: () => {
  },
};

const styles = StyleSheet.create({
  fabIcon: { fontSize: 24, color: 'white' },
});
