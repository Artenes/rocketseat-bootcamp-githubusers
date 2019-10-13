import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';

import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  LoadingMoreIndicator,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loadingMore: false,
    refreshing: false,
    page: 1,
  };

  async componentDidMount() {
    this.setState({ refreshing: true });
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, refreshing: false });
  }

  refreshList = async () => {
    this.setState({ refreshing: true });
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, refreshing: false });
  };

  loadMore = async () => {
    this.setState({ loadingMore: true });
    const { navigation } = this.props;
    let { page } = this.state;
    const { stars } = this.state;
    const user = navigation.getParam('user');

    page += 1;

    const response = await api.get(`/users/${user.login}/starred?page=${page}`);

    this.setState({
      stars: [...stars, ...response.data],
      page,
      loadingMore: false,
    });
  };

  handleOpenRepo = repo => {
    const { navigation } = this.props;
    navigation.navigate('Repo', { repo });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loadingMore, refreshing } = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          onEndReachedThreshold={0.2}
          onEndReached={this.loadMore}
          onRefresh={this.refreshList}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <TouchableNativeFeedback onPress={() => this.handleOpenRepo(item)}>
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            </TouchableNativeFeedback>
          )}
        />
        {loadingMore && <LoadingMoreIndicator />}
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
