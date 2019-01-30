import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Button from './Button'

export default class GradientButton extends Component {
  render() {
    const {
      text, buttonTextStyle={},
      gradientViewStyle={}, onPress } = this.props

    return (
      <LinearGradient
        colors={['#D35757', '#832828']}
        style={[styles.gradientViewStyle, gradientViewStyle]}
      >
        <Button
          text={text}
          buttonStyle={styles.buttonStyle}
          textStyle={[styles.buttonTextStyle, buttonTextStyle]}
          onPress={onPress}
        />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  gradientViewStyle: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 40,
    borderRadius: 50,
    elevation: 4,
  },
})