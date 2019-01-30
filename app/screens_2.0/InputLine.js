import React, { Component } from 'react'
import {
  TextInput,
  PixelRatio,
  StyleSheet,
} from 'react-native';

export default class InputLine extends Component {
  state = {
    hasFocus: false
  }
  render() {
    const {
      value,
      placeholder,
      keyboardType,
      secureTextEntry,
      onChangeText,
      onFocus,
      selectionColor='white',
      placeholderTextColor='rgba(251, 252, 252, 0.5)',
      style={},
    } = this.props
    return (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={onFocus}
          keyboardType={keyboardType || 'default'}
          secureTextEntry={secureTextEntry || false}
          autoCorrect={false}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid='transparent'
          selectionColor={selectionColor}
          style={[styles.inputStyle, style]}
        />
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#FDFEFE',
    color: 'white',
    paddingBottom: 0,
    paddingLeft: 0,
    width: '80%',
  }
})