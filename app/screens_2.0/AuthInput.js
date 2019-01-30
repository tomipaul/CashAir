import React, { Component } from 'react'
import {
  TextInput,
  PixelRatio,
  StyleSheet,
} from 'react-native';

export default class AuthInput extends Component {
  render() {
    const {
      value,
      placeholder,
      keyboardType,
      secureTextEntry,
      onChangeText
    } = this.props
    return (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType || 'default'}
          secureTextEntry={secureTextEntry || false}
          autoCorrect={false}
          placeholderTextColor='rgba(251, 252, 252, 0.5)'
          underlineColorAndroid='transparent'
          selectionColor='white'
          style={style.inputStyle}
        />
    )
  }
}

const style = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FDFEFE',
    color: 'white',
    paddingBottom: 5,
    paddingLeft: 0,
    width: '80%',
    marginBottom: 40
  }
})