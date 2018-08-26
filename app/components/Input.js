import React, { Component } from 'react'
import {
  TextInput,
  View,
  Image,
  PixelRatio,
  StyleSheet,
} from 'react-native';

const styles = {
  textInput: {
    borderColor: '#2E4053',
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    fontSize: (PixelRatio.get() > 2.5) ? 19 : PixelRatio.get() * 9,
    fontFamily: 'times new roman',
    margin: 5,
    paddingLeft: 10
  }
}

export default class Input extends Component {
  render() {
    const {
      customStyle,
      editable,
      keyboardType,
      onChangeText,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      textAlign,
      value
    } = this.props
    return (
      <TextInput
        value={value}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry || false}
        textAlign={textAlign}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        onChangeText={onChangeText}
        style={{
          ...styles.textInput,
          ...customStyle
        }}
      />
    )
  }
}
