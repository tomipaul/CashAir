import React, { Component } from 'react'
import {
  View,
  Image,
  PixelRatio,
  StyleSheet,
} from 'react-native';

import Text from './CustomText.js'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Transaction extends Component {
  render() {
    const {type, mobile, cash, completed} = this.props
    console.log(type, mobile, cash, completed)
    return (
      <View style={styles.transaction}>
        <Icon name="angle-double-right" size={40} color="#14BE45" />
        <Text style={[
          styles.allColumn,
          styles.typeColumn,
          completed ? styles.isCompletedTrue : styles.isCompletedFalse
        ]}>{type.toUpperCase()}</Text>
        <Text style= {[
          styles.allColumn,
          styles.mobileColumn,
          completed ? styles.isCompletedTrue : styles.isCompletedFalse
        ]}>{mobile}</Text>
        <Text style={[
          styles.allColumn,
          styles.amountColumn,
          styles.textCenterAlign,
          completed ? styles.isCompletedTrue : styles.isCompletedFalse
        ]}>{`NGN ${cash}`}</Text>
        <Text style={[
          styles.allColumn,
          styles.typeColumn,
          styles.textCenterAlign
        ]}>
          {
            completed ?
            <Icon name="check" size={28} color="#14BE45" /> :
            <Icon name="times" size={28} color="#C51C19" />
          }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  transaction: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginBottom: '1%',
    marginTop: '1%',
    width: '90%',
    paddingTop: '2%',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allColumn: {
    fontSize: 18
  },
  typeColumn:{
    flex: 0.2,
  },
  amountColumn: {
    flex: 0.2,
  },
  mobileColumn: {
    flex: 0.5,
  },
  textCenterAlign: {
    textAlign: 'center'
  },
  isCompletedTrue: {
    color: 'black'
  },
  isCompletedFalse: {
    color: 'black'
  }
})
