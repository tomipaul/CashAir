import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import NavigationButton from './NavigationButton'

export default class PageFooter extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <NavigationButton
          text='Buy'
          onPress={() => {}}
        />
        <NavigationButton
          text='Sell'
          onPress={() => {}}
        />
        <NavigationButton
          text='Log'
          onPress={() => {}}
          active
        />
        <NavigationButton
          text='Sign out'
          onPress={() => {}}
          buttonStyle={{
            width: '31%'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  }
})