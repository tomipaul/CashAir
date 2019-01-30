import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class AuthHeader extends Component{
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          source={require('../images/Text.png')}
          style={styles.imageStyle}
          resizeMode='stretch'
          resizeMethod='scale'
        />
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
    minHeight: '15%',
    backgroundColor: 'transparent',
  },
  imageStyle: {
    width: 140,
    height: 40,
  }
})
