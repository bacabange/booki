import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Login Screen </Text>
        <Button title="Go to Auth" onPress={() => this.props.navigation.navigate('Auth')} />
      </View>
    );
  }
}

export default AuthScreen;
