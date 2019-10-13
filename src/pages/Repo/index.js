import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import { LoadingIndicator } from './styles';

export default class Repo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repo').name,
  });

  state = {
    loading: false,
  };

  render() {
    const { loading } = this.state;
    const { navigation } = this.props;
    return (
      <>
        <WebView
          source={{ uri: navigation.getParam('repo').html_url }}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
        />
        {loading && <LoadingIndicator />}
      </>
    );
  }
}

Repo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
