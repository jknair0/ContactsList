import React from 'react';

import {
  Container, Content, Form, Input, Item, Button,
} from 'native-base';
import {
  Text, StyleSheet, Alert,
} from 'react-native';
import ContactEntity from '../contact/ContactEntity';

export default class AddContactScreen extends React.Component {
    static navigationOptions = {
      title: 'Add Contact',
    };

    state = {
      name: '',
      phNumber: '',
    };

    onCreate() {
      const { name, phNumber } = this.state;
      const { navigation } = this.props;
      if (name.length !== 0 && phNumber.length !== 0) {
        const contact = new ContactEntity(name, '+91', phNumber);
        const onContactAddedCallback = navigation.getParam('onContactAdded', () => {});
        onContactAddedCallback(contact);
      }
      navigation.goBack();
    }

    render() {
      const { name, phNumber } = this.state;
      return (
        <Container>
          <Content>
            <Form>
              <Item>
                <Input keyboardType="default" placeholder="Enter Name" onChangeText={text => this.setState({ name: text })} value={name} />
              </Item>
              <Item>
                <Input keyboardType="phone-pad" placeholder="Enter Mobile Number" onChangeText={text => this.setState({ phNumber: text })} value={phNumber} />
              </Item>
            </Form>
            <Button
              title="Create"
              onPress={() => this.onCreate()}
              style={styles.createButton}
              primary
            >
              <Text style={{ color: 'white' }}>Create</Text>
            </Button>
          </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  createButton: { justifyContent: 'center', margin: 8 },
});
