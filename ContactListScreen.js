import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content, Fab, Icon,
} from 'native-base';
import ContactList from './contact/ContactList';

export default class ContactListScreen extends React.Component {
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
      const { navigation } = this.props;
      const { contacts } = this.state;
      return (
        <Container>
          <Content padder>
            <ContactList contactList={contacts} />
          </Content>
          <View style={{ flex: 1 }}>
            <Fab onPress={() => navigation.navigate('AddContact',
              {
                onContactAdded: this.onContactAdded,
              })}
            >
              <Icon name="add" style={styles.fabIcon} />
            </Fab>
          </View>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  fabIcon: { fontSize: 24, color: 'white' },
});
