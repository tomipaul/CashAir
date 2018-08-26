import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  NativeModules,
  Picker,
  PixelRatio,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from '../containers/Header.js'

import Text from '../components/CustomText.js'
import CardIconView from '../components/CardIconView.js'
import Input from '../components/Input.js'
import SubmitButton from '../components/SubmitButton.js'
import ActivityIndicator from '../containers/ActivityIndicator.js'
import { createTransaction } from '../redux/actions'


export class SellAirtime extends Component {
  constructor(props) {
    super(props)
    this.nullAmountState = {
      mobile: "",
      cash: "",
      airtime: ""
    }
    this.state = {
      ...this.nullAmountState
    }
  }

  static navigationOptions = {
    header: null
  };

  calculateAirtimefromCash = (amount) => {
    if (amount == "" || isNaN(amount) ) {
      return this.setState({
        ...this.nullAmountState
      })
    }
    airtime = Math.ceil((parseInt(amount, 10) + 50) / 0.9)
    return this.setState({
      cash: amount,
      airtime: airtime < 500 ? "" : airtime.toString()
    })
  }

  calculateCashFromAirtime = (amount) => {
    if (amount == "" || isNaN(amount) ) {
      return this.setState({
        ...this.nullAmountState
      })
    }
    cash = Math.ceil((0.9 * parseInt(amount, 10)) - 50)
    return this.setState({
      airtime: amount,
      cash: (cash < 0) ? "" : cash.toString()
    })
  }

  setStateItem = (item) => {
    return (value) => {
      this.setState({
        [item]: value
      })
    }
  }

  handleSubmit = () => {
    this.props.createTransaction('sell', this.state)
  }
  
  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <Header text='SELL AIRTIME' activeMenu='SELL' />
        <View style={styles.amountViewStyle}>
          <Text
            style={styles.amountInputLabelStyle}
          >Mobile </Text>
          <Input
            customStyle={{
              width: '60%',
              paddingLeft: 10,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            keyboardType='numeric'
            placeholder='Enter Mobile Number'
            onChangeText={this.setStateItem("mobile")}
          />
        </View>
        <View style={styles.amountViewStyle}>
          <Text
            style={styles.amountInputLabelStyle}
          >Airtime </Text>
          <Input
            customStyle={{
              width: '60%',
              paddingLeft: 10,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            keyboardType='numeric'
            placeholder='Enter Amount'
            value={this.state.airtime}
            onChangeText={this.calculateCashFromAirtime}
          />
        </View>
        <View style={styles.amountViewStyle}>
          <Text
            style={styles.amountInputLabelStyle}
          >Selling Price </Text>
          <Input
            customStyle={{
              width: '60%',
              paddingLeft: 10,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            keyboardType='numeric'
            placeholder='Enter Amount'
            value={this.state.cash}
            onChangeText={this.calculateAirtimefromCash}
          />
        </View>

        <View style={styles.paymentView}>
          <Text
            style={styles.paymentHeaderStyle}
          >Account Details</Text>

          <Text style={styles.inputLabel}>Bank Name:</Text>
          <Picker
            selectedValue={this.state.bankName}
            style={{ height: 50, width: 120 }}
            onValueChange={(itemValue, itemIndex) => this.setState({bankName: itemValue})}>
            <Picker.Item label="GTBank" value="gtb" />
            <Picker.Item label="Fidelity Bank" value="fidelity" />
            <Picker.Item label="Access Bank" value="access" />
          </Picker>

          <Text style={styles.inputLabel}>Account Number:</Text>
          <Input
            keyboardType='numeric'
            customStyle={{
              paddingLeft: 10,
              width: '95%',
              backgroundColor: 'white'
            }}
          />

          <Text style={styles.inputLabel}>Account Name:</Text>
          <Input
            customStyle={{
              paddingLeft: 10,
              width: '95%',
              backgroundColor: 'white'
            }}
          />

        </View>
        <SubmitButton
          text='Send'
          onPress={this.handleSubmit}
        />
        <ActivityIndicator />
      </ScrollView>
    )
  }
}

export default connect(
  null,
  { createTransaction }
)(SellAirtime)


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
    color: 'black',
  },
  inputLabel: {
    marginLeft: 5,
    marginBottom: 1,
    fontSize: (PixelRatio.get() > 2.5) ? 20 : PixelRatio.get() * 10,
  },
  dualFieldsViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  amountInputLabelStyle: {
    fontSize: (PixelRatio.get() > 2.5) ? 20 : PixelRatio.get() * 10,
    width: '35%',
    alignSelf: 'center',
    marginLeft: 5
  },
  amountViewStyle: {
    width: '90%',
    flex: 1,
    flexDirection: 'row'
  }
})