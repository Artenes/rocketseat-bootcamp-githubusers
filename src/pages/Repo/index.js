import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Repo() {
  return <View />;
}

Repo.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repo').name,
});
