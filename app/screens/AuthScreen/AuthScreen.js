import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
        <Button title="Go to Login" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}

export default LoginScreen;
