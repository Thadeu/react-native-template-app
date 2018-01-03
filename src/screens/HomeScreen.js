import React from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import { Text, View } from 'glamorous-native'
import { Ionicons } from '@expo/vector-icons'
import { StackNavigators } from '@helpers/StackNavigators'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'App'
  }

  state = {
    fadeIn: new Animated.Value(0),
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeIn, {toValue: 1, duration: 500 }).start();
  }

  render() {
    let { fadeIn, positionRight, widthHeight, positionBottom } = this.state;

    return (
      <View style={styles.container}>
        <Text>HelloWorld App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});