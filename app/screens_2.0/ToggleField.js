import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

import Text from '../components/CustomText'

export default class ToggleField extends Component {
    render() {
      const { label, onValueChange, value, textStyle={}, style={} } = this.props
      return (
        <View style={[styles.viewStyle, style]}>
          <Text style={[styles.textStyle, textStyle]}>{label}</Text>
          <ToggleSwitch
            isOn={value}
            onColor='#D35757'
            offColor='#DCDCDC'
            size='medium'
            onToggle={onValueChange}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '85%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  }
})