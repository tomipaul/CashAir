import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  NativeModules,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from '../containers/Header.js'
import ActivityIndicator from '../containers/ActivityIndicator.js'

import CardIconView from '../components/CardIconView.js'
import Input from '../components/Input.js'
import SubmitButton from '../components/SubmitButton.js'
import Text from '../components/CustomText.js'
import { createTransaction } from '../redux/actions'


export class BuyAirtime extends Component {
  constructor(props) {
    super(props)
    this.nullAmountState = {
      cash: "0.00",
    }
    this.state = {
      airtime: "",
      ...this.nullAmountState,
    }
    this.calculateAmountToPayFromAirtime = this.calculateAmountToPayFromAirtime.bind(this)
  }

  setStateItem = (item) => {
    return (value) => {
      this.setState({
        [item]: value
      })
    }
  }

  handleSubmit = () => {
    this.props.createTransaction('buy', this.state)
  }

  calculateAmountToPayFromAirtime(amount) {
    if (parseInt(amount) > 10000) {
      return this.setState({
        airtime: amount,
        cash: "limit exceeded"
      })
    }
    if (amount == "" || isNaN(amount)) {
      return this.setState({
        airtime: amount,
        ...this.nullAmountState
      })
    }
    cash = Math.ceil((0.95 * parseInt(amount, 10)))
    return this.setState({
      airtime: amount,
      cash: cash.toString()
    })
  }

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <Header text='BUY AIRTIME'  activeMenu='BUY' />
        <View style={styles.amountViewStyle}>
          <Input
            customStyle={{
              width: '50%',
              backgroundColor: 'white',
              marginTop: 10
            }}
            keyboardType='numeric'
            placeholder='Enter Amount'
            value={this.state.airtime}
            onChangeText={this.calculateAmountToPayFromAirtime}
          />
          <Input
            customStyle={{
              color: 'white',
              width: '45%',
              backgroundColor: '#595959',
              marginTop: 10,
            }}
            editable={false}
            keyboardType='numeric'
            textAlign="center"
            value={`NGN ${this.state.cash}`}
          />
        </View>
        <Input
          placeholder='Enter Mobile'
          keyboardType='numeric'
          customStyle={{
            width: '88%',
            backgroundColor: 'white'
          }}
          onChangeText={this.setStateItem("mobile")}
        />
        <View style={styles.paymentView}>
          <Text
            style={styles.paymentHeaderStyle}
          >Payment Details</Text>
          <CardIconView style={{ width: '100%'}} />
          <Text style={styles.inputLabel}>Card number:</Text>
          <Input
            keyboardType='numeric'
            customStyle={{
              width: '95%',
              backgroundColor: 'white'
            }}
            onChangeText={this.setStateItem("cardNumber")}
          />
          <Text style={styles.inputLabel}>Name on card:</Text>
          <Input
            customStyle={{
              width: '95%',
              backgroundColor: 'white'
            }}
            onChangeText={this.setStateItem("cardName")}
          />
          <View
            style={styles.dualFieldsViewStyle}
          >
            <View style={{ width: '49%', marginRight: '1%' }}>
              <Text style={styles.inputLabel}>CVV2:</Text>
              <Input
                keyboardType='numeric'
                secureTextEntry={true}
                customStyle={{
                  width: '90%',
                  marginRight: '5%',
                  backgroundColor: 'white'
                }}
                onChangeText={this.setStateItem("cvv2")}
              />
            </View>
            <View style={{ width: '49%', marginLeft: '1%' }}>
              <Text style={styles.inputLabel}>Expiry Date:</Text>
              <Input
                placeholder="03/99"
                textAlign="center"
                customStyle={{
                  width: '90%',
                  backgroundColor: 'white'
                }}
                onChangeText={this.setStateItem("cardExp")}
              />
            </View>
          </View>
        </View>
        <SubmitButton
          text='Pay Now'
          onPress={() => {
            console.log(this.state)
            this.handleSubmit()
          }}
        />
        <ActivityIndicator />
      </ScrollView>
    )
  }
}

export default connect(
  null,
  { createTransaction }
)(BuyAirtime)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentView: {
    flex: 1,
    width: '90%',
    borderWidth: 5,
    borderColor: '#2E4053',
    borderRadius: 2,
    marginTop: 10,
    padding: 5,
  },
  paymentHeaderStyle: {
    fontSize: 22,
    margin: 5,
    marginBottom: 10,
    color: 'black'
  },
  inputLabel: {
    marginLeft: 5,
    marginBottom: 1,
    fontSize: 17
  },
  dualFieldsViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  amountViewStyle: {
    width: '90%',
    flex: 1,
    flexDirection: 'row'
  }
})