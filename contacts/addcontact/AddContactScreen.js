import React from 'react';

import {
  Container, Content, Form, Input, Item, Button,
} from 'native-base';
import {
  Text, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactEntity from '../ContactEntity';
import { addContact } from '../reducers/actions';

export class AddContactScreen extends React.Component {
    static navigationOptions = {
      title: 'Add Contact',
    };

    state = {
      name: '',
      phNumber: '',
    };

    onCreate() {
      const { name, phNumber } = this.state;
      const { addContact, navigation } = this.props;
      addContact(new ContactEntity(name, '+1', phNumber));
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
