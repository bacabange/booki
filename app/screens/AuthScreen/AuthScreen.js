import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarVisible: false,
    };
  }; */

  componentDidMount() {
    console.log('auth mount');
  }

  componentWillUnmount() {
    console.log('auth unmount');
  }

  render() {
    return (
      <SafeAreaView style={[{ backgroundColor: '#ecf0f1' }]}>
        <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
        <View>
          <Text> Auth Screen </Text>
          <Button title="Go to Login" onPress={() => this.props.navigation.navigate('Login')} />
        </View>
      </SafeAreaView>
    );
  }
}

export default AuthScreen;
