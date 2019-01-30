import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet,
} from 'react-native';

export default class PageInput extends Component {
  render() {
    const {
      value,
      placeholder,
      keyboardType,
      secureTextEntry,
      onChangeText,
      style={}
    } = this.props
    return (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType || 'default'}
          secureTextEntry={secureTextEntry || false}
          autoCorrect={false}
          placeholderTextColor='#6C6C6C'
          underlineColorAndroid='transparent'
          style={[styles.inputStyle, style]}
          value={value}
        />
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 0,
    fontSize: 16,
    fontWeight: '500',
    color: '#5A5959',
    width: '85%',
    height: 40,
    backgroundColor: '#F0EFEF',
    paddingLeft: 20,
    marginBottom: 15,
    paddingBottom: 0,
    paddingTop: 0,
    textAlignVertical: 'center'
  }
})