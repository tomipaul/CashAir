import React, { Component } from 'react'
import {StyleSheet, View, ScrollView, Dimensions } from 'react-native'

import PageHeader from './PageHeader'
import PageGradientLine from './PageGradientLine'
import PageFooter from './PageFooter'

const { height } = Dimensions.get('window')


export default class PageBase extends Component {
  render() {
    const { headerText } = this.props
    
    return (
      <View style={styles.container}>
        <PageHeader text={headerText} />
        <PageGradientLine />
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewContainerStyle}
          keyboardShouldPersistTaps='always'
          nestedScrollEnabled
        >
          {this.props.children}
        </ScrollView>
        <PageGradientLine reverse />
        <PageFooter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    flex: 0,
    width: '100%',
    height: '76%'
  },
  scrollViewContainerStyle: {
    flex: 0,
    width: '100%',
    minHeight: 0.78 * height,
    alignItems: 'center'
  }
})