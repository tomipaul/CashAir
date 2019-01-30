import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';

import PageBase from './PageBase'
import SharedInputs from './SharedInputs'
import GradientButton from './GradientButton'
import Inputline from './InputLine'
import Text from '../components/CustomText'


export default class BuyAirtime extends Component {
  saveInState = (key) => {
    return (value) => {
      this.setState({
        [key]: value
      })
    }
  }

  render() {
    return (
      <PageBase headerText='BUY AIRTIME'>
        <View style={{ height: '6%' }} />
        <SharedInputs
          state={{}}
          onChangeText={this.saveInState}
        />
        <View style={{ height: '13%' }} />
        <View style={styles.paymentCardView}>
          <View
            style={[styles.paymentCardFieldView, styles.paymentCardNumberView]}
          >
            <Text style={[styles.cardInputLabel]}>
              Card Number
            </Text>
            <Inputline
              onChangeText={() => {}}
              selectionColor='black'
              keyboardType='numeric'
              style={styles.cardInputLineText}
            />
          </View>
          <View style={{ height: '25%' }} />
          <View style={styles.paymentDetailsRow}>
            <View
              style={[styles.paymentCardFieldView, styles.paymentCardExpirationView]}
            >
              <Text style={[styles.cardInputLabel]}>
                Exp. Date
              </Text>
              <View style={styles.cardExpirationInputView}>
                <Inputline
                  onChangeText={() => {}}
                  selectionColor='black'
                  keyboardType='numeric'
                  style={[styles.cardInputLineText, styles.cardExpirationInput]}
                />
                <Text style={[styles.cardExpirationInputSeparator]}>/</Text>
                <Inputline
                  onChangeText={() => {}}
                  selectionColor='black'
                  keyboardType='numeric'
                  style={[styles.cardInputLineText, styles.cardExpirationInput]}
                />
              </View>
            </View>
            <View style={{ width: '10%'}} />
            <View style={[styles.paymentCardFieldView, styles.paymentCardCVVPinView]}>
              <Text style={[styles.cardInputLabel]}>
                CVV
              </Text>
              <Inputline
                onChangeText={() => {}}
                selectionColor='black'
                keyboardType='numeric'
                style={[styles.cardInputLineText]}
              />
            </View>
            <View style={{ width: '12%'}} />
            <View style={[styles.paymentCardFieldView, styles.paymentCardCVVPinView]}>
              <Text style={[styles.cardInputLabel]}>
                Pin
              </Text>
              <Inputline
                onChangeText={() => {}}
                selectionColor='black'
                keyboardType='numeric'
                secureTextEntry={true}
                style={[styles.cardInputLineText]}
              />
            </View>
            <View style={{ width: '22%' }} />
            <Icon
              name={'credit-card'}
              style={styles.iconStyle}
            />
          </View>
        </View>
        <View style={{ height: '10%' }} />
        <GradientButton
          text='BUY AIRTIME'
          gradientViewStyle={{ height: '8%' }}
          onPress={() => {}}
        />
      </PageBase>
    )
  }
}

const styles = StyleSheet.create({
  paymentCardView: {
    width: '85%',
    height: '30%',
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: '#A3A5A5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paymentCardFieldView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardInputLabel: {
    fontSize: 14,
    fontWeight: '900',
    color: '#A3A5A5',
    width: '100%',
  },
  cardInputLineText: {
    width: '100%',
    borderBottomColor: 'black',
    fontSize: 16,
    color: 'black',
    paddingTop: 0,
    fontWeight: '500'
  },
  cardExpirationInputView: {
    width: '100%',
    flexDirection: 'row'
  },
  cardExpirationInput: {
    width: '35%',
  },
  cardExpirationInputSeparator: {
    fontSize: 22,
    fontWeight: '400',
    paddingLeft: 3
  },
  paymentCardNumberView: {
    width: '90%',
  },
  paymentDetailsRow: {
    flexDirection: 'row',
    width: '90%'
  },
  paymentCardExpirationView: {
    width: '25%'
  },
  paymentCardCVVPinView: {
    width: '12%'
  }, 
  iconStyle: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 10,
    position: 'absolute',
    right: 0,
  }
})