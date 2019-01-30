import React, { Component } from 'react'
import GradientBackground from './GradientBackground'
import { ScrollView, StyleSheet } from 'react-native'

import AuthHeader from './AuthHeader'

export default class AuthBase extends Component {
  render() {
    return (
      <GradientBackground>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.viewStyle}
          keyboardShouldPersistTaps='always'
        >
          <AuthHeader />
          {this.props.children}
        </ScrollView>
      </GradientBackground>
    )
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 0,
    backgroundColor: 'transparent',
    width: '100%',
    minHeight: '100%'
  },
  viewStyle: {
    width: '100%',
    height: '100%'
  }
})