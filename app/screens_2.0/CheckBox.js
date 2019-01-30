import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Text from '../components/CustomText'
import Button from './Button'


export default class CheckBox extends Component {
    render() {
      const { label, onClick, checked, textStyle={}, style={} } = this.props
      return (
        <View style={[styles.viewStyle, style]}>
          <Button
            buttonStyle={styles.checkBoxButtonStyle}
            onPress={() => onClick(!checked)}
          >
            {
              checked ?
              <Image
                source={require('../images/check_true.png')}
                style ={styles.imageTrueStyle}
                resizeMode='stretch'
              /> :
              <Image
                source={require('../images/check_false.png')}
                style ={styles.imageFalseStyle}
                resizeMode='stretch'
              />
            }
          </Button>
          <View style={{ height: '100%', width: '2%' }} />
          <Text style={[styles.textStyle, textStyle]}>{label}</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '85%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkBoxButtonStyle: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    paddingTop: '1%'
  },
  imageTrueStyle: {
    width: 30,
    height: 30
  },
  imageFalseStyle: {
    width: 25,
    height: 24,
    marginTop: 3
  }
})