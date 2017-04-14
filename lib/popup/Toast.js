import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

import React, { Component } from 'react'

export default class Toast extends Component {
  static _popupStub
  static init (popupStub) {
    Toast._popupStub = popupStub
  }
  static show (msg, duration) {
    const id = Toast._popupStub.addPopup(
      <Text>{msg}</Text>
    )

    setTimeout(() => {
      Toast._popupStub.removePopup(id)
    }, duration || 1000)
  }
}

