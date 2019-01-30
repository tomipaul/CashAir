import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native';

export default class GradientBackground extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#D35757', '#832828']}
        style= {styles.gradientStyle}
      >{this.props.children}</LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})