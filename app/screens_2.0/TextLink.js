import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/CustomText'

export default class TextLink extends Component {
  render() {
    const { text, linkStyle, textStyle, onPress } = this.props
    return (
      <TouchableOpacity
        style={linkStyle ? [styles.linkStyle, linkStyle] : styles.linkStyle}
        onPress={onPress}
      >
        <Text style={[textStyle]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  linkStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})