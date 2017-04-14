/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import Index from './index'

export default class example extends Component {
  render () {
    return (
      <Index />
    )
  }
}
AppRegistry.registerComponent('example', () => example)
