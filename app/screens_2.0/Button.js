import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Text from '../components/CustomText'


export default class Button extends Component {
  render() {
    const { text, buttonStyle={}, textStyle, onPress, children } = this.props
    return (
      <TouchableOpacity
        style={[styles.buttonStyle, buttonStyle]}
        onPress={onPress}
      >
        {text && <Text style={[textStyle]}>{text}</Text>}
        {children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50
  }
})