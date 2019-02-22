import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('login mount');
  }

  componentWillUnmount() {
    console.log('login unmount');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.props.isFocused ? '#ffffff' : '#cc0000' }}>
        <Text> Login Screen </Text>
        <Button title="Go to Auth" onPress={() => this.props.navigation.navigate('Auth')} />
      </View>
    );
  }
}

export default withNavigationFocus(LoginScreen);
