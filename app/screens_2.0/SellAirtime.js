import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import LinearGradient from 'react-native-linear-gradient'

import PageBase from './PageBase'
import PageInput from './PageInput'
import ToggleField from './ToggleField'
import GradientButton from './GradientButton'
import CheckBox from './CheckBox'
import SharedInputs from './SharedInputs'
import { Picker, PickerItem } from './Picker'
import Text from '../components/CustomText'


const AccountPicker = (selectedAccount, onSelectAccount) =>
  <React.Fragment>
    <View style={{ height: '24%' }} />
    <Picker
      placeholder="Select Account"
      style={{ height: 45 }}
      onSelect={onSelectAccount}
      selected={selectedAccount}
    >
      {
        accountNoDummyData.map(({accountName, accountNo},) =>
          <PickerItem
            key={accountNo}
            name={accountNo}
            value={`${accountName}  -  ${accountNo}`}
          >
            <View style={styles.pickerItemStyle}>
              <Text style={[styles.pickerItemTextStyle]}>{accountName}</Text>
              <Text style={[styles.pickerItemTextStyle]}>{accountNo}</Text>
            </View>
          </PickerItem>
        )
      }
    </Picker>
  </React.Fragment>

const BankPicker = (selectedBank, onSelectBank) =>
  <React.Fragment>
    <Picker
      placeholder="Select Bank"
      style={{ height: 40 }}
      onSelect={onSelectBank}
      selected={selectedBank}
    >
      {
        banksDummyData.map((bankName, index) =>
          <PickerItem
            key={index}
            name={bankName}
            value={bankName}
          >
            <View style={styles.pickerItemStyle}>
              <Text style={[styles.pickerItemTextStyle]}>{bankName}</Text>
            </View>
          </PickerItem>
        )
      }
    </Picker>
    <View style={{ height: 15 }} /> 
  </React.Fragment>

export default class SellAirtime extends Component {
  state = {
    selectedAccount: {},
    selectedBank: '',
    useExistingAccount: true,
    isSaveAccountChecked: false,
  }

  onSelectPickerItem = (type) => {
    return (name, value) => {
      this.setState({
        [type]: { name, value }
      })
    }
  }
  
  saveInState = (key) => {
    return (value) => {
      this.setState({
        [key]: value
      })
    }
  }

  render() {
    const {
      selectedAccount,
      selectedBank,
      useExistingAccount,
      isSaveAccountChecked,
      amount,
      price,
      mobileNumber,
      accountName,
      accountNo
    } = this.state
    return (
      <PageBase headerText='SELL AIRTIME'>
        <View style={{ height: '6%' }} />
        <SharedInputs
          state={{ amount, price, mobileNumber}}
          onChangeText={this.saveInState}
        />
        <ToggleField
          value={useExistingAccount}
          label='Use existing account'
          onValueChange={this.saveInState('useExistingAccount')}
        />
        <View style={styles.pickerContainerStyle}>
          {
            useExistingAccount ?
            AccountPicker(
              selectedAccount, this.onSelectPickerItem('selectedAccount')
            ) :
            (
              <View style={styles.newAccountFormStyle}>
                {BankPicker(selectedBank, this.onSelectPickerItem('selectedBank'))}
                <PageInput
                  placeholder={'Account Name'}
                  value={accountName}
                  onChangeText={this.saveInState('accountName')}
                  style={{ width: '100%' }}
                />
                <PageInput
                  placeholder={'Account Number'}
                  keyboardType='numeric'
                  value={accountNo}
                  onChangeText={this.saveInState('accountNo')}
                  style={{ width: '100%' }}
                />
                <CheckBox
                  label="Save Account"
                  onClick={this.saveInState('isSaveAccountChecked')}
                  checked={isSaveAccountChecked}
                  style={{ height: '10%', width: '100%' }}
                />
              </View>
            )
          }
        </View>      
        <View style={styles.buttonViewStyle}>
          <GradientButton
            text='SELL AIRTIME'
            gradientViewStyle={styles.gradientStyle}
            onPress={() => {}}
          />
        </View>
      </PageBase>
    )
  } 
}

const styles = StyleSheet.create({
  buttonViewStyle: {
    width: '100%',
    height: '10%',
    zIndex: -2,
    alignItems: 'center',
  },
  gradientStyle: {
    height: '80%',
  },
  pickerContainerStyle: {
    flex: 0,
    width: '85%',
    height: '42%',
    alignItems: 'center',
  },
  pickerItemStyle: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  pickerItemTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  newAccountFormStyle: {
    width: '100%',
    height: '100%',
    marginTop: '2%'
  }
})

const accountNoDummyData = [
  {
    accountName: 'GTBank',
    accountNo: '0711081442'
  },
  {
    accountName: 'Access Bank',
    accountNo: '0209901200'
  },
  {
    accountName: 'Stanbic IBTC',
    accountNo: '0371901050'
  },
  {
    accountName: 'Fidelity Bank',
    accountNo: '0431290012'
  }
]

const banksDummyData = [
  'GTBank', 'Access Bank',
  'Stanbic IBTC', 'Fidelity Bank'
]