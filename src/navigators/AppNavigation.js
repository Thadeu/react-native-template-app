import React from 'react';
import { Animated, Easing } from 'react-native'
import StackNavigators from '@helpers/StackNavigators'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import Expo from 'expo'
import Colors from '@constants/colors'

import HomeScreen from '@screens/HomeScreen'

const Icon = ({ name, tintColor }) => <EvilIcons name={name} size={35} style={{ color: tintColor }} />

const StackNavigatorConfig = {
  headerMode: 'screen',
  // transitionConfig : () => ({
  //   transitionSpec: {
  //     duration: 0,
  //     timing: Animated.timing,
  //     easing: Easing.back(),
  //   },
  // }),
}

const HeaderStyle = {
  headerTitleStyle: {
    color: 'white'
  },
  headerStyle: {
    backgroundColor: Colors.PRIMARY
  },
  headerTintColor: {
    color: 'white'
  },
}

const AppNavigation = StackNavigators({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      ...HeaderStyle
    }
  }
}, StackNavigatorConfig)


export default AppNavigation