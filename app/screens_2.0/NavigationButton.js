import React, { Component } from 'react'

import Button from './Button'

export default class NavigationButton extends Component {
  render() {
    const { text, onPress, active, textStyle={}, buttonStyle={} } = this.props
    return (
      <Button
        text={text}
        active={active}
        buttonStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '23%',
          height: '100%',
          ...buttonStyle
        }}
        textStyle={{
          fontSize: 18,
          fontWeight: '800',
          color: active ? '#D35757' : 'black',
          ...textStyle
        }}
        onPress={onPress}
      />
    )
  }
}
