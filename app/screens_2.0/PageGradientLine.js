import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native';

export default class PageGradientLine extends Component {
  render() {
    const { reverse } = this.props
    return (
      <LinearGradient
        colors={reverse ? ['white', '#EAE9E9'] : ['#E1E1E1', 'white']}
        style={styles.gradientStyle}
      />
    )
  }
}

const styles = StyleSheet.create({
  gradientStyle: {
    width: '100%',
    height: '2%'
  }
})

