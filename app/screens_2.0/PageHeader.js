import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Text from '../components/CustomText'

export default class PageHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.viewStyle}>
        <Text style={[styles.textStyle]}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  textStyle: {
    color: '#D35757',
    fontSize: 22,
    fontWeight: '800'
  }
})