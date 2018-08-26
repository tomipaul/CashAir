import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';

import Text from "./CustomText.js"

export default class SubmitButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#595959',
    padding: 2,
    marginTop: 10,
    marginBottom: 10,
    width: '40%',
    height: 60,
    borderWidth: 2,
    borderColor: '#595959',
    borderRadius: 5
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  }
})
