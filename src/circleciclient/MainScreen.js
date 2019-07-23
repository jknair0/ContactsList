import React from 'react';
import {
  Text, SafeAreaView, View, Image, StyleSheet, ScrollView, FlatList,
} from 'react-native';
import axios from 'axios';
import { Button, Title } from 'native-base';
import { circleciApiKey } from '../../ApiToken';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    header: null,
  };

  state = {
    response: 'Nothing was here!',
    userImageUrl: '',
    userName: 'User',
    projects: [],
  };

  componentDidMount(): void {
    this.fetchFromApi();
  }

  fetchFromApi() {
    const { navigation } = this.props;
    const url = `https://circleci.com/api/v1.1/me?circle-token=${circleciApiKey}`;
    axios.get(url)
      .then((output) => {
        const root = output.data.identities.bitbucket;
        const { projects } = output.data;
        const { name: userName, avatar_url: avatarUrl } = root;
        this.setState({
          response: JSON.stringify(Object.keys(root)),
          userImageUrl: avatarUrl,
          userName,
          projects,
        });
      }).catch((error) => {
        this.setState({ response: `error: ${JSON.stringify(error)}` });
      });
  }

  static projectsAdapter(data) {
    const array = data.split('/');
    const projectName = array[array.length - 1];
    return (
      <Text style={styles.projectItem}>
        { projectName }
      </Text>
    );
  }

  render() {
    const {
      response, userImageUrl, userName, projects,
    } = this.state;
    return (
      <SafeAreaView>
        <Image
          style={styles.image}
          source={{ uri: `${userImageUrl}` }}
        />
        <Title style={styles.title}>{userName}</Title>
        <FlatList
          data={Object.keys(projects)}
          renderItem={({ item }) => MainScreen.projectsAdapter(item)}
        />
        <ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#efefef',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignSelf: 'center',
    margin: 8,
  },
  title: {
    margin: 8,
  },
  projectItem:{
    padding: 8,
    backgroundColor: '#efefef',
  },
});
