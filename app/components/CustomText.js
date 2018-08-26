import React, { Component } from 'react'
import {
  StyleSheet,
  Text
} from 'react-native';

export default class CustomText extends Component {
    render() {
        const { children, style } = this.props
        return (
          <Text
            style={
              StyleSheet.flatten([styles.default, style])
            }
          >{children}
          </Text>
        )
    }
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'times new roman'
  }
})